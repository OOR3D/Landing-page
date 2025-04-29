"use client"

import * as React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import { HelpCircle, ChevronDown } from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

const faqs = [
  {
    question: "What is OOR3D?",
    answer: "We're a meshing studio focused on creating 3D products for virtual worlds. Now, we're building a platform to make creating in those spaces seamless, fast, and intuitive — starting with IMVU."
  },
  {
    question: "When does this platform release?",
    answer: "OOR3D is set to launch in 2025. We're building in public, so you'll get sneak peeks, early access, and chances to shape it along the way."
  },
  {
    question: "Do I need to be a pro to join/participate/create?",
    answer: "Not at all. 🎨 All skill levels are welcome. Whether you're just starting or a pro creator, this is your space to learn, collaborate, and grow — with early access to what we're building."
  }
]

export default function FAQSection() {
  return (
    <section className="relative py-24 bg-[#0A0C13]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <HelpCircle className="w-10 h-10 text-blue-400" />
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400 ${montserrat.className}`}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <Accordion.Root
              type="single"
              collapsible
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#0A0C13]/40 rounded-2xl border border-gray-800/50 overflow-hidden"
                >
                  <Accordion.Trigger className="flex items-center justify-between w-full p-8 text-left hover:bg-white/5 transition-colors">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="p-8 pt-0 text-gray-300">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <Link 
              href="/faq"
              className="block text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 rounded-full"
              >
                View All FAQs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 