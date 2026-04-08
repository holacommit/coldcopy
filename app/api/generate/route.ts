import Anthropic from "@anthropic-ai/sdk"
import { NextRequest, NextResponse } from "next/server"
import { scrapeProspect } from "@/lib/scraper"
import { buildPrompt, type Tone, type Language } from "@/lib/prompts"
import { parseSequenceResponse } from "@/lib/parser"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Simple in-memory rate limiter: max 30 generations per IP per day.
// Resets on each Vercel cold start — intentional for MVP.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 30
const RATE_WINDOW_MS = 24 * 60 * 60 * 1000 // 24 hours

// Server-side free trial tracker: one free generation per IP.
// Persists for the lifetime of the serverless instance.
// Immune to localStorage clearing, incognito mode, and browser switching.
const freeTrialUsedSet = new Set<string>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count++
  return false
}

function hasUsedFreeTrial(ip: string): boolean {
  return freeTrialUsedSet.has(ip)
}

function markFreeTrialUsed(ip: string): void {
  freeTrialUsedSet.add(ip)
}

export interface GenerateRequest {
  offer: string
  icp: string
  prospectUrl: string
  prospectName?: string
  prospectNotes?: string
  tone: Tone
  language: Language
  licenseKey?: string
}

export async function POST(req: NextRequest) {
  // Rate limit by IP — blocks abuse without affecting legitimate users
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Daily limit reached. Come back tomorrow or upgrade for unlimited access." },
      { status: 429 }
    )
  }

  try {
    const body = await req.json() as GenerateRequest

    // Server-side free trial enforcement — immune to incognito/localStorage tricks.
    // If this IP has already used its free generation, require a valid license key.
    const hasKey = !!body.licenseKey?.trim()
    if (!hasKey && hasUsedFreeTrial(ip)) {
      return NextResponse.json(
        { error: "free_trial_used" },
        { status: 402 }
      )
    }

    const validationError = validateRequest(body)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    // Step 1: Research the prospect
    const prospectContext = await scrapeProspect(body.prospectUrl)

    // Step 2: Build the prompt
    const prompt = buildPrompt({
      offer: body.offer,
      icp: body.icp,
      prospectName: body.prospectName,
      prospectNotes: body.prospectNotes,
      tone: body.tone,
      language: body.language,
      prospectContext,
    })

    // Step 3: Generate — Haiku for cost efficiency (~$0.005/sequence vs $0.02 Sonnet)
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    })

    const rawContent = message.content[0]
    if (rawContent.type !== "text") {
      return NextResponse.json(
        { error: "Unexpected response format from AI" },
        { status: 500 }
      )
    }

    // Step 4: Parse and return
    const result = parseSequenceResponse(rawContent.text)

    if (!result.success) {
      return NextResponse.json(
        { error: `Failed to parse sequence: ${result.error}` },
        { status: 500 }
      )
    }

    // Mark free trial as used for this IP (no-op if they have a key)
    if (!hasKey) markFreeTrialUsed(ip)

    return NextResponse.json({ emails: result.emails })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json(
      { error: `Generation failed: ${message}` },
      { status: 500 }
    )
  }
}

function validateRequest(body: GenerateRequest): string | null {
  if (!body.offer?.trim()) return "Offer is required"
  if (!body.icp?.trim()) return "ICP is required"
  if (!body.prospectUrl?.trim()) return "Prospect URL is required"
  if (!isValidUrl(body.prospectUrl)) return "Prospect URL is not valid"
  if (!["professional", "casual", "direct", "consultative"].includes(body.tone)) {
    return "Invalid tone"
  }
  if (!["en", "es"].includes(body.language)) return "Invalid language"
  return null
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
