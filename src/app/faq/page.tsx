"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { HelpCircle } from 'lucide-react'
import NavigationWrapper from "@/components/NavigationWrapper"
import FAQAccordion from '@/components/shared/FAQAccordion'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function FAQPage() {
  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white">
        <section className="relative py-32">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <HelpCircle className="w-12 h-12 text-red-400" />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
                >
                  Frequently Asked Questions
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg"
              >
                Answers to the most common questions about early access, tools, and getting started.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <FAQAccordion showAll />
              </motion.div>
            </div>
          </div>

          {/* Enhanced bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0A0C13]/80 to-[#0A0C13]" />
        </section>
      </main>
    </NavigationWrapper>
  )
} 