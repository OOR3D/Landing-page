'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Globe, Youtube, Instagram, Twitter } from "lucide-react"

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .593.057.87.168V9.28a6.34 6.34 0 0 0-1-.05A6.34 6.34 0 0 0 4 15.57a6.34 6.34 0 0 0 10.2 5A6.34 6.34 0 0 0 16 15.57V7.43a8.16 8.16 0 0 0 4.5 1.37V5.35a4.82 4.82 0 0 1-.91.34z" />
    </svg>
  )
}

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Home", href: "/" },
      { name: "Pricing", href: "https://app.outofreach3d.com/upgrades" },
      { name: "Open App", href: "https://app.outofreach3d.com" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "https://app.outofreach3d.com/help" },
      { name: "Resources", href: "https://app.outofreach3d.com/help/resources" },
      { name: "Contact", href: "https://discord.gg/oor3d" },
      { name: "Company", href: "https://app.outofreach3d.com/help/company" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "https://app.outofreach3d.com/help/policy/privacy-policy" },
      { name: "Terms of Service", href: "https://app.outofreach3d.com/help/policy/terms-of-service" },
      { name: "Refund Policy", href: "https://app.outofreach3d.com/help/policy/refund-policy" },
      { name: "License & Usage", href: "https://app.outofreach3d.com/help/policy/license-usage" },
    ]
  },
  {
    title: "Connect",
    links: [
      { name: "Discord", href: "https://discord.gg/oor3d", icon: <DiscordIcon /> },
      { name: "X (Twitter)", href: "https://twitter.com/outofreach3d", icon: <XIcon /> },
      { name: "YouTube", href: "https://www.youtube.com/@outofreach3d", icon: <Youtube className="w-5 h-5" /> },
      { name: "Instagram", href: "https://www.instagram.com/outofreach3d", icon: <Instagram className="w-5 h-5" /> },
      { name: "TikTok", href: "https://www.tiktok.com/@outofreach3d", icon: <TikTokIcon /> },
    ]
  }
]

export function Footer() {
  return (
    <footer className="w-full relative py-12 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto bg-[#0D0429]/90 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden relative">
        {/* Background Glow Effects - Contained within the box */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[30%] right-[10%] w-[35rem] h-[35rem] bg-[#FF4AE7]/[0.06] rounded-full blur-[10rem]" />
          <div className="absolute top-[30%] -left-[20%] w-[30rem] h-[30rem] bg-[#FE0101]/[0.04] rounded-full blur-[10rem]" />
          <div className="absolute bottom-[10%] right-[30%] w-[25rem] h-[25rem] bg-[#7877C6]/[0.03] rounded-full blur-[8rem]" />
        </div>

        <div className="px-8 py-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 max-w-5xl mx-auto">
              {footerLinks.map((column) => (
                <div key={column.title} className="flex flex-col gap-4 text-left">
                  <h3 className="font-semibold text-white tracking-wide">{column.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                          target={link.href.startsWith('http') ? "_blank" : undefined}
                          rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="flex flex-col items-center justify-center pt-10 border-t border-white/5 text-center">
              <Link href="/" className="mb-6 hover:opacity-80 transition-opacity relative w-[100px] h-[30px]">
                  <Image 
                      src="/OOR-LOGO.svg" 
                      alt="OOR3D Logo" 
                      fill
                      className="object-contain"
                  />
              </Link>
              
              <p className="text-gray-500 text-sm max-w-md mb-8">
                  We build the engine. You shape the virtual world.
              </p>

              <p className="text-xs text-gray-600">
                  © {new Date().getFullYear()} OUTOFREACH™, Inc. All rights reserved.
              </p>
              
              <div className="flex gap-6 mt-4 text-xs text-gray-600">
                  <Link href="https://app.outofreach3d.com/help/policy/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                  <Link href="https://app.outofreach3d.com/help/policy/terms-of-service" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
