'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import NavigationWrapper from "@/components/NavigationWrapper"
import { GradientButton } from "@/components/ui/gradient-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function FounderCreatorSuccess() {
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
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 leading-[1.4] md:leading-[1.4] py-2 ${montserrat.className}`}
              >
                Welcome to the Founders Circle.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                You're now part of the first group of creators who believed in OOR3D before it even launched.
                Your commitment to this means everything to us.
              </motion.p>
            </div>

            {/* Content Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Early Access Granted</h3>
                </div>
                <p className="text-gray-300">
                  You've been added to our exclusive early access list. We'll notify you as soon as OOR3D™ is ready for you.
                </p>
              </motion.div>
            </div>

            {/* Contact Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="max-w-4xl mx-auto mb-16 text-center"
            >
              <p className="text-lg text-red-300/90 font-medium">
                We'll be contacting you within the next couple of days.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-8">
                <GradientButton asChild>
                  <Link href="https://discord.gg/oor3d" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      Join Our Discord
                    </div>
                  </Link>
                </GradientButton>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-sm text-gray-400"
              >
                We'll be in touch soon with updates on OOR3D™ development.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </NavigationWrapper>
  )
}
