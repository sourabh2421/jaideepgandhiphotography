"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-200/50 bg-[#FAF8F5]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] text-charcoal-900 group-hover:text-gold-700 transition-colors">
            JAIDEEP GANDHI
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-700 font-medium">
            Photography &bull; Fine Art
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-700">
          <Link href="#about" className="hover:text-gold-700 transition-colors">
            Experience
          </Link>
          <Link href="#why-us" className="hover:text-gold-700 transition-colors">
            Why Us
          </Link>
          <Link href="#portfolio" className="hover:text-gold-700 transition-colors">
            Portfolio
          </Link>
          <Link href="#services" className="hover:text-gold-700 transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-gold-700 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-gold-700 transition-colors">
            Stories
          </Link>
          <Link href="#faq" className="hover:text-gold-700 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Always visible Enquire Now CTA */}
        <div className="flex items-center gap-3">
          <Button
            variant="gold"
            size="default"
            asChild
            className="shadow-md hover:shadow-gold-500/20 px-6 py-2.5 font-semibold text-xs tracking-[0.15em] uppercase"
          >
            <a href="#contact">Enquire Now</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
