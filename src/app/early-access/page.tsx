'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import NavigationWrapper from "@/components/NavigationWrapper"
import Link from 'next/link'
import EarlyAccessPopup from '@/components/EarlyAccessPopup'
import { GradientButton } from "@/components/ui/gradient-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function EarlyAccess() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0a0c13] flex flex-col items-center justify-center relative py-40">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)]"
        />

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 leading-relaxed ${montserrat.className}`}
          >
            Get Early Access to OOR3D™
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            OOR3D™ is designed to make 3D creation faster, easier, and more accessible across platforms like IMVU, Second Life, and Sims 4 — and you're getting in at the ground floor.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-orange-400 mb-12 font-medium"
          >
            Spots are limited.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GradientButton
              size="lg"
              onClick={() => setShowPopup(true)}
            >
              Request Early Access
            </GradientButton>
          </motion.div>

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
        </div>

        {/* Early Access Popup */}
        <AnimatePresence>
          {showPopup && (
            <EarlyAccessPopup onClose={() => setShowPopup(false)} />
          )}
        </AnimatePresence>
      </main>
    </NavigationWrapper>
  )
} 