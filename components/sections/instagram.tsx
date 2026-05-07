"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedSection, FadeIn } from "@/components/animated-section"
import { Instagram } from "lucide-react"

const instagramImages = [
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop",
]

function InstagramItem({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-square overflow-hidden cursor-pointer"
    >
      <img
        src={src}
        alt={`Instagram post ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
        <Instagram className="text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
      </div>
    </motion.div>
  )
}

export function InstagramSection() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Follow Along
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              @elenavoss
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground">
              Behind the scenes, daily inspiration, and more
            </p>
          </FadeIn>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramImages.map((src, index) => (
            <InstagramItem key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
