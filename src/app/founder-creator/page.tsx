'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import NavigationWrapper from "@/components/NavigationWrapper"
import { GradientButton } from "@/components/ui/gradient-button"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function FounderCreator() {
  const router = useRouter()

  useEffect(() => {
    // Check if user has submitted early access form
    const hasSubmitted = localStorage.getItem("oor3d_early_access_submitted")

    if (!hasSubmitted || hasSubmitted !== "true") {
      // Redirect to early access page if they haven't submitted
      router.push('/early-access')
      return
    }
  }, [router])

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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m0 0h6" />
                  </svg>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-red-400 leading-[1.4] md:leading-[1.4] py-2 ${montserrat.className}`}
              >
                Become a Founding Creator
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Join the exclusive group of creators who are shaping the future of OOR3D from day one.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-orange-400 mb-12 font-medium"
              >
                $19 One-Time Investment — Limited Spots Available
              </motion.p>
            </div>

            {/* Benefits Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Lifetime Beta Access</h3>
                </div>
                <p className="text-gray-300">
                  Test every new feature before anyone else. Shape the future of OOR3D by providing feedback that directly influences our development roadmap.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Private Discord Access</h3>
                </div>
                <p className="text-gray-300">
                  Join our exclusive Founding Creator community. Connect with fellow creators, share insights, and have direct communication with the OOR3D team.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Early Feature Previews</h3>
                </div>
                <p className="text-gray-300">
                  Get exclusive access to upcoming features, tools, and content before the general release. Be the first to explore what's next.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Lifetime Recognition</h3>
                </div>
                <p className="text-gray-300">
                  Your name will be displayed as a Founding Creator in our hall of fame. Forever remembered as part of the movement that changed digital creation.
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl p-12 border border-orange-500/20 backdrop-blur-xl mb-8">
                <p className="text-gray-300 mb-8 text-lg">
                  Join the first creators who believed in OOR3D before it launched. <span className="font-semibold text-orange-400">Only $19</span> for lifetime access to everything above.
                </p>
                <GradientButton asChild className="py-3 px-8 text-lg">
                  <a href="https://buy.stripe.com/7sY4gs8Ho4dfcC77lQgfu04" target="_blank" rel="noopener noreferrer">
                    Become a Founding Creator
                  </a>
                </GradientButton>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="text-sm text-gray-400 italic"
              >
                Your support helps us build OOR3D™ for creators everywhere.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </NavigationWrapper>
  )
}
