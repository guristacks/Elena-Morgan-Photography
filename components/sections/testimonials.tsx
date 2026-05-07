"use client"

import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Elena has an extraordinary ability to capture the essence of a moment. Her portraits are not just photographs, they&apos;re windows into the soul.",
    name: "Sarah Mitchell",
    role: "Creative Director, Vogue",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Working with Elena was transformative. She sees beauty in places you never knew existed and brings it to life with such grace.",
    name: "David Chen",
    role: "Art Curator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Our wedding photos exceeded every expectation. Elena captured moments we didn&apos;t even know happened. Pure magic.",
    name: "Emma & James",
    role: "Newlyweds",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
  },
]

export function TestimonialsSection() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Kind Words
            </h2>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="group p-8 bg-background border border-border hover:border-muted-foreground/30 transition-all duration-500 h-full flex flex-col">
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-6" />
                <p className="text-foreground/80 leading-relaxed flex-1 mb-8" dangerouslySetInnerHTML={{ __html: testimonial.quote }} />
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <p className="text-foreground font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
