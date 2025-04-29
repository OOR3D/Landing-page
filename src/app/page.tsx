"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import { fadeIn, scaleUp } from '@/lib/animations'
import NavigationWrapper from "@/components/NavigationWrapper"
import Image from 'next/image'
import PrelaunchMission from '@/components/PrelaunchMission'

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
        <CustomCursor />
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10 text-center">
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
              OOR3D is pioneering the next generation of 3D creation software for virtual worlds. We're building the systems that empower creators to design, customize, and launch digital assets across platforms like IMVU — without the traditional barriers of 3D production.
            </motion.h2>

            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 rounded-full"
                asChild
              >
                <Link href="/early-access">
                  Get Early Access
                </Link>
              </Button>
              
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
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0A0C13]/80 to-[#0A0C13]" />
        </section>

        {/* Trust Bar Section */}
        <section className="relative overflow-hidden bg-[#0A0C13]">
          {/* Gradient masks for scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0C13] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0C13] to-transparent z-10" />
          
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Trusted by Industry Innovators
            </h2>
          </div>

          {/* Infinite scroll container */}
          <div className="flex justify-center overflow-hidden whitespace-nowrap">
            <motion.div
              className="flex gap-20 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }
              }}
            >
              {[1, 2].map((set) => (
                <>
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
                </>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Prelaunch Mission Section */}
        <PrelaunchMission />

        {/* Rest of the content */}
      </main>
    </NavigationWrapper>
  );
}