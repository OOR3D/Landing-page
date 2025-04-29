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
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }, 4000)

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = 'auto'
      }
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
    // Re-enable scrolling
    document.body.style.overflow = 'auto'
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-md mx-4 p-8 bg-[#0A0C13] rounded-2xl border border-red-500/20 shadow-2xl [&_*]:!cursor-default"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="rounded-full bg-red-500/10 p-3">
                <Cookie className="w-8 h-8 text-red-400" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Cookie Settings</h3>
                <p className="text-gray-300 text-center max-w-sm mx-auto">
                  We use cookies to improve your experience. By continuing, you agree to our cookie policy.
                </p>
              </div>

              <Button
                onClick={acceptCookies}
                className="bg-red-500 hover:bg-red-600 text-white px-8 !cursor-pointer hover:!cursor-pointer rounded-full"
              >
                Accept
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 