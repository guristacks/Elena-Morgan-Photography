"use client"

import { motion } from "framer-motion"
import { AnimatedSection, FadeIn, ParallaxImage } from "@/components/animated-section"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      className="py-24 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            <FadeIn>
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
                Get In Touch
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Let&apos;s Create Together
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-10">
                Ready to capture your story? I&apos;d love to hear about your vision. 
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors duration-300 text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors duration-300 text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors duration-300 text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="editorial">Editorial & Commercial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground mb-2">
                    Tell Me About Your Vision
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors duration-300 text-foreground resize-none"
                    placeholder="Share your ideas, preferred dates, or any questions..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </form>
            </FadeIn>
          </div>

          {/* Image & Contact Info */}
          <div className="space-y-10">
            <FadeIn direction="right">
              <div className="aspect-[4/3] overflow-hidden">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop"
                  alt="Studio"
                  className="w-full h-full"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-muted group-hover:bg-foreground transition-colors duration-300">
                    <Mail className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-muted-foreground transition-colors">hello@elenavoss.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-muted group-hover:bg-foreground transition-colors duration-300">
                    <Phone className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground group-hover:text-muted-foreground transition-colors">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-muted group-hover:bg-foreground transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Studio</p>
                    <p className="text-foreground group-hover:text-muted-foreground transition-colors">New York City, NY</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
