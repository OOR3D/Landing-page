'use client'

import Link from "next/link"
import { Globe, Youtube, Instagram } from "lucide-react"

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
    <footer className="border-t border-gray-800/50 bg-[#0a0c13]">
      <div className="container mx-auto px-4 py-8">
        {/* Main Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link 
            href="/" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Home
          </Link>
          <Link 
            href="/privacy-policy" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-of-service" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Terms of Service
          </Link>
          <a 
            href="mailto:support@oor3d.com"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.outofreach3d.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
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
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OUTOFREACH, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 