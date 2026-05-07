"use client"

import { AnimatedSection, TextReveal, FadeIn, ParallaxImage } from "@/components/animated-section"

export function AboutSection() {
  return (
    <AnimatedSection
      id ="about"
      className="py-24 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                  alt="Elena Voss - Photographer"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-muted-foreground/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
                About Me
              </p>
            </FadeIn>

            <TextReveal className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
              Telling Stories Through Light and Shadow
            </TextReveal>

            <FadeIn delay={0.3}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  With over 15 years of experience behind the lens, I have dedicated my life to capturing the raw, unfiltered beauty of human emotion and the world around us.
                </p>
                <p>
                  My approach to photography is deeply personal. I believe that every moment holds a story waiting to be told, and my role is simply to illuminate it. Whether it&apos;s a fleeting glance, a quiet landscape, or the chaos of city life, I seek to find the extraordinary in the ordinary.
                </p>
                <p>
                  Based in New York, my work has been featured in Vogue, National Geographic, and numerous international exhibitions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-12 mt-12 pt-12 border-t border-border">
                <div>
                  <span className="block text-4xl font-light text-foreground">15+</span>
                  <span className="text-sm text-muted-foreground tracking-wider uppercase">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-light text-foreground">500+</span>
                  <span className="text-sm text-muted-foreground tracking-wider uppercase">Projects</span>
                </div>
                <div>
                  <span className="block text-4xl font-light text-foreground">24</span>
                  <span className="text-sm text-muted-foreground tracking-wider uppercase">Awards</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
