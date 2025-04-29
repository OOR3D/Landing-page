"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import LoadingScreen from '@/components/LoadingScreen'
import { fadeIn, scaleUp } from '@/lib/animations'
import NavigationWrapper from "@/components/NavigationWrapper"
import Image from 'next/image'
import PrelaunchMission from '@/components/PrelaunchMission'
import FAQSection from '@/components/FAQSection'
import { HelpCircle } from 'lucide-react'
import NoDownloadsRequired from '@/components/NoDownloadsRequired'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function HomePage() {
  const [showContent, setShowContent] = useState(true) // Default to true to avoid flash

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore')
    
    if (!hasVisited) {
      // If first visit, show loading screen and set flag
      setShowContent(false)
      const timer = setTimeout(() => {
        setShowContent(true)
        localStorage.setItem('hasVisitedBefore', 'true')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!showContent) {
    return <LoadingScreen />
  }

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white [&_*]:cursor-none">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full text-sm font-semibold text-orange-400 border border-orange-500/20">
                PRELAUNCH
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`text-5xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} pb-2`}
            >
              Create, Customize, and Launch Virtual Products — Effortlessly.
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              custom={1}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              OOR3D™ is redefining how 3D content is created for virtual worlds. We're building a new generation of tools that empower creators to design, customize, and launch digital assets across platforms like IMVU, Second Life, Sims 4, and more — without the traditional barriers of 3D production.
            </motion.h2>

            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-4"
            >
              <GradientButton
                size="lg"
                asChild
              >
                <Link href="/early-access">
                  Get Early Access
                </Link>
              </GradientButton>
              
              <motion.p
                variants={fadeIn}
                custom={2}
                initial="hidden"
                animate="visible"
                className="text-sm text-gray-400"
              >
                Join the creators shaping the future of the virtual economy.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0A0C13]/80 to-[#0A0C13]" />
        </section>

        {/* Trust Bar Section */}
        <section className="relative bg-[#0A0C13] py-20">
          <motion.div
            variants={fadeIn}
            custom={3}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-white">
                Trusted by Industry Innovators
              </h2>
            </div>

            {/* Infinite scroll container */}
            <div className="relative flex justify-center overflow-hidden">
              <div className="max-w-4xl relative mx-auto w-full">
                {/* Gradient masks for scroll effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0C13] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0C13] to-transparent z-10" />
                
                <div className="flex justify-center overflow-hidden whitespace-nowrap py-4">
                  <motion.div 
                    className="flex items-center gap-20 px-20"
                    animate={{
                      x: [0, -1640],
                    }}
                    transition={{
                      duration: 30,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {[0, 1, 2].map((set) => (
                      <div key={set} className="flex items-center gap-20">
                        <div className="flex items-center justify-center w-40 h-20 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/logos/nvidia.svg"
                            alt="NVIDIA"
                            width={120}
                            height={60}
                            className="object-contain invert brightness-0"
                          />
                        </div>
                        <div className="flex items-center justify-center w-40 h-20 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/logos/unity.svg"
                            alt="Unity"
                            width={120}
                            height={60}
                            className="object-contain invert brightness-0"
                          />
                        </div>
                        <div className="flex items-center justify-center w-40 h-20 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/logos/epic.svg"
                            alt="Epic Games"
                            width={120}
                            height={60}
                            className="object-contain invert brightness-0"
                          />
                        </div>
                        <div className="flex items-center justify-center w-40 h-20 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/logos/aws.svg"
                            alt="AWS"
                            width={120}
                            height={60}
                            className="object-contain invert brightness-0"
                          />
                        </div>
                        <div className="flex items-center justify-center w-40 h-20 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/logos/meta.svg"
                            alt="Meta"
                            width={120}
                            height={60}
                            className="object-contain invert brightness-0"
                          />
                        </div>
                        <div className="flex items-center justify-center w-40 h-20 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src="/logos/adobe.svg"
                            alt="Adobe"
                            width={120}
                            height={60}
                            className="object-contain invert brightness-0"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* No Downloads Required Section */}
        <NoDownloadsRequired />

        {/* Prelaunch Mission Section */}
        <PrelaunchMission />

        {/* FAQ Section */}
        <FAQSection />

        {/* Rest of the content */}
      </main>
    </NavigationWrapper>
  );
}