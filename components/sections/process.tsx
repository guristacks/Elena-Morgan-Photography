"use client"

import { motion } from "framer-motion"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a conversation to understand your vision, style preferences, and the story you want to tell through your images.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Together we plan every detail - from locations and timing to wardrobe and mood, ensuring nothing is left to chance.",
  },
  {
    number: "03",
    title: "The Session",
    description: "The magic happens. I create a comfortable environment where authentic moments unfold naturally.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Your carefully curated and edited images are delivered in a beautiful online gallery, ready to be cherished forever.",
  },
]

export function ProcessSection() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              My Process
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              How We Work Together
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                className="group relative text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <span className="text-7xl font-light text-muted/50 group-hover:text-muted-foreground/30 transition-colors duration-500">
                  {step.number}
                </span>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-border" />
                )}
                
                {/* Content */}
                <h3 className="text-xl font-medium text-foreground mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
