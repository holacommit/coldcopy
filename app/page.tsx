"use client"

import { useState, useEffect, useRef } from "react"
import { LandingHero } from "@/components/LandingHero"
import { InputForm } from "@/components/InputForm"
import { LoadingState } from "@/components/LoadingState"
import { SequenceOutput } from "@/components/SequenceOutput"
import { Paywall } from "@/components/Paywall"
import {
  canGenerate,
  markFreeSequenceUsed,
  isUnlocked,
  loadKey,
  needsRevalidation,
  validateKeyWithServer,
  clearKey,
} from "@/lib/license"
import type { Email } from "@/lib/parser"
import type { GenerateRequest } from "@/app/api/generate/route"

type AppState =
  | { view: "hero" }
  | { view: "form" }
  | { view: "loading" }
  | { view: "output"; emails: Email[] }
  | { view: "paywall" }
  | { view: "error"; message: string }

export default function Home() {
  const [state, setState] = useState<AppState>({ view: "hero" })
  const [unlocked, setUnlocked] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const unlocked = isUnlocked()
    setUnlocked(unlocked)

    // Re-validate subscription status silently in the background every 24h.
    // If the subscription lapsed, clear the key and show the paywall on next generate.
    if (unlocked && needsRevalidation()) {
      const key = loadKey()
      if (key) {
        validateKeyWithServer(key).then((result) => {
          if (!result.valid) {
            clearKey()
            setUnlocked(false)
          }
        })
      }
    }
  }, [])

  function scrollToForm() {
    setState({ view: "form" })
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 50)
  }

  async function handleGenerate(data: GenerateRequest) {
    if (!canGenerate()) {
      setState({ view: "paywall" })
      return
    }

    setState({ view: "loading" })

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok || json.error) {
        setState({ view: "error", message: json.error ?? "Something went wrong. Try again." })
        return
      }

      if (!unlocked) markFreeSequenceUsed()
      setState({ view: "output", emails: json.emails })
    } catch {
      setState({ view: "error", message: "Network error — check your connection and try again." })
    }
  }

  function handleUnlock() {
    setUnlocked(true)
    setState({ view: "form" })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 text-lg">ColdCopy</span>
          {!unlocked && (
            <a
              href="https://tarkusconsulting.gumroad.com/l/ColdCopyAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded-lg px-3 py-1.5 transition-colors"
            >
              Subscribe — $19/month
            </a>
          )}
          {unlocked && (
            <span className="text-xs font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-1.5 rounded-lg">
              ✓ Unlimited access
            </span>
          )}
        </div>

        {/* Hero — always visible */}
        <LandingHero onTryNow={scrollToForm} />

        {/* App section */}
        <div ref={formRef} className="space-y-6">
          {state.view === "form" && (
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Generate your sequence
              </h2>
              <InputForm onSubmit={handleGenerate} isLoading={false} />
            </div>
          )}

          {state.view === "loading" && <LoadingState />}

          {state.view === "output" && (
            <SequenceOutput
              emails={state.emails}
              onReset={() => setState({ view: "form" })}
            />
          )}

          {state.view === "paywall" && <Paywall onUnlock={handleUnlock} />}

          {state.view === "error" && (
            <div className="border border-red-100 bg-red-50 rounded-2xl p-6 text-center space-y-3">
              <p className="text-sm text-red-600">{state.message}</p>
              <button
                onClick={() => setState({ view: "form" })}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 underline"
              >
                Try again
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 space-y-1 pt-8 border-t border-gray-100">
          <p>ColdCopy — outreach writer on-demand</p>
          <p>Paste a URL. Get 5 emails. Send from anywhere.</p>
        </footer>
      </div>
    </main>
  )
}
