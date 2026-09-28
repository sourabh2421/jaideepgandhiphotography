import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BlurFade } from "@/components/ui/blur-fade"

const faqs = [
  {
    question: "How far in advance should we book you?",
    answer:
      "Because we commit to only one wedding per weekend to guarantee our full creative energy, most couples reserve our dates 6 to 12 months in advance. However, if your date is sooner, please reach out — we are always delighted to accommodate whenever our schedule permits.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes, absolutely. Destination weddings are at the heart of our craft. Over the past 20 years, we have documented celebrations across royal heritage palaces in Rajasthan, coastal villas in Goa, and romantic locales throughout Europe, the Middle East, and Southeast Asia. We handle all travel logistics smoothly.",
  },
  {
    question: "What's included in a photography package?",
    answer:
      "Every commission is customized to your celebration. Typically, packages include comprehensive multi-day coverage with Jaideep Gandhi and senior photographers, full pre-event planning, signature high-resolution color-graded galleries, and options for bespoke archival leather albums and cinematic highlight films.",
  },
  {
    question: "How long does it take to receive the final edited photos?",
    answer:
      "We believe you shouldn't wait weeks just to share your happiness. You will receive a curated 'Sneak Peek' collection within 5 to 7 days following your wedding. Your complete, individually hand-edited high-resolution master gallery is delivered in 6 to 8 weeks.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 px-6 bg-white border-t border-gold-200/50">
      <div className="max-w-3xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gold-700">
              Clear &amp; Transparent
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-charcoal-900 font-medium tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto my-6" />
            <p className="text-charcoal-600 text-base sm:text-lg font-light">
              Everything you need to know about commissioning Jaideep Gandhi Photography.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.25}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gold-200/80 rounded-xl px-6 bg-[#FCFBF9] shadow-sm hover:border-gold-300 transition-colors"
              >
                <AccordionTrigger className="font-serif text-lg sm:text-xl font-medium text-charcoal-900 hover:text-gold-700 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-600 text-sm sm:text-base leading-relaxed pb-6 pt-1 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  )
}
