"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import NavigationWrapper from "@/components/NavigationWrapper"
import { HelpCircle } from 'lucide-react'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function FAQPage() {
  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <HelpCircle className="w-10 h-10 text-blue-400" />
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400 ${montserrat.className}`}
              >
                Frequently Asked Questions
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none [&>h2]:font-extrabold [&>h2]:text-2xl [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:font-bold [&>h3]:text-xl [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:mb-6"
            >
              <h2>What is OOR3D?</h2>
              <p>
                We're a meshing studio focused on creating 3D products for virtual worlds. Now, we're building a platform to make creating in those spaces seamless, fast, and intuitive — starting with IMVU.
              </p>

              <h2>When does this platform release?</h2>
              <p>
                OOR3D is set to launch in 2025. We're building in public, so you'll get sneak peeks, early access, and chances to shape it along the way.
              </p>

              <h2>Do I need to be a pro to join/participate/create?</h2>
              <p>
                Not at all. 🎨 All skill levels are welcome. Whether you're just starting or a pro creator, this is your space to learn, collaborate, and grow — with early access to what we're building.
              </p>

              <h2>Do you do customs?</h2>
              <p>
                Not at the moment — but we run contests where custom meshes are part of the prize pool. Stay tuned!
              </p>

              <h2>Can I make requests?</h2>
              <p>
                Yes, drop your ideas in our{' '}
                <a 
                  href="https://discord.gg/oor3d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  discord server
                </a>. 
                We review community input regularly, though we can't guarantee every request will be made.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </NavigationWrapper>
  )
} 