import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className?: string
  background: ReactNode
  Icon?: React.ComponentType<{ className?: string }>
  description: string
  href?: string
  cta?: string
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-card border border-border/70 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu transition-all duration-300 hover:border-gold-400/50 hover:shadow-xl",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
      {Icon && (
        <Icon className="h-10 w-10 origin-left transform-gpu text-gold-600 transition-all duration-300 ease-in-out group-hover:scale-110" />
      )}
      <h3 className="font-serif text-2xl font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>

    {cta && href && (
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto text-gold-700 hover:text-gold-800 p-0"
        >
          <a href={href} className="inline-flex items-center gap-1.5 font-medium">
            {cta}
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02]" />
  </div>
)
