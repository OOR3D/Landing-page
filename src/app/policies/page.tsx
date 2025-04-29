"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import Link from 'next/link'
import NavigationWrapper from "@/components/NavigationWrapper"
import { Shield, FileText, RotateCcw } from 'lucide-react'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function PoliciesPage() {
  const policies = [
    {
      title: "Privacy Policy",
      description: "Learn how we collect, use, and protect your personal information.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      href: "/policies/privacy"
    },
    {
      title: "Terms of Service",
      description: "Understand the rules and guidelines for using our services.",
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      href: "/policies/tos"
    },
    {
      title: "Refund Policy",
      description: "Find out about our refund process and eligibility criteria.",
      icon: <RotateCcw className="w-8 h-8 text-amber-400" />,
      href: "/policies/refund"
    }
  ]

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white">
        <section className="relative min-h-screen py-40 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`text-5xl md:text-7xl font-extrabold mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} text-center leading-relaxed`}
              >
                Policy Hub
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-16 text-center"
              >
                Everything you need to know about our policies and terms.
              </motion.p>

              <div className="grid gap-8 md:grid-cols-3">
                {policies.map((policy, index) => (
                  <motion.div
                    key={policy.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  >
                    <Link href={policy.href}>
                      <div className="bg-[#0A0C13]/40 p-8 rounded-2xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 group hover:-translate-y-2">
                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                          {policy.icon}
                        </div>
                        <h2 className="text-xl font-semibold mb-4">{policy.title}</h2>
                        <p className="text-gray-400">
                          {policy.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
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