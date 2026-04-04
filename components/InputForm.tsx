"use client"

import { useState } from "react"
import type { Tone, Language } from "@/lib/prompts"
import type { GenerateRequest } from "@/app/api/generate/route"

interface InputFormProps {
  onSubmit: (data: GenerateRequest) => void
  isLoading: boolean
}

const TONE_OPTIONS: { value: Tone; label: string }[] = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "direct", label: "Direct" },
  { value: "consultative", label: "Consultative" },
]

export function InputForm({ onSubmit, isLoading }: InputFormProps) {
  const [offer, setOffer] = useState("")
  const [icp, setIcp] = useState("")
  const [prospectUrl, setProspectUrl] = useState("")
  const [prospectName, setProspectName] = useState("")
  const [prospectNotes, setProspectNotes] = useState("")
  const [tone, setTone] = useState<Tone>("professional")
  const [language, setLanguage] = useState<Language>("en")
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(): boolean {
    const newErrors: Record<string, string> = {}
    if (!offer.trim()) newErrors.offer = "Required"
    if (!icp.trim()) newErrors.icp = "Required"
    if (!prospectUrl.trim()) {
      newErrors.prospectUrl = "Required"
    } else {
      const normalized = prospectUrl.trim().match(/^https?:\/\//)
        ? prospectUrl.trim()
        : `https://${prospectUrl.trim()}`
      try {
        new URL(normalized)
      } catch {
        newErrors.prospectUrl = "Enter a valid URL (e.g. acmecorp.com)"
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const normalizedUrl = prospectUrl.trim().match(/^https?:\/\//)
      ? prospectUrl.trim()
      : `https://${prospectUrl.trim()}`
    onSubmit({
      offer: offer.trim(),
      icp: icp.trim(),
      prospectUrl: normalizedUrl,
      prospectName: prospectName.trim() || undefined,
      prospectNotes: prospectNotes.trim() || undefined,
      tone,
      language,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field
        label="What do you offer?"
        hint="Be specific — the more concrete, the better the emails"
        error={errors.offer}
      >
        <textarea
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          placeholder="e.g. I help SaaS companies reduce churn by building automated onboarding sequences"
          rows={2}
          className={inputClass(errors.offer)}
        />
      </Field>

      <Field
        label="Who are you targeting?"
        hint="Role, industry, company size — plain language"
        error={errors.icp}
      >
        <textarea
          value={icp}
          onChange={(e) => setIcp(e.target.value)}
          placeholder="e.g. Heads of Customer Success at B2B SaaS companies with 50–500 employees"
          rows={2}
          className={inputClass(errors.icp)}
        />
      </Field>

      <Field
        label="Prospect website URL"
        hint="Company website or LinkedIn — we'll research them automatically"
        error={errors.prospectUrl}
      >
        <input
          type="text"
          value={prospectUrl}
          onChange={(e) => setProspectUrl(e.target.value)}
          placeholder="https://acmecorp.com"
          className={inputClass(errors.prospectUrl)}
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Prospect name" hint="Optional">
          <input
            type="text"
            value={prospectName}
            onChange={(e) => setProspectName(e.target.value)}
            placeholder="Sarah Chen"
            className={inputClass()}
          />
        </Field>

        <Field label="Extra context" hint="Optional — anything useful">
          <input
            type="text"
            value={prospectNotes}
            onChange={(e) => setProspectNotes(e.target.value)}
            placeholder="Recently launched v2, expanding to EU"
            className={inputClass()}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Tone">
          <div className="grid grid-cols-2 gap-1.5">
            {TONE_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setTone(option.value)}
                className={`text-sm py-2 px-3 rounded-lg border transition-colors ${
                  tone === option.value
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Language">
          <div className="flex flex-col gap-1.5">
            {(["en", "es"] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`text-sm py-2 px-3 rounded-lg border transition-colors ${
                  language === lang
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {lang === "en" ? "🇺🇸 English" : "🇪🇸 Spanish"}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-900 hover:bg-gray-700 disabled:bg-gray-400 text-white font-semibold rounded-xl py-3.5 transition-colors"
      >
        {isLoading ? "Generating…" : "Generate 5-email sequence →"}
      </button>
    </form>
  )
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        {hint && <span className="text-xs text-gray-400">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

function inputClass(error?: string): string {
  const base =
    "w-full border rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
  return error ? `${base} border-red-400` : `${base} border-gray-200`
}
