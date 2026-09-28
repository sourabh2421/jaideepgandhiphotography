import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import { BlurFade } from "@/components/ui/blur-fade"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aanya & Kabir Singhania",
    location: "Udaipur & Mumbai",
    quote:
      "Jaideep made our three-day destination wedding feel effortless. When we opened our wedding gallery, both of our families were in tears. He didn't just photograph the ceremonies; he captured the genuine heartbeat of our loved ones.",
    event: "3-Day Palace Wedding",
    image: "/images/photo-9-royal-garden-couple.jpg",
  },
  {
    name: "Rhea & Devansh Mehta",
    location: "Jaipur & London",
    quote:
      "Working with Jaideep felt like having a trusted lifelong friend behind the camera. His eye for lighting during our sunset pheras was pure magic. Our handcrafted leather heirloom album is the centerpiece of our home.",
    event: "Destination Royal Wedding",
    image: "/images/photo-2-reception-couple.jpg",
  },
  {
    name: "Natasha & Siddharth Roy",
    location: "Mumbai & Dubai",
    quote:
      "Our cocktail and sangeet portraits looked like they belonged in a Vogue editorial. 20 years of experience truly shows in his calm composure, quick reflexes, and impeccable color grading.",
    event: "Black-Tie Reception & Sangeet",
    image: "/images/photo-6-sangeet-cocktail-couple.jpg",
  },
  {
    name: "Sneha & Arjun Nambiar",
    location: "Bengaluru & Chennai",
    quote:
      "He captured every ritual and traditional nuance of our wedding with deep respect and elegance. The emotions captured in the candid moments are treasures we will pass on to our children.",
    event: "Traditional Temple Wedding",
    image: "/images/photo-3-traditional-couple.jpg",
  },
  {
    name: "Meera & Raghav Kapoor",
    location: "Chandigarh & Delhi",
    quote:
      "The energy, the laughter, and the spontaneous joy of our families dancing under the floral arch were captured so vividly. Every time we look at our photos, we relive the celebration all over again.",
    event: "Pre-Wedding & Festivities",
    image: "/images/photo-5-wedding-party.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 overflow-hidden bg-[#FAF8F5] border-t border-gold-200/50">
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <BlurFade delay={0.1}>
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gold-700">
            Kind Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-charcoal-900 font-medium tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
          <p className="text-charcoal-600 text-base sm:text-lg font-light">
            Reflections from couples who entrusted their most sacred memories to our lens.
          </p>
        </BlurFade>
      </div>

      <div className="relative w-full">
        {/* Subtle Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10" />

        <Marquee pauseOnHover className="py-4 [--duration:42s]">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[min(340px,85vw)] sm:w-[420px] rounded-2xl border border-gold-200/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between mx-3"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300/60" />
                </div>
                <p className="font-serif italic text-charcoal-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gold-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-400/60 shrink-0 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-charcoal-900 text-xs sm:text-sm tracking-wide truncate">
                      {item.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gold-700 font-medium tracking-wider mt-0.5 truncate">
                      {item.location}
                    </div>
                  </div>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-charcoal-600 bg-gold-50/80 border border-gold-200/60 px-2 sm:px-2.5 py-1 rounded-full shrink-0 font-medium">
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
