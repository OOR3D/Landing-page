"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import NavigationWrapper from "@/components/NavigationWrapper"
import { Mail, MessageSquare } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function ContactPage() {
  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`text-5xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
              >
                Get in Touch
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-12"
              >
                Have questions? We're here to help you create amazing virtual products.
              </motion.p>

              <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
                {/* Email Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-[#0A0C13]/40 p-8 rounded-2xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-red-400 mb-4 mx-auto" />
                  <h2 className="text-xl font-semibold mb-4">Email Us</h2>
                  <p className="text-gray-400 mb-4">
                    Send us your questions or feedback anytime.
                  </p>
                  <Link
                    href="mailto:support@outofreach3d.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    support@outofreach3d.com
                  </Link>
                </motion.div>

                {/* Discord Community */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-[#0A0C13]/40 p-8 rounded-2xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <MessageSquare className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
                  <h2 className="text-xl font-semibold mb-4">Join Our Discord</h2>
                  <p className="text-gray-400 mb-4">
                    Connect with our community and get real-time support.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 rounded-full w-full"
                    asChild
                  >
                    <Link href="https://discord.gg/oor3d" target="_blank">
                      Join Discord Community
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Enhanced bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0A0C13]/80 to-[#0A0C13]" />
        </section>
      </main>
    </NavigationWrapper>
  )
} 