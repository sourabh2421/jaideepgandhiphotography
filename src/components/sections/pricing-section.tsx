import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Check, Sparkles, Clock, MapPin } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 px-6 bg-white relative overflow-hidden border-t border-gold-200/50">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gold-700">
              Transparent Investment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-charcoal-900 font-medium tracking-tight">
              Pricing
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
            <p className="text-charcoal-600 text-base sm:text-lg font-light">
              Fine-art photography crafted around the unique scale and story of your celebration.
            </p>
          </div>
        </BlurFade>

        {/* Single Clean Pricing Card */}
        <BlurFade delay={0.25}>
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-12 bg-gradient-to-b from-[#FCFBF9] to-[#FAF7F2] border border-gold-300/80 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-8 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-800 text-xs font-medium uppercase tracking-[0.2em] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                Bespoke Commissions
              </div>

              {/* Price Anchor */}
              <div className="mb-4">
                <span className="text-sm sm:text-base font-light uppercase tracking-widest text-charcoal-500 block mb-1">
                  Commission Rate
                </span>
                <div className="font-serif tracking-tight text-charcoal-900">
                  <span className="block text-base sm:text-lg font-light text-charcoal-600 mb-1">Starting from</span>
                  <span className="text-4xl sm:text-6xl font-bold text-gold-700">₹40,000</span>
                  <span className="text-xl sm:text-2xl font-light text-charcoal-500"> / day</span>
                </div>
              </div>

              {/* Short line noting final pricing */}
              <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto leading-relaxed mb-8 font-light">
                *Final pricing depends on package selection, multi-day itinerary, destination location, and team size.
              </p>

              {/* Reassurance Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl text-left py-6 my-2 border-y border-gold-200/60 text-sm text-charcoal-700">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Lead photographer + creative crew</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-resolution color-graded master gallery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Sneak peek delivery within 5-7 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Available across India &amp; global destinations</span>
                </div>
              </div>

              {/* Lead-Gen CTA Button (Conversion Point 2) */}
              <div className="mt-8 w-full sm:w-auto">
                <a href="#contact" className="w-full sm:w-auto inline-block">
                  <ShimmerButton
                    shimmerColor="#FAF8F5"
                    className="w-full sm:w-auto px-10 py-4 shadow-xl border-gold-500/50 cursor-pointer"
                  >
                    <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white">
                      Get a Custom Quote
                    </span>
                  </ShimmerButton>
                </a>
                <p className="text-xs text-charcoal-500 mt-3 tracking-wider">
                  No obligation &bull; Personalized proposal sent within 24 hours
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
