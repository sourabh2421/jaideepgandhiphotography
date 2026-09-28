"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "Experience" },
  { href: "#why-us", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to lg+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-200/50 bg-[#FAF8F5]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-5 sm:px-6">
        {/* Brand */}
        <Link href="/" className="group flex flex-col shrink-0" onClick={() => setMenuOpen(false)}>
          <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.15em] text-charcoal-900 group-hover:text-gold-700 transition-colors">
            JAIDEEP GANDHI
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-gold-700 font-medium">
            Photography &bull; Fine Art
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button
            variant="gold"
            size="default"
            asChild
            className="hidden sm:inline-flex shadow-md hover:shadow-gold-500/20 px-5 py-2.5 font-semibold text-xs tracking-[0.15em] uppercase"
          >
            <a href="#contact">Enquire Now</a>
          </Button>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gold-200/70 bg-white/60 text-charcoal-800 hover:bg-gold-50 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed left-0 right-0 bottom-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md flex flex-col px-6 py-8 gap-1 overflow-y-auto" style={{ top: '80px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base font-semibold uppercase tracking-[0.2em] text-charcoal-800 border-b border-gold-100 hover:text-gold-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6">
            <Button
              variant="gold"
              size="lg"
              asChild
              className="w-full font-semibold text-sm tracking-[0.15em] uppercase py-4"
            >
              <a href="#contact" onClick={() => setMenuOpen(false)}>Enquire Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
