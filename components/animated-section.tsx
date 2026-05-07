"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

interface AnimatedSectionProps {
  id?: string   // 👈 added
  children: React.ReactNode
  className?: string
  parallax?: boolean
  parallaxOffset?: number
}

export function AnimatedSection({ 
  id,   // 👈 added
  children, 
  className = "", 
  parallax = false,
  parallaxOffset = 100 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset])

  return (
    <motion.section
      ref={ref}
      id={id}   // 👈 added
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={parallax ? { y } : undefined}
    >
      {children}
    </motion.section>
  )
}

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = children.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + index * 0.05
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
}

export function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
        style={{ y }}
      />
    </div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  )
}