"use client"

import { useState } from "react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { trackMetaLead } from "@/components/analytics/meta-pixel"
import Image from "next/image"
import {
  MessageCircle,
  PhoneCall,
  Calendar,
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle,
  RefreshCw,
} from "lucide-react"

interface FormData {
  fullName: string
  phone: string
  email: string
  weddingDate: string
  eventLocation: string
  serviceType: string
  message: string
}

interface FormErrors {
  fullName?: string
  phone?: string
  email?: string
  weddingDate?: string
  eventLocation?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    weddingDate: "",
    eventLocation: "",
    serviceType: "Wedding Photography",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [lastSubmittedName, setLastSubmittedName] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters"
    }

    const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.weddingDate) {
      newErrors.weddingDate = "Please select your wedding / event date"
    }

    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = "Please enter your event location or city"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) {
      return
    }

    setLoading(true)

    // Generate unique event ID for Meta deduplication (Pixel + Conversions API)
    const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

    try {
      // 1. Fire Client-side Meta Pixel Lead Event
      trackMetaLead(eventId, {
        content_name: `${formData.serviceType} Inquiry`,
        content_category: formData.serviceType,
        currency: "INR",
        event_location: formData.eventLocation,
      })

      // 2. Dispatch Server-side Lead and Meta Conversions API (CAPI)
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          eventId,
        }),
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit your inquiry. Please try again.")
      }

      setLastSubmittedName(formData.fullName.trim())
      setSubmitted(true)
      // Reset form after successful submission
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        weddingDate: "",
        eventLocation: "",
        serviceType: "Wedding Photography",
        message: "",
      })
      setErrors({})
    } catch (err) {
      console.error("[Form Submit Error]", err)
      setSubmitError(
        err instanceof Error
          ? err.message
          : "We encountered an issue submitting your inquiry. Your details are saved below; please try again or contact us directly on WhatsApp."
      )
    } finally {
      setLoading(false)
    }
  }

  // Get tomorrow's date for date picker min constraint
  const todayString = new Date().toISOString().split("T")[0]

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EB] to-[#FAF8F5] border-t border-gold-200/60 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Warm Emotional Heirloom Positioning */}
        <BlurFade delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gold-700">
              Preserve Forever
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-charcoal-900 font-medium tracking-tight leading-tight">
              Let’s Craft Your Family Heirloom
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
            <p className="font-serif italic text-base sm:text-xl lg:text-2xl text-charcoal-800 leading-relaxed font-light">
              “Years from now, long after the music has faded and the flowers have dried, your photographs will remain — the timeless testament of your laughter, tears, and enduring love.”
            </p>
            <p className="text-charcoal-600 text-sm sm:text-base mt-4 font-light">
              We accept a limited number of commissions each wedding season to dedicate our undivided attention to every couple. Check your date availability below.
            </p>
          </div>
        </BlurFade>

        {/* Form and Quick Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries & Details */}
          <BlurFade delay={0.2} className="lg:col-span-5 space-y-6">
            <div className="bg-white p-5 sm:p-8 rounded-2xl border border-gold-200/80 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-3">
                Need an Immediate Response?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6 font-light">
                Feel free to connect directly via WhatsApp or call for date availability, destination queries, or bespoke packages.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919820000000?text=Hi%20Jaideep,%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border-[#25D366]/40 font-semibold py-6 text-sm tracking-wide"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    Chat on WhatsApp
                  </Button>
                </a>

                {/* Call Button */}
                <a href="tel:+919820000000" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 border-gold-400/50 hover:bg-gold-50 text-charcoal-800 font-semibold py-6 text-sm tracking-wide"
                  >
                    <PhoneCall className="w-5 h-5 text-gold-700" />
                    Direct Studio Call
                  </Button>
                </a>
              </div>

              {/* Studio Information Details */}
              <div className="mt-8 pt-6 border-t border-gold-100 space-y-4 text-sm text-charcoal-700 font-light">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>commissions@jaideepgandhi.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>Available worldwide &bull; Based in India</span>
                </div>
              </div>
            </div>

            {/* Editorial Destination Booking Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-gold-200/80 shadow-sm group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/photo-7-bridal-kundan-glamour.jpg"
                  alt="Jaideep Gandhi Destination Wedding Photography"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/30 text-gold-300 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    Now Booking 2026–2027 Season
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white leading-snug">
                    Bespoke Commissions Worldwide
                  </h4>
                  <p className="text-ivory-200/80 text-xs font-light mt-1">
                    Udaipur &bull; Jaipur &bull; Goa &bull; Mumbai &bull; Lake Como &bull; Global Destinations
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Right Column: Lead Capture Form */}
          <BlurFade delay={0.3} className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-gold-300/80 shadow-lg relative">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center mb-5 shadow-inner">
                    <CheckCircle2 className="w-8 h-8 text-gold-600 animate-pulse" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold mb-2">
                    Inquiry Received
                  </span>
                  <h4 className="font-serif text-3xl font-semibold text-charcoal-900 mb-3">
                    Thank You{lastSubmittedName ? `, ${lastSubmittedName}` : ""}!
                  </h4>
                  <p className="text-charcoal-600 max-w-md mx-auto leading-relaxed text-sm sm:text-base font-light">
                    Thanks — we’ll get back to you within 24 hours with date availability and a personalized investment guide.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-gold-200 max-w-md w-full text-left text-xs text-charcoal-700 space-y-1 font-light">
                    <p className="font-medium text-charcoal-900 flex items-center gap-1.5 text-gold-800">
                      <Clock className="w-3.5 h-3.5" /> What happens next?
                    </p>
                    <p>1. Our studio checks calendar alignment for your wedding date.</p>
                    <p>2. You receive our curated brochure and custom package proposal.</p>
                    <p>3. We schedule an introductory video call with Jaideep.</p>
                  </div>

                  <Button
                    variant="gold"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900 mb-1">
                      Check Date Availability &amp; Inquire
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-gold-700 font-medium">
                      Fill out the details below &bull; Dedicated studio reply within 24 hours
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 animate-fadeIn">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium">Submission Failed</p>
                        <p className="text-xs text-red-700 mt-0.5 font-light">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Field Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                        Full Name(s) <span className="text-gold-700">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Maya & Aryan"
                        className={`w-full px-4 py-3 rounded-lg border bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-charcoal-400 ${
                          errors.fullName
                            ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                            : "border-gold-200 focus:ring-gold-500/40 focus:border-gold-500"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                        Phone Number <span className="text-gold-700">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98200 00000"
                        className={`w-full px-4 py-3 rounded-lg border bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-charcoal-400 ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                            : "border-gold-200 focus:ring-gold-500/40 focus:border-gold-500"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Field Row 2: Email & Event Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                        Email Address <span className="text-gold-700">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 rounded-lg border bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-charcoal-400 ${
                          errors.email
                            ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                            : "border-gold-200 focus:ring-gold-500/40 focus:border-gold-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Event Location / City */}
                    <div>
                      <label htmlFor="eventLocation" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                        Event Location / City <span className="text-gold-700">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="eventLocation"
                          name="eventLocation"
                          type="text"
                          value={formData.eventLocation}
                          onChange={handleChange}
                          placeholder="e.g. Udaipur, Goa, Mumbai"
                          className={`w-full px-4 py-3 pr-10 rounded-lg border bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-charcoal-400 ${
                            errors.eventLocation
                              ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                              : "border-gold-200 focus:ring-gold-500/40 focus:border-gold-500"
                          }`}
                        />
                        <MapPin className="w-4 h-4 text-gold-600 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.eventLocation && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.eventLocation}</p>
                      )}
                    </div>
                  </div>

                  {/* Field Row 3: Wedding Date & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Wedding Date */}
                    <div>
                      <label htmlFor="weddingDate" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                        Wedding / Event Date <span className="text-gold-700">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="weddingDate"
                          name="weddingDate"
                          type="date"
                          min={todayString}
                          value={formData.weddingDate}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                            errors.weddingDate
                              ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                              : "border-gold-200 focus:ring-gold-500/40 focus:border-gold-500"
                          }`}
                        />
                        <Calendar className="w-4 h-4 text-gold-600 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.weddingDate && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.weddingDate}</p>
                      )}
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                        Service Required
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all cursor-pointer"
                      >
                        <option value="Wedding Photography">Wedding Photography</option>
                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                        <option value="Bridal / Concept Portraiture">Bridal / Concept Portraiture</option>
                        <option value="Destination Celebration">Destination Celebration</option>
                        <option value="Complete Bespoke Heirloom">Complete Bespoke Heirloom</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Requirements (Textarea, Optional) */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700">
                        Message / Requirements
                      </label>
                      <span className="text-[11px] text-charcoal-400 font-light">Optional</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your venues, schedule, estimated guest count, or any special moments you envision..."
                      className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-[#FCFBF9] text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all placeholder:text-charcoal-400 resize-none font-light"
                    />
                  </div>

                  {/* Form Submit CTA */}
                  <div className="pt-2">
                    <ShimmerButton
                      type="submit"
                      disabled={loading}
                      shimmerColor="#FFFFFF"
                      background="radial-gradient(ellipse 80% 80% at 50% 120%, rgba(197, 168, 128, 0.95), rgba(26, 25, 24, 1))"
                      className="w-full py-4 shadow-xl border-gold-400/40 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      <span className="text-sm font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 text-white">
                        {loading ? (
                          <>
                            <RefreshCw className="w-4 h-4 text-gold-300 animate-spin" />
                            Checking Availability...
                          </>
                        ) : (
                          <>
                            Submit Inquiry &amp; Check Availability
                            <Send className="w-4 h-4 text-gold-300" />
                          </>
                        )}
                      </span>
                    </ShimmerButton>
                  </div>

                  <p className="text-center text-[11px] text-charcoal-500 font-light">
                    Your details are strictly confidential and will never be shared. Protected by SSL encryption.
                  </p>
                </form>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
