'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import NavigationWrapper from "@/components/NavigationWrapper"
import Image from 'next/image'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function EarlyAccess() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0a0c13] flex flex-col items-center justify-center relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)]"
        />

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
          >
            Get Early Access to OUTOFREACH3D.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            We're preparing something special for creators. Be the first to enter.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(to right, rgb(185, 28, 28), rgb(194, 65, 12))"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(true)}
            className="px-8 py-4 text-lg font-medium rounded-full 
                     bg-gradient-to-r from-red-600 to-orange-600
                     text-white border-0"
          >
            Request Early Access
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8"
          >
            <Link
              href="/experience"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              See what we're building →
            </Link>
          </motion.div>

          {/* Coming Soon Popup */}
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              onClick={() => setShowPopup(false)}
            >
              <motion.div 
                className="bg-[#0a0c13] p-8 rounded-2xl border border-gray-800 max-w-sm mx-4"
                onClick={e => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4 text-white">Coming Soon!</h2>
                <p className="text-gray-300 mb-6">Early access registration will be available soon. Stay tuned!</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </main>
    </NavigationWrapper>
  )
} 