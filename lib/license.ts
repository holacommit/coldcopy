// License key persistence and validation.
// Keys are stored in localStorage with a validation timestamp.
// Actual validity is checked server-side against Gumroad's API —
// this enforces active subscription status without a database.

const LICENSE_KEY_STORAGE_KEY = "coldcopy_license_key"
const FREE_USED_STORAGE_KEY = "coldcopy_free_used"
const VALIDATION_TIMESTAMP_KEY = "coldcopy_validated_at"

// Re-validate against Gumroad every 24 hours
const REVALIDATION_INTERVAL_MS = 24 * 60 * 60 * 1000

export function saveKey(key: string): void {
  if (typeof window === "undefined") return
  localStorage.setItem(LICENSE_KEY_STORAGE_KEY, key.trim())
  localStorage.setItem(VALIDATION_TIMESTAMP_KEY, Date.now().toString())
}

export function loadKey(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(LICENSE_KEY_STORAGE_KEY)
}

export function clearKey(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(LICENSE_KEY_STORAGE_KEY)
  localStorage.removeItem(VALIDATION_TIMESTAMP_KEY)
}

export function isUnlocked(): boolean {
  // Returns true if a key exists locally — async revalidation happens in the background
  return loadKey() !== null
}

export function needsRevalidation(): boolean {
  if (typeof window === "undefined") return false
  const raw = localStorage.getItem(VALIDATION_TIMESTAMP_KEY)
  if (!raw) return true
  return Date.now() - parseInt(raw, 10) > REVALIDATION_INTERVAL_MS
}

// Server-side validation call — returns true if key is valid and subscription active
export async function validateKeyWithServer(key: string): Promise<{ valid: boolean; reason?: string }> {
  try {
    const res = await fetch("/api/validate-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    })
    return await res.json()
  } catch {
    // On network error, fail open — don't lock out a paying user
    return { valid: true }
  }
}

export function hasUsedFreeSequence(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(FREE_USED_STORAGE_KEY) === "true"
}

export function markFreeSequenceUsed(): void {
  if (typeof window === "undefined") return
  localStorage.setItem(FREE_USED_STORAGE_KEY, "true")
}

export function canGenerate(): boolean {
  return isUnlocked() || !hasUsedFreeSequence()
}
