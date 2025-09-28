"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MagneticElementProps {
  children: ReactNode
  intensity?: number
  className?: string
  onClick?: () => void
}

export default function MagneticElement({
  children,
  intensity = 0.3,
  className = "",
  onClick
}: MagneticElementProps) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  )
}
