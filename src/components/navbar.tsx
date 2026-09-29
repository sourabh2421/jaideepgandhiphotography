"use client"

import { KineticNavigation } from "@/components/ui/kinetic-navigation"

const navLinks = [
  { href: "#about", label: "Experience" },
  { href: "#why-us", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <KineticNavigation
      logoText="JAIDEEP GANDHI"
      logoSubtext="Photography • Fine Art"
      navLinks={navLinks}
    />
  )
}
