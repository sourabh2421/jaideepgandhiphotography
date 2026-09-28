import { MagicCard } from "@/components/ui/magic-card"
import { BlurFade } from "@/components/ui/blur-fade"
import {
  UserCheck,
  HeartHandshake,
  Sparkles,
  SlidersHorizontal,
  ShieldCheck,
  Camera,
} from "lucide-react"

const whyChooseUsItems = [
  {
    icon: UserCheck,
    title: "Personalized Approach",
    description:
      "Every wedding is distinct. We take time to understand your family traditions, intimate bonds, and bespoke vision through detailed pre-event consultations.",
  },
  {
    icon: HeartHandshake,
    title: "Genuine, Candid Emotion",
    description:
      "We steer away from forced poses. Our quiet documentary technique captures tears, hearty laughter, and unscripted glances exactly as they unfold.",
  },
  {
    icon: Sparkles,
    title: "Creative Storytelling",
    description:
      "Combining painterly natural lighting, cinematic framing, and architectural perspective to craft an unforgettable narrative of your celebration.",
  },
  {
    icon: SlidersHorizontal,
    title: "Premium Editing",
    description:
      "Each photograph is color-graded individually with our timeless, true-to-life editorial tone — avoiding fleeting filters to preserve archival beauty.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "20 years of unwavering professionalism: prompt communications, punctual arrival, dual backups on-site, and guaranteed on-schedule gallery delivery.",
  },
  {
    icon: Camera,
    title: "Archival Preservation",
    description:
      "Crafted with heirloom-grade precision and master-level color fidelity, ensuring your memories remain as radiant and emotive decades from now as on day one.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 sm:py-32 px-6 bg-white border-y border-gold-200/50">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gold-700">
              The Jaideep Gandhi Hallmark
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-charcoal-900 font-medium tracking-tight">
              Why Choose Us
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
            <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed font-light">
              20 years of expertise, personalized approach, and the ability to capture genuine emotions naturally — combining creative storytelling, premium editing, and reliable service to deliver photographs that become family heirlooms.
            </p>
          </div>
        </BlurFade>

        {/* 6 Uniform Magic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon
            return (
              <BlurFade key={index} delay={0.15 + index * 0.08}>
                <MagicCard
                  gradientColor="#C5A880"
                  gradientOpacity={0.18}
                  className="p-8 h-full flex flex-col justify-between bg-[#FCFBF9] border-gold-200/60 hover:border-gold-400/80 transition-all shadow-sm hover:shadow-md rounded-2xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </MagicCard>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
