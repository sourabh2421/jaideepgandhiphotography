"use client"

import { MessageCircle } from "lucide-react"
import { trackMetaEvent } from "@/components/analytics/meta-pixel"

export function WhatsAppStickyButton() {
  const phoneNumber = "919820000000"
  const message = encodeURIComponent(
    "Hi Jaideep, I would like to inquire about wedding photography availability."
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  const handleClick = () => {
    trackMetaEvent("Contact", {
      content_name: "WhatsApp Inquiry",
      contact_channel: "WhatsApp",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with Jaideep Gandhi Photography on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/60"
      >
        {/* Pulsing ring behind button */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse group-hover:bg-[#25D366]/50 transition-all duration-300" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow relative z-10" />

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white z-20" />
      </a>
    </div>
  )
}
