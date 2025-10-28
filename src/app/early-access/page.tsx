'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import NavigationWrapper from "@/components/NavigationWrapper"
import EarlyAccessForm from '@/components/EarlyAccessForm'
import { useState, useEffect } from 'react'
import { GradientButton } from '@/components/ui/gradient-button'

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

        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10 w-full py-12 pb-0">
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
              className="text-lg text-red-400 mb-12 font-medium"
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
          <div className="w-screen relative left-[calc(-50vw+50%)] pt-24 pb-32 mt-12 mb-0">
            {/* Dark background overlay to create transition effect */}
            <div className="absolute inset-0 bg-[#0A0C13] z-0" />
            {/* Section-specific glow effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-[20%] left-[30%] w-[30rem] h-[30rem] bg-red-500/10 rounded-full blur-[8rem] animate-pulse" />
              <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[8rem] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full relative z-10"
          >
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={`text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-red-400 leading-[1.4] md:leading-[1.4] py-2 ${montserrat.className}`}
              >
                Join the Founding Circle
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                <p>The Founding Circle costs <span className="font-semibold text-white">money</span> - however it's completely separate from early access.</p>
                <p className="pt-4">It's for the few who want to go a step further and be part of OOR3D™'s foundation.</p>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto mb-24"
            >
              <div className="relative rounded-2xl overflow-hidden border border-orange-500/20">
                <img 
                  src="https://assets.oor3d.com/img/card-actions/auth-hero.webp" 
                  alt="Founding Creator" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* What this is Section */}
            <div className="max-w-4xl mx-auto text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-gray-300"><span className="font-semibold text-white">This is the starting line.</span> The first 15 people who'll help shape the identity, tools, and culture of OOR3D™. The ones we'll listen to first, test with first, and credit forever. Becoming a Founding Creator means your feedback carries weight. Your name becomes part of the platform's foundation - visible proof that you were here when it all began.</p>
              </motion.div>
            </div>

            {/* Benefits Section Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} mb-6 py-2`}>
                What comes with being one of the first
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-xl md:text-2xl text-gray-300"
              >
                These are the marks of those who showed up before anyone else.
              </motion.p>
            </motion.div>

            {/* Benefits Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                className="md:col-span-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Claim your universal username</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Every game lets you choose a username, but OOR3D™ isn't a game.
                  This is your creative identity inside a platform that will host thousands of creators across multiple virtual worlds.
                </p>
                <p className="text-gray-300 mb-4">
                  Founding Creators get first pick on usernames - and with full freedom.
                  While everyone else is limited to 5 characters or more, you can choose something shorter, cleaner, and truly yours.
                </p>
                <p className="text-gray-300">
                  You'll be the first to claim the name that defines you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Ongoing beta & roadmap access</h3>
                </div>
                <p className="text-gray-300">
                  Get behind-the-scenes visibility into upcoming tools, experiments, and drops, long before the crowd sees them.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Direct feature requests</h3>
                </div>
                <p className="text-gray-300">
                  You'll have a private lane to submit ideas and requests for features that help you or your business. We'll review them directly and if it's something that helps creators, it moves up the roadmap.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                className="md:col-span-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Founding badge</h3>
                </div>
                <p className="text-gray-300">
                  You'll have a Founding Creator badge on Discord and inside the app. It's your mark of being there and believing before anyone else. As the platform grows, that badge will mean something: recognition, history, and respect from <span className="font-semibold text-white">every creator that comes after</span>.
                </p>
              </motion.div>
              </div>

            {/* What this isn't Section */}
            <div className="max-w-4xl mx-auto text-center mb-24">
              <motion.h3
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
                className="text-3xl md:text-4xl text-white font-semibold mb-8"
              >
                You do not need to pay to get early access.
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-gray-300">Early access is free. If you've already applied, you're in the review pool. This offer is for something else entirely. </p>
                <p className="text-xl md:text-2xl text-gray-300 pt-4">It's for the few who want to be <span className="font-semibold text-white">remembered</span>.</p>
              </motion.div>
              </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl p-12 border border-orange-500/20 backdrop-blur-xl mb-8">
                <p className="text-gray-300 mb-2 text-lg">
                  <span className="font-semibold text-red-400">$19. One time. Fifteen seats only.</span>
                </p>
                <p className="text-gray-300 mb-8 text-lg">
                  Once it's full, it's closed forever.
                </p>
                <GradientButton asChild className="py-3 px-8 text-lg">
                  <a href="https://buy.stripe.com/7sY4gs8Ho4dfcC77lQgfu04" target="_blank" rel="noopener noreferrer">
                    Claim Your Spot
                  </a>
                </GradientButton>
            </div>
          </motion.div>
          </motion.div>

          </div>
          )}

        </div>
        </section>
      </main>
    </NavigationWrapper>
  )
} 