"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after 4 seconds
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 4000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 pointer-events-none"
        >
          <div 
            className="relative rounded-[24px] p-5 shadow-2xl pointer-events-auto overflow-hidden max-w-2xl mx-auto"
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

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div 
                  className="flex-shrink-0 rounded-full p-2.5"
                  style={{
                    backgroundColor: 'rgba(254, 1, 1, 0.1)',
                    border: '1px solid rgba(254, 1, 1, 0.2)',
                    boxShadow: '0 0 20px rgba(254, 1, 1, 0.1)'
                  }}
                >
                  <Cookie className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white tracking-tight mb-1">Cookie Settings</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    We use cookies to improve your experience. By continuing, you agree to our cookie policy.
                  </p>
                </div>
              </div>

              <Button
                onClick={acceptCookies}
                variant="red"
                size="sm"
                className="rounded-full !cursor-pointer hover:!cursor-pointer flex-shrink-0"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 