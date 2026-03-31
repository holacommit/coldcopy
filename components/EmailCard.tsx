"use client"

import { useState } from "react"
import type { Email } from "@/lib/parser"

interface EmailCardProps {
  email: Email
  index: number
}

export function EmailCard({ email, index }: EmailCardProps) {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    const text = `Subject: ${email.subject}\n\n${email.body}`
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const waitLabel =
    index === 0
      ? "Send immediately"
      : `Wait ${email.wait_days} day${email.wait_days === 1 ? "" : "s"} after previous`

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-white bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center">
            {index + 1}
          </span>
          <span className="text-xs text-gray-500">{waitLabel}</span>
        </div>
        <button
          onClick={copyEmail}
          className="text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded-lg px-3 py-1.5 transition-colors"
        >
          {copied ? "✓ Copied" : "Copy email"}
        </button>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Subject</p>
        <p className="text-sm font-medium text-gray-900">{email.subject}</p>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Body</p>
        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{email.body}</p>
      </div>
    </div>
  )
}
