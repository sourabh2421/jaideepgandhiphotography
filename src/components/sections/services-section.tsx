import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { ArrowUpRight, Sparkles } from "lucide-react"

const services = [
  {
    title: "Pre-Wedding & Evening Portraits",
    tagline: "Cinematic Destination Sessions",
    description:
      "Intimate, cinematic couple portraits against regal architecture, private estates, and golden hour horizons before the wedding celebrations commence.",
    image: "/images/photo-2-reception-couple.jpg",
    alt: "Jaideep Gandhi Pre-Wedding & Evening Couple Photography in Velvet Sherwani and Crimson Lehenga",
  },
  {
    title: "Sacred Wedding Ceremonies",
    tagline: "Fine-Art Rituals & Pheras",
    description:
      "Documenting sacred pheras, traditional rituals, tears of emotion, and eternal vows with discreet reverence and high-end editorial sophistication.",
    image: "/images/photo-3-traditional-couple.jpg",
    alt: "Traditional South Indian wedding couple in silk and auspicious temple garlands",
  },
  {
    title: "Bridal & Concept Shoots",
    tagline: "Couture & Vogue-Inspired Styling",
    description:
      "Vogue-inspired bridal styling, heirloom jewelry showcases, delicate floral concepts, and high-fashion editorial framing with studio lighting mastery.",
    image: "/images/photo-4-bride-lotus.jpg",
    alt: "Radiant bride holding blooming lotus flowers in embroidered bridal couture",
  },
  {
    title: "Celebrations & Receptions",
    tagline: "Unscripted Joy & Grand Galas",
    description:
      "Exuberant candid coverage capturing spontaneous bursts of laughter, dance floors, black-tie cocktail glamour, and unforgettable family revelry.",
    image: "/images/photo-5-wedding-party.jpg",
    alt: "Joyful wedding celebration and laughter under bougainvillea floral canopy",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-300/50 bg-gold-50/60 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-gold-700">
                Our Craft &amp; Capabilities
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-2 text-charcoal-900 font-medium tracking-tight">
              Bespoke Photography Services
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
            <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed">
              Tailored visual artistry for once-in-a-lifetime milestones that demand timeless luxury and candid emotion.
            </p>
          </div>
        </BlurFade>

        {/* 4-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-gold-200/70 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal-900">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300 bg-charcoal-950/80 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-gold-400/20">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900 mb-3 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gold-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-gold-700 group-hover:text-charcoal-900 transition-colors"
                    >
                      Inquire For Custom Package
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
