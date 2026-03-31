// Builds the prompt for sequence generation.
// Uses a rotating pool of opening frameworks + style variants
// to ensure no two sequences sound identical.

import type { ProspectContext } from "./scraper"

export type Tone = "professional" | "casual" | "direct" | "consultative"
export type Language = "en" | "es"

export interface SequenceInput {
  offer: string
  icp: string
  prospectName?: string
  prospectNotes?: string
  tone: Tone
  language: Language
  prospectContext: ProspectContext
}

// Six structural frameworks for Email 1.
// Selected deterministically by URL hash so the same prospect always
// gets the same framework — but different prospects get different ones.
const OPENING_FRAMEWORKS = [
  {
    name: "insight-first",
    instruction: "Open with a non-obvious insight or observation about their business or industry that most people miss. Lead with the insight before mentioning yourself.",
  },
  {
    name: "problem-agitation",
    instruction: "Open by naming a specific, painful problem your ICP faces. Make it feel real and recognized — like you've lived it too. Don't mention your solution yet.",
  },
  {
    name: "contrarian-hook",
    instruction: "Open by challenging a common assumption in their industry. Be direct and confident. The goal is to make them think 'hm, that's different'.",
  },
  {
    name: "peer-to-peer",
    instruction: "Write as a peer talking to a peer — no corporate tone, no formality. Open with something that makes clear you actually understand their world.",
  },
  {
    name: "specific-observation",
    instruction: "Open with one very specific observation about their company, product, or content. Reference something real. Make it clear you actually looked at their business.",
  },
  {
    name: "direct-ask",
    instruction: "Skip the warm-up entirely. State what you do, who you help, and what you're asking — in three sentences or less. No fluff.",
  },
]

const STYLE_VARIANTS = [
  "punchy and short — every sentence earns its place",
  "warm and conversational — like a message from a smart colleague",
  "data-led — ground claims in specifics and numbers where possible",
  "narrative — use a micro-story or scenario to make the point",
]

const TONE_INSTRUCTIONS: Record<Tone, string> = {
  professional: "Maintain a professional, polished tone. Confident but respectful.",
  casual: "Keep it casual and human. Contractions are fine. Avoid corporate language.",
  direct: "Be direct and get to the point fast. No pleasantries. Respect their time.",
  consultative: "Sound like a trusted advisor, not a salesperson. Ask good questions. Be curious.",
}

const LANGUAGE_INSTRUCTIONS: Record<Language, string> = {
  en: "Write in English.",
  es: "Escribe en español. Usa un tono natural y profesional, no traducción literal.",
}

// Deterministic selection based on a string hash — same URL = same framework
function selectByHash(items: unknown[], seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0
  }
  return Math.abs(hash) % items.length
}

export function buildPrompt(input: SequenceInput): string {
  const {
    offer,
    icp,
    prospectName,
    prospectNotes,
    tone,
    language,
    prospectContext,
  } = input

  const frameworkIndex = selectByHash(
    OPENING_FRAMEWORKS,
    prospectContext.companyName + offer
  )
  const styleIndex = selectByHash(
    STYLE_VARIANTS,
    prospectContext.companyName + icp
  )

  const framework = OPENING_FRAMEWORKS[frameworkIndex]
  const style = STYLE_VARIANTS[styleIndex]

  const prospectSection = buildProspectSection(prospectContext, prospectName, prospectNotes)

  return `You are an expert B2B outreach copywriter. Your job is to write a 5-email cold outreach sequence that sounds like it was written by a human who did 20 minutes of research on this prospect.

## Context

**What the sender offers:**
${offer}

**Their ideal customer:**
${icp}

**Prospect information:**
${prospectSection}

## Instructions

Write a complete 5-email sequence. Each email must include a subject line and body.

**Email 1 — Opening:**
${framework.instruction}
Then connect it naturally to what the sender offers. One soft CTA (a question or a request for a short call).

**Email 2 — Follow-up (3 days later):**
A short, friendly follow-up. Don't repeat Email 1. Add a new angle, a different benefit, or a relevant example. One CTA.

**Email 3 — Value add (5 days later):**
Lead with something genuinely useful — a resource, a reframe, a quick tip relevant to their situation. Soft CTA.

**Email 4 — Breakup (7 days later):**
The "looks like this isn't a priority right now" email. Keep it short, human, and with no hard feelings. Leave the door open.

**Email 5 — Re-engagement (14 days later):**
A fresh angle, completely different from Email 1. Could be a new hook, a case study, or a changed circumstance. Short CTA.

## Rules (non-negotiable)
- Every email body: under 125 words
- Every subject line: under 7 words, no clickbait
- Email 1 must reference something specific about the prospect in the first line
- Never start with "I hope this email finds you well" or similar openers
- Never use: "quick question", "touching base", "circling back", "just following up"
- One CTA per email — never two
- No bullet lists in email bodies — prose only
- ${TONE_INSTRUCTIONS[tone]}
- ${LANGUAGE_INSTRUCTIONS[language]}
- Style: ${style}

## Output format

Return ONLY valid JSON. No markdown, no explanation, no preamble. Exactly this structure:

{
  "emails": [
    {
      "wait_days": 0,
      "subject": "Subject line here",
      "body": "Email body here"
    }
  ]
}

wait_days is the number of days to wait after the previous email before sending this one. Email 1 is always 0.`
}

function buildProspectSection(
  ctx: ProspectContext,
  name?: string,
  notes?: string
): string {
  const lines: string[] = []

  if (name) lines.push(`Name: ${name}`)
  lines.push(`Company: ${ctx.companyName}`)

  if (ctx.source === "scraped" && ctx.description) {
    lines.push(`About: ${ctx.description}`)
  }

  if (ctx.signals.length > 0) {
    lines.push(`Notable signals: ${ctx.signals.join(", ")}`)
  }

  if (notes) {
    lines.push(`Additional context: ${notes}`)
  }

  if (ctx.source === "fallback") {
    lines.push("(No website data available — personalize based on company name and ICP)")
  }

  return lines.join("\n")
}
