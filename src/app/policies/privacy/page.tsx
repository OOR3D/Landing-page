"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import NavigationWrapper from "@/components/NavigationWrapper"
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function PrivacyPolicyPage() {
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
                Back to Policy Hub
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
                Privacy Policy
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
                At OUTOFREACH3D™, your privacy matters. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
              </p>

              <p>
                For any questions, contact us at:{' '}
                <a href="mailto:support@outofreach3d.com" className="text-red-400 hover:text-red-300">
                  support@outofreach3d.com
                </a>
              </p>

              <h2>1. Information We Collect</h2>
              <h3>1.1 Information You Provide</h3>
              <ul>
                <li>- <strong>Account Information</strong>: Email address, username. Passwords are encrypted and securely stored.</li>
                <li>- <strong>Billing Information</strong>: Payment details (processed through Stripe), billing address, and transaction history.</li>
                <li>- <strong>User Content</strong>: Files, assets, or modifications you upload or create using OOR3D™ tools.</li>
                <li>- <strong>Support Requests</strong>: Messages and contact information when you reach out for assistance.</li>
              </ul>

              <h3>1.2 Information We Collect Automatically</h3>
              <ul>
                <li>- <strong>Usage Data</strong>: Interactions with features, session duration, and logs.</li>
                <li>- <strong>Device & Technical Data</strong>: IP address, browser, device type, operating system.</li>
                <li>- <strong>Cookies & Tracking</strong>: We use cookies and similar technologies to improve functionality and user experience.</li>
              </ul>

              <h3>1.3 Information from Third Parties</h3>
              <ul>
                <li>- <strong>Payment Processors</strong>: We use Stripe to securely handle payment information. We don't store or process card details directly.</li>
                <li>- <strong>Analytics Providers</strong>: We use tools like Google Analytics to understand how people use the site and improve performance. These tools may use cookies or similar technologies to collect non-personal data like page views, device info, and time spent on the site.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use collected data to:</p>
              <ul>
                <li>- Provide, maintain, and improve the OOR3D™ platform.</li>
                <li>- Manage accounts and transactions.</li>
                <li>- Secure the platform and prevent unauthorized access.</li>
                <li>- Communicate important updates, offers, and support information.</li>
                <li>- Comply with legal obligations.</li>
              </ul>

              <h2>3. How We Share Your Information</h2>
              <p>We do not sell or rent your personal information.</p>
              <p>We may share it:</p>
              <ul>
                <li>- With service providers (e.g., Stripe, AWS, analytics services).</li>
                <li>- If required by law or to protect rights and safety.</li>
                <li>- During business transfers such as mergers or acquisitions.</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement industry-standard measures, including:</p>
              <ul>
                <li>- Encryption for sensitive data like passwords.</li>
                <li>- Secure account authentication.</li>
                <li>- Restricted internal access to personal data.</li>
              </ul>
              <p>While we take security seriously, no platform can guarantee absolute security. Protect your account credentials.</p>

              <h2>5. Your Rights & Choices</h2>
              <p>Depending on your location, you may have rights to:</p>
              <ul>
                <li>- Access your data</li>
                <li>- Correct inaccuracies</li>
                <li>- Request deletion</li>
                <li>- Opt out of marketing communications</li>
                <li>- Limit certain processing activities</li>
              </ul>

              <h2>6. Data Retention</h2>
              <p>We retain data as needed to:</p>
              <ul>
                <li>- Provide services</li>
                <li>- Fulfill legal obligations</li>
                <li>- Maintain financial records</li>
              </ul>
              <p>Upon account termination, your data may be deleted or anonymized unless otherwise required by law.</p>

              <h2>7. Third-Party Links</h2>
              <p>OOR3D™ may link to external services. We are not responsible for the privacy practices of those services.</p>

              <h2>8. International Users</h2>
              <p>OOR3D™ operates from Canada. By using our services, you agree to data transfers governed by Canadian law.</p>

              <h2>9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically.</p>
              <p>Continued use of OOR3D™ after updates means you accept the changes.</p>

              <h2>10. Contact</h2>
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