"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/animated-section"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                ELENA VOSS
              </h3>
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
                Capturing life&apos;s most precious moments through the art of photography. 
                Based in New York, available worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-background/80">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-background/80">
                Stay Connected
              </h4>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:bg-background hover:text-foreground transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
              
              <div>
                <p className="text-background/60 text-sm mb-4">
                  Subscribe for updates and exclusive content
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-transparent border border-background/20 focus:border-background/60 outline-none text-sm text-background placeholder:text-background/40 transition-colors"
                  />
                  <button className="px-6 py-2 bg-background text-foreground text-sm hover:bg-background/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom */}
        <FadeIn delay={0.2}>
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              &copy; {new Date().getFullYear()} Elena Voss Photography. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/40">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
