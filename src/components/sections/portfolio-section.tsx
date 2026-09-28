"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react"

export interface PortfolioItem {
  id: string
  title: string
  category: "Weddings" | "Bridal Portraits" | "Receptions & Sangeet"
  src: string
  aspect: "portrait" | "landscape" | "square"
  description: string
  location: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Ethereal Bridal Royalty",
    category: "Bridal Portraits",
    src: "/images/photo-1-bride-portrait.jpg",
    aspect: "portrait",
    description:
      "Moody, cinematic close-up capturing handcrafted polki emerald jewelry, intricate nath, and timeless bridal grace.",
    location: "Jaipur, Rajasthan",
  },
  {
    id: "p2",
    title: "Sunlit Palace Walk",
    category: "Weddings",
    src: "/images/photo-9-royal-garden-couple.jpg",
    aspect: "portrait",
    description:
      "Regal couple in champagne gold couture and royal navy brocade sherwani walking hand-in-hand through lush palace gardens.",
    location: "Udaipur, Rajasthan",
  },
  {
    id: "p3",
    title: "Intricate Henna Poetry",
    category: "Bridal Portraits",
    src: "/images/photo-8-mehendi-artistry.jpg",
    aspect: "square",
    description:
      "Delicate macro portrait focusing on detailed bridal mehendi artistry framing a subtle, emotive glance.",
    location: "New Delhi",
  },
  {
    id: "p4",
    title: "Sacred Ceremonial Vows",
    category: "Weddings",
    src: "/images/photo-3-traditional-couple.jpg",
    aspect: "landscape",
    description:
      "Tender and soulful traditional ceremony draped in sacred kanjivaram silks, temple jewelry, and fragrant jasmine garlands.",
    location: "Bengaluru, Karnataka",
  },
  {
    id: "p5",
    title: "The Kundan Serenade",
    category: "Bridal Portraits",
    src: "/images/photo-7-bridal-kundan-glamour.jpg",
    aspect: "portrait",
    description:
      "Golden hour bridal glow emphasizing a bespoke mathapatti, heavy kundan choker, and serene, quiet introspection.",
    location: "Jodhpur, Rajasthan",
  },
  {
    id: "p6",
    title: "The Lotus Symphony",
    category: "Bridal Portraits",
    src: "/images/photo-4-bride-lotus.jpg",
    aspect: "portrait",
    description:
      "Editorial bridal concept with fresh lotus blooms, heirloom chooda, and masterfully balanced chiaroscuro studio lighting.",
    location: "New Delhi",
  },
  {
    id: "p7",
    title: "Regal Velvet Evening",
    category: "Receptions & Sangeet",
    src: "/images/photo-2-reception-couple.jpg",
    aspect: "landscape",
    description:
      "Groom in bespoke hand-embroidered velvet sherwani and bride in royal crimson attire against ornate palace architecture.",
    location: "Udaipur, Rajasthan",
  },
  {
    id: "p8",
    title: "Unscripted Joy & Jubilation",
    category: "Weddings",
    src: "/images/photo-5-wedding-party.jpg",
    aspect: "landscape",
    description:
      "Exuberant outdoor celebration beneath a lush bougainvillea floral canopy with the bridal party and ecstatic loved ones.",
    location: "Chandigarh",
  },
  {
    id: "p9",
    title: "Cocktail Lights & Black-Tie Glamour",
    category: "Receptions & Sangeet",
    src: "/images/photo-6-sangeet-cocktail-couple.jpg",
    aspect: "landscape",
    description:
      "Modern high-fashion evening portrait featuring a sharp tuxedo and shimmering cape gown enveloped by radiant ambient bokeh lights.",
    location: "Mumbai, Maharashtra",
  },
]

const categories = [
  "All Works",
  "Weddings",
  "Bridal Portraits",
  "Receptions & Sangeet",
] as const

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Works")
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All Works"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return

      if (e.key === "Escape") {
        setSelectedPhotoIndex(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        )
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedPhotoIndex, filteredItems.length])

  const activePhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null

  return (
    <section
      id="portfolio"
      aria-label="Jaideep Gandhi Photography Portfolio"
      className="py-24 sm:py-32 px-6 bg-gradient-to-b from-white via-[#FCFBF9] to-white border-y border-gold-200/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-300/50 bg-gold-50/60 mb-4">
              <Camera className="w-3.5 h-3.5 text-gold-700" />
              <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-gold-700">
                Curated Gallery
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-medium tracking-tight">
              Moments Carved in Light
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
            <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed font-light">
              Explore authentic frames captured across 20 years of bespoke celebrations — from candid whispers and intimate henna rituals to grand royal ceremonies.
            </p>
          </div>
        </BlurFade>

        {/* Category Filters */}
        <BlurFade delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setSelectedPhotoIndex(null)
                  }}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-charcoal-950 text-white shadow-md shadow-charcoal-950/20 border border-charcoal-950 scale-105"
                      : "bg-white text-charcoal-700 hover:text-gold-700 hover:bg-gold-50/50 border border-gold-200/70"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </BlurFade>

        {/* Dynamic Gallery Grid (9 images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => {
            const isPortrait = item.aspect === "portrait"
            const isSquare = item.aspect === "square"
            return (
              <BlurFade key={item.id} delay={0.08 + (idx % 3) * 0.08}>
                <div
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-charcoal-900 border border-gold-200/60 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 ${
                    isPortrait
                      ? "aspect-[3/4]"
                      : isSquare
                      ? "aspect-square"
                      : "aspect-[4/3] md:aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Aesthetic Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-300 bg-charcoal-950/80 px-3 py-1 rounded-full backdrop-blur-md border border-gold-400/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand icon pill */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-medium mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-gold-400" />
                      {item.location || "Fine Art Commission"}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-ivory-200/90 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>

        {/* Gallery Footer Note */}
        <BlurFade delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-charcoal-500 font-medium mb-4">
              Looking for our complete wedding archives &amp; private client galleries?
            </p>
            <Button
              variant="gold"
              size="lg"
              asChild
              className="px-8 py-3 text-xs tracking-[0.18em] uppercase font-semibold shadow-md"
            >
              <a href="#contact">Request Full Portfolio Access</a>
            </Button>
          </div>
        </BlurFade>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
              )
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              )
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] sm:h-[70vh] overflow-hidden rounded-xl shadow-2xl border border-white/10">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-3 sm:mt-4 text-center max-w-2xl px-4">
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gold-400 mb-1">
                <span>{activePhoto.category}</span>
                <span>&bull;</span>
                <span>{activePhoto.location}</span>
                <span>&bull;</span>
                <span>
                  {selectedPhotoIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h4 className="font-serif text-lg sm:text-2xl text-white font-normal">
                {activePhoto.title}
              </h4>
              <p className="text-ivory-300 text-xs sm:text-sm font-light mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
