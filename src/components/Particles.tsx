"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speed: number
  delay: number
}

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Generate random particles
  const generateParticles = (count: number): Particle[] => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100, // Random x position (0-100%)
      y: Math.random() * 100 + 100, // Start below the viewport
      size: Math.random() * 4 + 2, // Random size between 2-6px
      color: Math.random() > 0.5 ? 'rgb(239, 68, 68)' : 'rgb(249, 115, 22)', // Red or orange
      speed: Math.random() * 25 + 20, // Random speed between 20-45s
      delay: Math.random() * -30, // Random start time
    }))
  }

  const particles = generateParticles(75) // Generate 75 particles

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            opacity: 0.2, // Increased base opacity
          }}
          animate={{
            y: [particle.y, -20], // Animate from below viewport to above
            opacity: [0.2, 0], // Start more visible, fade to transparent
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
} 