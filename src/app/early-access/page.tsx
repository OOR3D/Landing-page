'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import NavigationWrapper from "@/components/NavigationWrapper"
import EarlyAccessForm from '@/components/EarlyAccessForm'
import { useState, useEffect } from 'react'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function EarlyAccess() {
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has submitted early access form
    const submitted = localStorage.getItem("oor3d_early_access_submitted") === "true"
    setHasSubmitted(submitted)
  }, [])

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0a0c13] text-white">
        {/* Background gradient */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute -top-[30%] right-[10%] w-[50rem] h-[50rem] bg-red-500/20 rounded-full blur-[10rem] animate-pulse" />
          <div className="absolute top-[30%] -left-[20%] w-[40rem] h-[40rem] bg-orange-500/20 rounded-full blur-[10rem] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[10%] right-[20%] w-[45rem] h-[45rem] bg-red-500/20 rounded-full blur-[10rem] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-orange-500/10 rounded-full blur-[10rem] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10 w-full py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 leading-[1.4] md:leading-[1.4] py-2 ${montserrat.className}`}
            >
              We're building OOR3D™ for creators like you.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              The ones who take initiative. The ones who want real independence.
              <br />
              The freedom to create, control, and own everything you make.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-orange-400 mb-12 font-medium"
            >
              Spots are limited
            </motion.p>
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-[80rem] mx-auto mb-20"
          >
            {/* Star-like glow effects */}
            <div className="absolute -inset-4 rounded-[2rem] opacity-75">
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" />
              <div className="absolute top-0 right-1/4 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Border container */}
            <div className="relative">
              {/* Outer glowing border */}
              <div className="absolute -inset-4 rounded-[2rem] border-2 border-white/10 blur-[1px]" />
              <div className="absolute -inset-4 rounded-[2rem] border border-white/5" />
              
              {/* Video container */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <iframe
                    src="https://www.youtube.com/embed/B6zVJ0mLpqg"
                    title="OOR3D Early Access Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <div className="flex justify-center mb-20">
            <EarlyAccessForm onSubmitSuccess={() => setHasSubmitted(true)} />
          </div>

          {/* Founding Creator Pass Section */}
          {hasSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Want to go further?</h3>
              <p className="text-gray-300 mb-6">
                <span className="font-semibold text-orange-400">Become a Founding Creator</span> — Support OOR3D early and get private Discord access, early previews, and lifetime recognition.
              </p>
              <div className="flex items-center justify-between flex-col sm:flex-row gap-4 mb-6">
                <div className="text-xl font-bold text-orange-400">$19 One-Time — Limited Spots</div>
              </div>
              <p className="text-sm text-gray-400 mb-6 italic">
                ⓘ This is a <span className="font-semibold">PAID offer</span> and is <span className="font-semibold">NOT required</span> for early access. If premium membership isn't for you right now, that's perfectly fine — your early access request stands either way!
              </p>
              <div className="flex justify-center">
                <a href="/founder-creator" className="px-6 py-2 bg-orange-500/20 border border-orange-500/50 rounded-lg text-orange-400 hover:bg-orange-500/30 transition-colors font-medium">
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
          )}
        </div>
        </section>
      </main>
    </NavigationWrapper>
  )
} 