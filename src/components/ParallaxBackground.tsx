"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
  style?: React.CSSProperties
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
  style = {}
}: ParallaxLayerProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -speed * 100])

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 ${className}`}
      style={{
        y,
        ...style
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxBackgroundProps {
  children: ReactNode
  className?: string
}

export default function ParallaxBackground({ children, className = "" }: ParallaxBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background layers with different speeds */}
      <ParallaxLayer speed={0.1}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-blue-900/5" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.2}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={-0.1}>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.3}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] bg-gradient-radial from-red-600/10 via-transparent to-transparent rounded-full blur-2xl" />
        </div>
      </ParallaxLayer>

      {/* Floating particles */}
      <ParallaxLayer speed={0.15}>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </ParallaxLayer>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
