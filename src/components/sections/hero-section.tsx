import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { WordFadeIn } from "@/components/ui/word-fade-in"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowRight, Sparkles } from "lucide-react"

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
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-16 text-center flex flex-col items-center flex-1 justify-center">
        {/* Sub-badge */}
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-950/40 backdrop-blur-md mb-6 shadow-sm max-w-[90vw]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-300 font-medium text-center">
              Fine Art Wedding &amp; Destination Photography
            </span>
          </div>
        </BlurFade>

        {/* Brand Name - Increased Size */}
        <BlurFade delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] uppercase text-ivory-200 mb-4 font-light text-center w-full">
            Jaideep Gandhi Photography
          </h1>
        </BlurFade>

        {/* Tagline using WordFadeIn */}
        <div className="w-full flex justify-center items-center">
          <WordFadeIn
            words="Capturing Love. Preserving Forever."
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white w-full max-w-4xl leading-[1.15] tracking-tight font-medium drop-shadow-md text-center mx-auto"
          />
        </div>

        {/* Short Supporting Line */}
        <BlurFade delay={0.45} className="w-full max-w-2xl mx-auto mt-6 px-2">
          <p className="text-sm sm:text-base md:text-lg text-ivory-300 font-light leading-relaxed drop-shadow-sm text-center w-full">
            Crafting intimate, timeless visual heirlooms for discerning couples — immortalizing unscripted emotions and grand celebrations into generational art.
          </p>
        </BlurFade>

        {/* Primary CTA Only */}
        <BlurFade delay={0.6} className="mt-10 w-full flex justify-center">
          <a href="#contact" className="w-full sm:w-auto max-w-md sm:max-w-none">
            <ShimmerButton
              shimmerColor="#FFFFFF"
              background="#000000"
              hoverBackground="#FFFFFF"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 shadow-2xl border border-white/25 hover:border-white cursor-pointer transition-all duration-500 ease-in-out group"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.18em] uppercase flex items-center justify-center gap-2 text-white group-hover:text-black transition-colors duration-500 ease-in-out">
                Check Availability &amp; Get a Quote
                <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-500 ease-in-out group-hover:translate-x-1" />
              </span>
            </ShimmerButton>
          </a>
        </BlurFade>
      </div>
    </section>
  )
}
