"use client"

import { EmailCard } from "./EmailCard"
import { downloadSequenceCsv } from "@/lib/csv"
import type { Email } from "@/lib/parser"
import { useState } from "react"

interface SequenceOutputProps {
  emails: Email[]
  onReset: () => void
}

export function SequenceOutput({ emails, onReset }: SequenceOutputProps) {
  const [copiedAll, setCopiedAll] = useState(false)

  async function copyAll() {
    const text = emails
      .map(
        (e, i) =>
          `--- Email ${i + 1} (wait: ${e.wait_days} days) ---\nSubject: ${e.subject}\n\n${e.body}`
      )
      .join("\n\n")
    await navigator.clipboard.writeText(text)
    setCopiedAll(true)
    setTimeout(() => setCopiedAll(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Your sequence — {emails.length} emails ready
        </h2>
        <button
          onClick={onReset}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          ← New sequence
        </button>
      </div>

      <div className="space-y-3">
        {emails.map((email, index) => (
          <EmailCard key={index} email={email} index={index} />
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={copyAll}
          className="flex-1 text-sm font-medium border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 rounded-xl py-2.5 transition-colors"
        >
          {copiedAll ? "✓ Copied all" : "Copy all emails"}
        </button>
        <button
          onClick={() => downloadSequenceCsv(emails)}
          className="flex-1 text-sm font-medium bg-gray-900 hover:bg-gray-700 text-white rounded-xl py-2.5 transition-colors"
        >
          Export CSV
        </button>
      </div>
    </div>
  )
}
