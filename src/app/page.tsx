"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import { fadeIn, scaleUp } from '@/lib/animations'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function HomePage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show loading screen for 2 seconds before displaying content
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!showContent) {
    return <LoadingScreen />
  }

  return (
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
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`text-5xl md:text-7xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
          >
            Build, Customize, and Launch Virtual Products — Effortlessly.
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
    </main>
  );
}