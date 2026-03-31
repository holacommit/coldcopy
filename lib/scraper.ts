// Fetches a prospect URL and extracts relevant context for outreach personalization.
// If fetch fails or content is unusable, returns a minimal fallback context
// so the generation pipeline never breaks.

export interface ProspectContext {
  companyName: string
  description: string
  signals: string[] // specific details useful for personalization
  source: "scraped" | "fallback"
}

const MAX_CONTENT_LENGTH = 8000 // chars — enough context, within token budget
const FETCH_TIMEOUT_MS = 8000

export async function scrapeProspect(url: string): Promise<ProspectContext> {
  const domain = extractDomain(url)

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; research-bot/1.0)",
      },
    })

    clearTimeout(timeout)

    if (!response.ok) return fallbackContext(domain)

    const html = await response.text()
    const text = extractTextFromHtml(html).slice(0, MAX_CONTENT_LENGTH)

    if (text.length < 100) return fallbackContext(domain)

    return {
      companyName: extractCompanyName(html, domain),
      description: summarizeContent(text),
      signals: extractSignals(text),
      source: "scraped",
    }
  } catch {
    return fallbackContext(domain)
  }
}

// --- Helpers ---

function extractDomain(url: string): string {
  try {
    const { hostname } = new URL(url)
    return hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

function fallbackContext(domain: string): ProspectContext {
  return {
    companyName: domain,
    description: "",
    signals: [],
    source: "fallback",
  }
}

function extractTextFromHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function extractCompanyName(html: string, fallback: string): string {
  const ogSiteMatch = html.match(/<meta[^>]+property="og:site_name"[^>]+content="([^"]+)"/i)
  if (ogSiteMatch) return ogSiteMatch[1].trim()

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  if (titleMatch) {
    // titles are often "Company — Tagline", take the first part
    return titleMatch[1].split(/[-|–—]/)[0].trim()
  }

  return fallback
}

function summarizeContent(text: string): string {
  // Take the first ~600 chars as the company description —
  // usually contains the most relevant positioning language
  return text.slice(0, 600).trim()
}

function extractSignals(text: string): string[] {
  const signals: string[] = []
  const lower = text.toLowerCase()

  // Recent activity signals
  const yearMatches = text.match(/\b(2024|2025|2026)\b/g)
  if (yearMatches) signals.push(`Recent content from ${yearMatches[0]}`)

  // Company stage signals
  if (lower.includes("series a") || lower.includes("series b") || lower.includes("seed round")) {
    signals.push("Recently funded company")
  }
  if (lower.includes("we're hiring") || lower.includes("we are hiring") || lower.includes("join our team")) {
    signals.push("Actively hiring — growing team")
  }

  // Product/service type signals
  if (lower.includes("saas") || lower.includes("software as a service")) {
    signals.push("SaaS company")
  }
  if (lower.includes("agency") || lower.includes("we help clients") || lower.includes("our clients")) {
    signals.push("Agency or services business")
  }
  if (lower.includes("ecommerce") || lower.includes("e-commerce") || lower.includes("shopify")) {
    signals.push("Ecommerce business")
  }

  // Pain point signals
  if (lower.includes("scale") || lower.includes("growth")) {
    signals.push("Growth-focused messaging")
  }
  if (lower.includes("automat") || lower.includes("workflow") || lower.includes("efficiency")) {
    signals.push("Automation / efficiency focus")
  }

  return signals.slice(0, 4) // cap at 4 signals to stay concise
}
