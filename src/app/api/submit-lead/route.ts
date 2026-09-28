import { NextResponse } from "next/server"
import crypto from "crypto"

function sha256(value: string): string {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex")
}

function normalizePhone(phone: string): string {
  // Strip non-digits except a leading +
  const cleaned = phone.replace(/[^\d+]/g, "")
  // Remove leading + for Meta hashing if present, keeping just the digits with country code
  return cleaned.replace(/^\+/, "")
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      fullName,
      phone,
      email,
      weddingDate,
      eventLocation,
      message,
      serviceType,
      eventId,
    } = body

    // Validate minimum required fields server-side
    if (!fullName || !phone || !weddingDate) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: fullName, phone, and weddingDate are required.",
        },
        { status: 400 }
      )
    }

    // Extract headers for Meta CAPI accuracy
    const headersList = req.headers
    const forwardedFor = headersList.get("x-forwarded-for")
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : headersList.get("x-real-ip") || undefined
    const userAgent = headersList.get("user-agent") || undefined
    const referer = headersList.get("referer") || "https://jaideepgandhi.com"

    // Parse names for higher Meta matching quality
    const nameParts = fullName.trim().split(/\s+/)
    const firstName = nameParts[0] || ""
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""

    // Prepare hashed user data according to Meta Conversions API specifications
    const userData: Record<string, unknown> = {}

    if (email) {
      userData.em = [sha256(email)]
    }

    if (phone) {
      const normalizedPhone = normalizePhone(phone)
      if (normalizedPhone) {
        userData.ph = [sha256(normalizedPhone)]
      }
    }

    if (firstName) {
      userData.fn = [sha256(firstName)]
    }

    if (lastName) {
      userData.ln = [sha256(lastName)]
    }

    if (clientIp) {
      userData.client_ip_address = clientIp
    }

    if (userAgent) {
      userData.client_user_agent = userAgent
    }

    // Server-side Meta CAPI dispatch
    const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID
    const accessToken = process.env.META_ACCESS_TOKEN
    const finalEventId = eventId || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

    let metaApiResponse = null
    let metaApiError = null

    if (pixelId && accessToken) {
      try {
        const metaPayload = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              event_id: finalEventId,
              event_source_url: referer,
              action_source: "website",
              user_data: userData,
              custom_data: {
                content_name: "Wedding Photography Inquiry",
                content_category: serviceType || "Wedding Photography",
                event_location: eventLocation || "Not specified",
                wedding_date: weddingDate,
                currency: "INR",
              },
            },
          ],
        }

        const fbResponse = await fetch(
          `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(metaPayload),
          }
        )

        metaApiResponse = await fbResponse.json()

        if (!fbResponse.ok) {
          console.error("[Meta CAPI Error Response]", metaApiResponse)
          metaApiError = metaApiResponse
        } else {
          console.log("[Meta CAPI Lead Event Success]", {
            eventId: finalEventId,
            events_received: metaApiResponse.events_received,
          })
        }
      } catch (capiErr) {
        console.error("[Meta CAPI Request Exception]", capiErr)
        metaApiError = capiErr instanceof Error ? capiErr.message : "Unknown Meta CAPI exception"
      }
    } else {
      console.warn(
        "[Meta CAPI Warning] META_PIXEL_ID or META_ACCESS_TOKEN is not configured. Server-side event skipped."
      )
    }

    // Extensible Lead Forwarding Hook (e.g. Email / CRM / Webhook / WhatsApp notification)
    console.log("[New Lead Received]", {
      fullName,
      phone,
      email,
      weddingDate,
      eventLocation,
      serviceType,
      message,
      eventId: finalEventId,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully! We will get back to you within 24 hours.",
      eventId: finalEventId,
      metaTracked: Boolean(pixelId && accessToken && !metaApiError),
    })
  } catch (error) {
    console.error("[Submit Lead API Error]", error)
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your inquiry. Please try again or reach out directly on WhatsApp.",
      },
      { status: 500 }
    )
  }
}
