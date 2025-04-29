"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import NavigationWrapper from "@/components/NavigationWrapper"
import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function TermsPage() {
  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
              <FileText className="w-12 h-12 text-orange-400" />
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} leading-relaxed`}
              >
                Terms of Service
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
                Welcome to OOR3D. These Terms of Service govern your access to and use of the OOR3D platform and services. By using OOR3D, you agree to these Terms.
              </p>
              <p>
                For questions, contact:{' '}
                <a href="mailto:support@outofreach3d.com" className="text-red-400 hover:text-red-300">
                  support@outofreach3d.com
                </a>
              </p>

              <h2>1. Definitions</h2>
              <ul>
                <li><strong>Platform:</strong> The OOR3D platform, tools, services, and digital assets.</li>
                <li><strong>User:</strong> Any individual or entity accessing OOR3D.</li>
                <li><strong>Ocoins:</strong> The virtual currency used within OOR3D.</li>
                <li><strong>License:</strong> The limited right granted to use and modify digital assets.</li>
                <li><strong>Content:</strong> All assets, files, and resources available through OOR3D.</li>
              </ul>

              <h2>2. Account Registration & Eligibility</h2>
              <ul>
                <li>Must be at least 13 years old to create an account.</li>
                <li>Under 18 users require guardian consent.</li>
                <li>You are responsible for securing your account and activities.</li>
                <li>We reserve the right to suspend accounts for violations.</li>
              </ul>

              <h2>3. Ocoins & Payment</h2>
              <ul>
                <li>Ocoins are non-refundable and not convertible to real-world currency.</li>
                <li>Subscription plans provide monthly Ocoin allowances.</li>
                <li>Additional Ocoins can be purchased separately.</li>
                <li>Ocoins expire upon account termination due to Terms violations.</li>
              </ul>

              <h2>4. Licensing & Content Usage</h2>
              <ul>
                <li>You receive a limited, non-exclusive, non-transferable license to use digital assets within approved use cases.</li>
                <li>You may not claim ownership over original assets.</li>
                <li>Redistribution, resale, or use outside licensed scope is prohibited.</li>
                <li>Violations may result in account termination and legal action.</li>
              </ul>

              <h2>5. Prohibited Conduct</h2>
              <p>Users may not:</p>
              <ul>
                <li>Create or distribute harmful, illegal, or infringing content.</li>
                <li>Tamper with platform security.</li>
                <li>Use automation, bots, or scraping systems.</li>
                <li>File fraudulent copyright claims.</li>
                <li>Disrupt OOR3D's services or operations.</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>All content, tools, and resources provided by OOR3D remain OOR3D's property. Unauthorized reproduction, distribution, or use is prohibited.</p>

              <h2>7. Platform Compatibility & Trademark Notice</h2>
              <p>OOR3D is an independent creation platform.</p>
              <p>While OOR3D outputs may be compatible with third-party environments like IMVU, Second Life, Sims, and GTA, OOR3D is not affiliated with or endorsed by these platforms.</p>
              <p>All names and logos are property of their respective owners.</p>

              <h2>8. Account Termination</h2>
              <p>We may suspend or terminate accounts for:</p>
              <ul>
                <li>Terms violations</li>
                <li>Fraudulent activities</li>
                <li>IP infringement</li>
                <li>Platform abuse</li>
              </ul>
              <p>Terminated accounts forfeit all Ocoins and access to purchased assets.</p>

              <h2>9. Modifications to Terms</h2>
              <p>We may update these Terms at any time.</p>
              <p>Continued use of OOR3D after updates means acceptance of the revised Terms.</p>

              <h2>10. Limitation of Liability</h2>
              <p>OOR3D is provided "as is" without warranties.</p>
              <p>We are not liable for damages arising from the use or inability to use the platform.</p>

              <h2>11. Governing Law</h2>
              <p>These Terms are governed by Canadian law.</p>
              <p>Disputes will be resolved under Canadian jurisdiction.</p>

              <h2>12. Contact</h2>
              <p>
                <a href="mailto:support@outofreach3d.com" className="text-red-400 hover:text-red-300">
                  support@outofreach3d.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </NavigationWrapper>
  )
} 