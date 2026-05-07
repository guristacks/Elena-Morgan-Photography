"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn, TextReveal } from "@/components/animated-section"

export function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={ref}
      className="relative h-[80vh] overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2048&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <FadeIn>
            <p className="text-card/80 text-sm tracking-[0.3em] uppercase mb-6">
              Featured In
            </p>
          </FadeIn>
          
          <TextReveal 
            className="text-3xl md:text-5xl lg:text-6xl font-light text-card leading-tight mb-8"
            delay={0.2}
          >
            Creating art that transcends the moment and speaks to eternity
          </TextReveal>
          
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 opacity-70">
              {["VOGUE", "ELLE", "HARPER'S BAZAAR", "NATIONAL GEOGRAPHIC"].map((brand) => (
                <span 
                  key={brand} 
                  className="text-card text-sm md:text-base tracking-[0.2em]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
