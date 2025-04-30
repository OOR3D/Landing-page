'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Youtube, Instagram } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-[#0a0c13] w-full">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top-right glow */}
        <div className="absolute -top-[30%] right-[10%] w-[45rem] h-[45rem] bg-red-500/10 rounded-full blur-[12rem] animate-pulse" />
        {/* Left-center glow */}
        <div className="absolute top-[30%] -left-[20%] w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[12rem] animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Bottom-right glow */}
        <div className="absolute bottom-[10%] right-[20%] w-[40rem] h-[40rem] bg-red-500/10 rounded-full blur-[12rem] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Center glow */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-orange-500/5 rounded-full blur-[14rem] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        {/* Main Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm"
        >
          <Link 
            href="/" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Home
          </Link>
          <Link 
            href="/policies" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Policy Hub
          </Link>
          <Link 
            href="/faq" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            FAQ
          </Link>
          <Link 
            href="/contact"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Contact
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          <Link
            href="/"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Home"
          >
            <Globe className="w-5 h-5" />
          </Link>
          <a
            href="https://twitter.com/outofreach3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="X (formerly Twitter)"
          >
            <XIcon />
          </a>
          <a
            href="https://www.youtube.com/@outofreach3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-7 -mt-1" />
          </a>
          <a
            href="https://discord.gg/oor3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>
          <a
            href="https://www.instagram.com/outofreach3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@outofreach3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 px-4 pb-4"
        >
          © {new Date().getFullYear()} OUTOFREACH™, Inc. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  )
} 