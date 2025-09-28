"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import NavigationWrapper from "@/components/NavigationWrapper"
import { MessageSquare } from 'lucide-react'
import { GradientButton } from "@/components/ui/gradient-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function ContactPage() {
  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white">
        <div className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className={`text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}>
                Get in Touch
              </h1>

              <p className="text-xl text-gray-300 mb-12 text-center">
                Have questions? We're here to help however we can.
              </p>

              <div className="max-w-md mx-auto">
                {/* Discord Community */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-[#0A0C13]/40 p-8 rounded-2xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 relative z-[1]"
                >
                  <MessageSquare className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
                  <h2 className="text-xl font-semibold mb-4">Get real-time support</h2>
                  <p className="text-gray-400 mb-4">
                    Join our Discord community today.
                  </p>
                  <GradientButton
                    size="lg"
                    className="w-full min-h-[48px] relative z-[2]"
                    asChild
                  >
                    <Link href="https://discord.gg/oor3d" target="_blank" className="py-3">
                      💬 Join Discord Community
                    </Link>
                  </GradientButton>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0A0C13]/80 to-[#0A0C13] -z-[1]" />
        </div>
      </main>
    </NavigationWrapper>
  )
} 