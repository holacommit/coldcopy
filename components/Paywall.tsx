"use client"

import { useState } from "react"
import { saveKey, validateKeyWithServer } from "@/lib/license"

// Update this URL once the Gumroad subscription product is created
const GUMROAD_SUBSCRIPTION_URL = "https://holacommit.gumroad.com/l/coldcopy"

interface PaywallProps {
  onUnlock: () => void
}

export function Paywall({ onUnlock }: PaywallProps) {
  const [key, setKey] = useState("")
  const [error, setError] = useState("")
  const [activating, setActivating] = useState(false)

  async function handleActivate() {
    setError("")

    if (!key.trim()) {
      setError("Enter your license key")
      return
    }

    setActivating(true)

    const result = await validateKeyWithServer(key.trim())

    if (!result.valid) {
      setError(result.reason ?? "Invalid license key")
      setActivating(false)
      return
    }

    saveKey(key.trim())
    onUnlock()
    setActivating(false)
  }

  return (
    <div className="border border-gray-200 rounded-2xl p-8 bg-white space-y-6">
      <div className="text-center space-y-2">
        <p className="text-2xl font-bold text-gray-900">You&apos;ve used your free sequence</p>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          A Fiverr copywriter charges $75 for one sequence.
          Get unlimited sequences for $19/month.
        </p>
      </div>

      {/* Pricing card */}
      <div className="border border-gray-900 rounded-xl p-5 space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-gray-900">$19</span>
          <span className="text-sm text-gray-500">/month · cancel anytime</span>
        </div>
        <ul className="space-y-1.5 text-sm text-gray-600">
          {[
            "Unlimited 5-email sequences",
            "Automatic prospect research (URL → context)",
            "English + Spanish",
            "CSV export for Instantly / Lemlist",
            "Cancel anytime — no contracts",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={GUMROAD_SUBSCRIPTION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-xl py-3 text-center transition-colors"
        >
          Subscribe — $19/month →
        </a>
        <p className="text-xs text-center text-gray-400">
          Also available: $150/year (save 34%)
        </p>
      </div>

      {/* License key activation */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-gray-400">
            already subscribed? enter your license key
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
          value={key}
          onChange={(e) => setKey(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === "Enter" && handleActivate()}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-mono text-center focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
        {error && <p className="text-xs text-red-500 text-center">{error}</p>}
        <button
          onClick={handleActivate}
          disabled={activating}
          className="w-full border border-gray-300 hover:border-gray-500 text-gray-700 font-medium rounded-xl py-2.5 text-sm transition-colors disabled:opacity-50"
        >
          {activating ? "Validating…" : "Activate license"}
        </button>
      </div>
    </div>
  )
}
