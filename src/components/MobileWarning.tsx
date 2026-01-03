"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function MobileWarning() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      const hasSeenWarning = localStorage.getItem('hasSeenMobileWarning')
      
      if (isMobile && !hasSeenWarning && !hasBeenDismissed) {
        // Show warning after a delay to avoid interference with cookie notice
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 2000)
        return () => clearTimeout(timer)
      } else {
        setIsVisible(false)
      }
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [hasBeenDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setHasBeenDismissed(true)
    localStorage.setItem('hasSeenMobileWarning', 'true')
  }

  // Don't render anything if it's been dismissed or shouldn't be visible
  if (!isVisible || hasBeenDismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 left-4 right-4 z-[100] pointer-events-none"
      >
        <div 
          className="relative rounded-[24px] p-5 shadow-2xl pointer-events-auto overflow-hidden"
          style={{
            backgroundColor: 'rgba(13, 4, 41, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(254, 1, 1, 0.1)'
          }}
        >
          {/* Gradient accent line at top */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FE0101] to-transparent opacity-60" />
          
          {/* Subtle glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FF4AE7]/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex items-start gap-4">
            <div 
              className="flex-shrink-0 p-2.5 rounded-xl"
              style={{
                backgroundColor: 'rgba(254, 1, 1, 0.1)',
                border: '1px solid rgba(254, 1, 1, 0.2)',
                boxShadow: '0 0 20px rgba(254, 1, 1, 0.1)'
              }}
            >
              <Monitor className="w-5 h-5 text-[#FE0101]" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                Desktop Recommended
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                This experience is optimized for larger screens. Visit on desktop for the full experience.
              </p>
            </div>

            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-white/30 hover:text-white/70 transition-colors p-1.5 hover:bg-white/5 rounded-lg"
              aria-label="Dismiss warning"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative z-10 mt-4 flex justify-end">
            <Button
              variant="red"
              size="sm"
              onClick={handleDismiss}
              className="rounded-full !cursor-pointer hover:!cursor-pointer flex-shrink-0"
            >
              Got it
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 