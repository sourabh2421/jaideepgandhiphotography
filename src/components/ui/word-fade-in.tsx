"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface WordFadeInProps {
  words: string
  className?: string
  delay?: number
  variants?: Variants
}

export function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay, duration: 0.6, ease: "easeOut" },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ")

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className={cn(
        "font-serif text-center font-bold tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={variants}
          custom={i}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  )
}
