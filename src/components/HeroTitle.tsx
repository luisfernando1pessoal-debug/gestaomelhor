"use client"

import { TextRotate } from "@/components/TextRotate"

const nicheNames = [
  "cada negócio",
  "sua clínica",
  "sua imobiliária",
  "seu escritório",
  "seu consultório",
  "sua consultoria",
  "sua escola",
  "sua concessionária",
  "seu estúdio",
  "sua assessoria",
]

export default function HeroTitle() {
  return (
    <h1 className="mb-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-800 leading-[1.1] tracking-[-0.025em] text-[var(--text)] text-center">
      O sistema certo para{" "}
      <br className="sm:hidden" />
      <TextRotate
        texts={nicheNames}
        mainClassName="inline-flex justify-center overflow-hidden"
        splitBy="words"
        staggerFrom="first"
        staggerDuration={0.06}
        rotationInterval={3000}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 220,
        }}
        elementLevelClassName="text-[var(--accent)]"
      />
    </h1>
  )
}
