"use client"

import { motion } from "framer-motion"
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { Camera, Heart, Users, Sparkles } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Intimate portraits that capture your authentic self. From professional headshots to creative artistic sessions.",
    price: "From $500",
  },
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Documenting your special day with elegance and emotion. Full-day coverage, engagement sessions, and albums.",
    price: "From $3,000",
  },
  {
    icon: Users,
    title: "Event Photography",
    description: "Corporate events, galas, and private celebrations captured with a discerning eye for detail.",
    price: "From $800",
  },
  {
    icon: Sparkles,
    title: "Editorial & Commercial",
    description: "High-end fashion, product photography, and brand campaigns that elevate your visual identity.",
    price: "Custom Quote",
  },
]

export function ServicesSection() {
  return (
    <AnimatedSection
      id="services"
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              What I Offer
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every session is tailored to your unique vision. I work closely with each client to create images that resonate with their personal story.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="group p-10 bg-card border border-border hover:border-muted-foreground/30 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-muted group-hover:bg-foreground transition-colors duration-500">
                    <service.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-foreground font-medium text-sm tracking-wider">
                      {service.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
