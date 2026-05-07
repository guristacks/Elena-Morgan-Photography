"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedSection, FadeIn } from "@/components/animated-section"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Portraits", "Landscapes", "Editorial", "Events"]

const portfolioItems = [
  {
    id: 1,
    title: "Ethereal Dawn",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Silent Reflections",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Urban Poetry",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Golden Hour",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc6d90?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Timeless Elegance",
    category: "Events",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Inner Light",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  },
]

function PortfolioItem({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center px-6">
          <p className="text-card/80 text-xs tracking-[0.2em] uppercase mb-2">
            {item.category}
          </p>
          <h3 className="text-card text-xl font-light mb-4">{item.title}</h3>
          <motion.div
            className="w-10 h-10 mx-auto border border-card/60 rounded-full flex items-center justify-center text-card group-hover:bg-card group-hover:text-foreground transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <AnimatedSection
      id="portfolio"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Selected Works
            </h2>
          </FadeIn>
        </div>

        {/* Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <FadeIn delay={0.4} className="text-center mt-16">
          <motion.button
            className="px-10 py-4 border border-foreground text-foreground text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.button>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
