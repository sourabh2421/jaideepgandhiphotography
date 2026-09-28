import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { WordFadeIn } from "@/components/ui/word-fade-in"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Jaideep Gandhi Photography Hero"
      className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden bg-charcoal-950 text-white"
    >
      {/* Background Image with Warm Luxury Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photo-6-sangeet-cocktail-couple.jpg"
          alt="Jaideep Gandhi Wedding Photography - Black-tie couple under glowing bokeh lights"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 scale-105 transition-transform duration-1000"
        />
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,168,128,0.18),_transparent_70%)]" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16 text-center flex flex-col items-center flex-1 justify-center">
        {/* Sub-badge */}
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-950/40 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-300 font-medium">
              Fine Art Wedding &amp; Destination Photography
            </span>
          </div>
        </BlurFade>

        {/* Brand Name */}
        <BlurFade delay={0.2}>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] uppercase text-ivory-200 mb-4 font-light">
            Jaideep Gandhi Photography
          </h1>
        </BlurFade>

        {/* Tagline using WordFadeIn */}
        <WordFadeIn
          words="Capturing Love. Preserving Forever."
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white max-w-4xl mx-auto leading-[1.1] tracking-tight font-medium drop-shadow-md"
        />

        {/* Short Supporting Line */}
        <BlurFade delay={0.45} className="max-w-2xl mx-auto mt-6">
          <p className="text-base sm:text-lg md:text-xl text-ivory-300 font-light leading-relaxed drop-shadow-sm">
            Crafting intimate, timeless visual heirlooms for discerning couples — immortalizing unscripted emotions and grand celebrations into generational art.
          </p>
        </BlurFade>

        {/* Primary & Secondary CTAs */}
        <BlurFade delay={0.6} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact" className="w-full sm:w-auto">
            <ShimmerButton
              shimmerColor="#FFFFFF"
              background="#000000"
              hoverBackground="#FFFFFF"
              className="w-full sm:w-auto px-8 py-4 shadow-2xl border border-white/25 hover:border-white cursor-pointer transition-all duration-500 ease-in-out group"
            >
              <span className="text-sm font-semibold tracking-[0.18em] uppercase flex items-center gap-2 text-white group-hover:text-black transition-colors duration-500 ease-in-out">
                Check Availability &amp; Get a Quote
                <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-500 ease-in-out group-hover:translate-x-1" />
              </span>
            </ShimmerButton>
          </a>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto bg-black/60 text-white border border-white/30 hover:bg-white hover:text-black hover:border-white tracking-widest uppercase text-xs h-14 px-8 transition-all duration-500 ease-in-out shadow-lg backdrop-blur-sm"
          >
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </BlurFade>
      </div>

      {/* Floating Bottom Preview Strip */}
      <BlurFade delay={0.75} className="relative z-10 max-w-4xl mx-auto px-6 pb-8 w-full">
        <div className="bg-charcoal-900/80 backdrop-blur-md rounded-2xl border border-gold-400/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          {/* Thumbnails of real photos */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3 overflow-hidden">
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shrink-0">
                <Image
                  src="/images/photo-1-bride-portrait.jpg"
                  alt="Bridal thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shrink-0">
                <Image
                  src="/images/photo-9-royal-garden-couple.jpg"
                  alt="Palace couple thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shrink-0">
                <Image
                  src="/images/photo-7-bridal-kundan-glamour.jpg"
                  alt="Kundan bridal thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shrink-0">
                <Image
                  src="/images/photo-3-traditional-couple.jpg"
                  alt="Ceremony thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shrink-0">
                <Image
                  src="/images/photo-2-reception-couple.jpg"
                  alt="Reception thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shrink-0">
                <Image
                  src="/images/photo-4-bride-lotus.jpg"
                  alt="Lotus bridal thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs font-serif text-ivory-100 font-medium">
                2,500+ Milestone Events Covered
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-light">
                20 Years of Fine Art Precision
              </div>
            </div>
          </div>

          {/* Quick jump to gallery */}
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-300 hover:text-white transition-colors group"
          >
            Explore 2026 Archive
            <ChevronDown className="w-3.5 h-3.5 text-gold-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </BlurFade>
    </section>
  )
}
