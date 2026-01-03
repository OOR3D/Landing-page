"use client"

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface LoadingScreenProps {
  progress: number
  onComplete: () => void
}

export default function LoadingScreen({ progress, onComplete }: LoadingScreenProps) {
  const [displayProgress, setDisplayProgress] = useState(0)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    // Smooth progress animation
    if (progress > displayProgress) {
      const increment = Math.min(progress - displayProgress, 5) // Max 5% increment per frame
      setDisplayProgress(prev => Math.min(prev + increment, progress))
    } else if (progress >= 100) {
      // Ensure we show 100% when progress reaches 100
      setDisplayProgress(100)
    }
  }, [progress, displayProgress])

  useEffect(() => {
    // Check if we've reached 100% and haven't completed yet
    if (progress >= 100 && !hasCompletedRef.current) {
      hasCompletedRef.current = true
      // Wait at 100% for a bit before calling onComplete
      const timer = setTimeout(() => {
        onComplete()
      }, 800) // Stay at 100% for 800ms
      return () => clearTimeout(timer)
    }
  }, [progress, onComplete])

  return (
    <motion.div 
      className="fixed inset-0 bg-[#0A0C13] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {Math.round(displayProgress)}%
      </motion.div>
    </motion.div>
  );
} 