import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F5] text-charcoal-900 selection:bg-gold-500/20 selection:text-charcoal-950 font-sans">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. About / Experience */}
        <AboutSection />

        {/* 4. Curated Portfolio Showcase */}
        <PortfolioSection />

        {/* 5. Services */}
        <ServicesSection />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7. Pricing */}
        <PricingSection />

        {/* 8. Testimonials & Client Stories */}
        <TestimonialsSection />

        {/* 9. FAQ */}
        <FaqSection />

        {/* 10. Final CTA / Contact */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <FooterSection />
    </div>
  )
}
