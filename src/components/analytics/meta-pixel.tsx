"use client"

import Script from "next/script"

declare global {
  interface Window {
    fbq?: {
      (action: "init", pixelId: string): void
      (action: "track", eventName: string, params?: Record<string, unknown>, options?: { eventID?: string }): void
      (action: "trackCustom", eventName: string, params?: Record<string, unknown>, options?: { eventID?: string }): void
      callMethod?: (...args: unknown[]) => void
      queue?: unknown[]
      loaded?: boolean
      version?: string
      push?: (...args: unknown[]) => void
    }
    _fbq?: Window["fbq"]
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

/**
 * Fires a standard or custom Meta Pixel event if pixel is initialized on client.
 */
export function trackMetaEvent(
  eventName: string,
  params?: Record<string, unknown>,
  options?: { eventID?: string }
) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (options?.eventID) {
        window.fbq("track", eventName, params || {}, { eventID: options.eventID })
      } else {
        window.fbq("track", eventName, params || {})
      }
    } catch (err) {
      console.warn("[Meta Pixel] Error firing event:", eventName, err)
    }
  } else {
    // Helpful debug log in dev mode if Pixel ID is not configured
    if (process.env.NODE_ENV === "development") {
      console.debug(`[Meta Pixel Dev] track("${eventName}"):`, { params, options })
    }
  }
}

/**
 * Specifically tracks a 'Lead' event with an eventID for Conversions API deduplication.
 */
export function trackMetaLead(
  eventId: string,
  leadData?: {
    content_name?: string
    content_category?: string
    value?: number
    currency?: string
    [key: string]: unknown
  }
) {
  trackMetaEvent(
    "Lead",
    {
      content_name: leadData?.content_name || "Wedding Inquiry",
      content_category: leadData?.content_category || "Photography Inquiry",
      currency: leadData?.currency || "INR",
      ...leadData,
    },
    { eventID: eventId }
  )
}

export function MetaPixel() {
  const pixelId = META_PIXEL_ID

  if (!pixelId) {
    return null
  }

  return (
    <>
      <Script
        id="meta-pixel-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
