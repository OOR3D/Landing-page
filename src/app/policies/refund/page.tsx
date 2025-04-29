"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import NavigationWrapper from "@/components/NavigationWrapper"
import { RotateCcw, ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function RefundPolicyPage() {
  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white">
        <div className="container mx-auto px-4 py-40">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Link 
                href="/policies"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Policies
              </Link>
            </motion.div>

            <div className="flex items-center justify-start gap-4 mb-16">
              <Shield className="w-12 h-12 text-red-400" />
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} leading-[1.4] md:leading-[1.4] py-2`}
              >
                Refund Policy
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none [&>h2]:font-extrabold [&>h2]:text-2xl [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:font-bold [&>h3]:text-xl [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:mb-6"
            >
              <p className="text-gray-400">Effective Date: March 25, 2025</p>
              <p className="text-gray-400">Last Updated: March 25, 2025</p>
              
              <p>
                At OOR3D, we aim to deliver a quality experience. Due to the nature of digital products, all purchases are final and non-refundable.
              </p>

              <p>
                For questions, contact:{' '}
                <a href="mailto:support@outofreach3d.com" className="text-red-400 hover:text-red-300">
                  support@outofreach3d.com
                </a>
              </p>

              <h2>1. No Refunds on Digital Products</h2>
              <p>All sales of:</p>
              <ul>
                <li>Subscription fees</li>
                <li>Ocoin purchases</li>
                <li>Mesh exports, remixes, and digital assets</li>
                <li>One-time feature usages</li>
              </ul>
              <p>are final and non-refundable.</p>

              <h2>2. Subscription Cancellation</h2>
              <p>You may cancel anytime.</p>
              <p>Cancellation stops future charges but does not refund the current billing cycle.</p>

              <h2>3. Unauthorized Transactions</h2>
              <p>If you suspect unauthorized charges:</p>
              <ul>
                <li>Contact us within 7 days of the transaction at support@outofreach3d.com</li>
                <li>Provide relevant account and billing details</li>
              </ul>
              <p>We will investigate and determine eligibility for a refund at our discretion.</p>

              <h2>4. Service Disruptions & Exceptions</h2>
              <p>Refunds may be considered if:</p>
              <ul>
                <li>A major technical failure prevents feature usage</li>
                <li>Duplicate charges occur due to billing errors</li>
              </ul>
              <p>All refund requests must be submitted within 7 days of the issue.</p>

              <h2>5. Chargebacks & Account Suspension</h2>
              <p>Filing a chargeback without contacting support may result in account suspension or permanent banning from OOR3D.</p>

              <h2>6. Policy Updates</h2>
              <p>We may revise this Refund Policy at any time.</p>
              <p>Continued use of the platform after updates means acceptance of the new terms.</p>
            </motion.div>
          </div>
        </div>
      </main>
    </NavigationWrapper>
  )
} 