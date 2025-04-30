"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Smartphone } from 'lucide-react'
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 right-4 z-[100] pointer-events-none"
      >
        <div className="bg-[#0A0C13] border border-red-500/20 rounded-2xl p-4 shadow-xl backdrop-blur-xl pointer-events-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 bg-red-500/10 rounded-lg">
              <Smartphone className="w-6 h-6 text-red-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white mb-1">
                Mobile Experience
              </h3>
              <p className="text-sm text-gray-300">
                This site is optimized for desktop. For the best experience, we recommend viewing on a larger screen.
              </p>
            </div>

            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss warning"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="text-sm text-gray-400 hover:text-white hover:bg-white/[0.05]"
            >
              Got it
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 