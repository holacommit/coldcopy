import { NextRequest, NextResponse } from "next/server"

// Validates a Gumroad license key against their API.
// Uses product_id (not permalink) as required by Gumroad's v2 API.
// Subscription keys are invalid when cancelled or payment fails.

const GUMROAD_API = "https://api.gumroad.com/v2/licenses/verify"
const GUMROAD_PRODUCT_ID = process.env.GUMROAD_PRODUCT_ID

export interface ValidateKeyResponse {
  valid: boolean
  reason?: string
}

export async function POST(req: NextRequest) {
  try {
    const { key } = await req.json() as { key: string }

    if (!key?.trim()) {
      return NextResponse.json<ValidateKeyResponse>(
        { valid: false, reason: "No key provided" },
        { status: 400 }
      )
    }

    if (!GUMROAD_PRODUCT_ID) {
      // Dev fallback: accept any well-formed key when env var is not set
      const isWellFormed = /^[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}$/i.test(key.trim())
      return NextResponse.json<ValidateKeyResponse>({ valid: isWellFormed })
    }

    const res = await fetch(GUMROAD_API, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        product_id: GUMROAD_PRODUCT_ID,
        license_key: key.trim(),
        increment_uses_count: "false",
      }),
    })

    const data = await res.json() as GumroadResponse

    if (!data.success) {
      return NextResponse.json<ValidateKeyResponse>({
        valid: false,
        reason: "License key not found. Check for typos or purchase at the link below.",
      })
    }

    // Subscription lapsed — cancelled or payment failed
    if (data.purchase?.subscription_cancelled_at || data.purchase?.subscription_failed_at) {
      return NextResponse.json<ValidateKeyResponse>({
        valid: false,
        reason: "Your subscription is no longer active. Renew to continue.",
      })
    }

    return NextResponse.json<ValidateKeyResponse>({ valid: true })
  } catch {
    return NextResponse.json<ValidateKeyResponse>(
      { valid: false, reason: "Validation failed — try again." },
      { status: 500 }
    )
  }
}

interface GumroadResponse {
  success: boolean
  purchase?: {
    subscription_cancelled_at?: string | null
    subscription_failed_at?: string | null
  }
}
