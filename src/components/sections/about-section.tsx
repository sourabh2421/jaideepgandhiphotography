import Image from "next/image"
import { NumberTicker } from "@/components/ui/number-ticker"
import { BlurFade } from "@/components/ui/blur-fade"
import { Award, Camera, Heart, Globe, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <BlurFade delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gold-700">
              Two Decades of Mastery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-charcoal-900 font-medium tracking-tight">
              About Jaideep Gandhi
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
          </div>
        </BlurFade>

        {/* Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Framed Masterpiece Photo */}
          <BlurFade delay={0.2} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none pb-14 sm:pb-16">
              {/* Outer decorative gold offset frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-gold-300/60 -rotate-1 pointer-events-none" />
              
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gold-200/80 bg-charcoal-900">
                <Image
                  src="/images/photo-1-bride-portrait.jpg"
                  alt="Jaideep Gandhi Fine Art Bridal Portrait - Regal elegance in emeralds and polki"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30 text-gold-300 text-[11px] uppercase tracking-[0.2em] mb-2 font-medium">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    Signature Fine Art
                  </div>
                  <p className="text-white font-serif text-lg leading-snug font-light">
                    “Every portrait is treated as a museum-grade heirloom.”
                  </p>
                </div>
              </div>

              {/* Floating Experience Stamp — uses bottom-0 so it stays inside the padded wrapper */}
              <div className="absolute bottom-0 right-0 sm:-right-4 bg-white p-3.5 sm:p-5 rounded-2xl border border-gold-200 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-serif text-lg sm:text-2xl font-bold text-charcoal-900 leading-tight">
                    20+ Years
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-700 font-semibold">
                    Master Craftsman
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Right Column: Narrative & Philosophy */}
          <BlurFade delay={0.3} className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-700">
                The Philosophy
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-charcoal-900 leading-relaxed font-normal">
                “Wedding photography is not just about documenting an event; it is the sacred art of preserving generational love stories.”
              </p>
            </div>

            <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed">
              With over 20 years behind the lens, Jaideep Gandhi has cultivated an unmistakable visual language that merges classic European royal portraiture with authentic, spontaneous candid emotions. Having covered more than 2,500 milestone celebrations across India and the globe, each commission receives meticulous personal attention.
            </p>

            <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed">
              From the quiet, tearful embrace between a father and daughter to the electric celebration of midnight pheras and black-tie receptions, Jaideep ensures your family memories are immortalized in natural, timeless elegance.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                Dual Archival Color Grading
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                Discreet Candid Coverage
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                Global Destination Ready
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Highlighted Metric Counters Row */}
        <BlurFade delay={0.4}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 py-8 sm:py-10 px-4 sm:px-8 rounded-2xl bg-white border border-gold-200/70 shadow-sm divide-x-0">
            {/* 20 Years */}
            <div className="flex flex-col items-center text-center p-4 border-b border-r border-gold-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-700 mb-3 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 flex items-center">
                <NumberTicker value={20} className="text-gold-700" />
                <span className="text-gold-700 font-light ml-1 text-2xl sm:text-3xl">Yrs</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal-600 mt-2 font-medium">
                Experience
              </p>
            </div>

            {/* 2,500+ Events */}
            <div className="flex flex-col items-center text-center p-4 border-b border-gold-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-700 mb-3 sm:mb-4">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 flex items-center">
                <NumberTicker value={2500} className="text-gold-700" />
                <span className="text-gold-700 font-light ml-0.5">+</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal-600 mt-2 font-medium">
                Events Covered
              </p>
            </div>

            {/* Destinations */}
            <div className="flex flex-col items-center text-center p-4 border-r border-gold-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-700 mb-3 sm:mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 flex items-center">
                <NumberTicker value={18} className="text-gold-700" />
                <span className="text-gold-700 font-light ml-0.5">+</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal-600 mt-2 font-medium">
                Destinations
              </p>
            </div>

            {/* Perfection */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-700 mb-3 sm:mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 flex items-center">
                <NumberTicker value={100} className="text-gold-700" />
                <span className="text-gold-700 font-light ml-0.5">%</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal-600 mt-2 font-medium">
                Dedicated
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
