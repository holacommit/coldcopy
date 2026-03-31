// Parses the raw LLM response into a typed Email array.
// Handles malformed JSON gracefully — never throws to the caller.

export interface Email {
  wait_days: number
  subject: string
  body: string
}

export type ParseResult =
  | { success: true; emails: Email[] }
  | { success: false; error: string }

export function parseSequenceResponse(raw: string): ParseResult {
  try {
    // Strip markdown code fences if the model wraps output despite instructions
    const cleaned = raw
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim()

    const parsed = JSON.parse(cleaned)

    if (!parsed.emails || !Array.isArray(parsed.emails)) {
      return { success: false, error: "Response missing emails array" }
    }

    const emails: Email[] = []

    for (const [index, item] of parsed.emails.entries()) {
      const email = validateEmail(item, index)
      if (!email) {
        return {
          success: false,
          error: `Email ${index + 1} is malformed — missing required fields`,
        }
      }
      emails.push(email)
    }

    if (emails.length === 0) {
      return { success: false, error: "No emails found in response" }
    }

    return { success: true, emails }
  } catch {
    return { success: false, error: "Failed to parse response as JSON" }
  }
}

function validateEmail(item: unknown, index: number): Email | null {
  if (!item || typeof item !== "object") return null

  const obj = item as Record<string, unknown>

  const subject = typeof obj.subject === "string" ? obj.subject.trim() : null
  const body = typeof obj.body === "string" ? obj.body.trim() : null
  const wait_days = typeof obj.wait_days === "number" ? obj.wait_days : index === 0 ? 0 : null

  if (!subject || !body || wait_days === null) return null

  return { wait_days, subject, body }
}
