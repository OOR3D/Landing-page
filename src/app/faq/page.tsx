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
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-16">
                <HelpCircle className="w-12 h-12 text-blue-400" />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400 ${montserrat.className}`}
                >
                  Frequently Asked Questions
                </motion.h1>
              </div>

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
        </section>
      </main>
    </NavigationWrapper>
  )
} 