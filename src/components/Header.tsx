"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { GradientButton } from "@/components/ui/gradient-button"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center">
        <header 
          className="relative overflow-hidden"
          style={{
            width: "50%",
            marginTop: "16px",
            borderRadius: "40px",
            background: "rgba(7, 9, 14, 0.6)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <div className="relative container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="w-[140px] flex items-center relative z-40 -ml-1">
                <Link 
                  href="/" 
                  className="relative w-[100px] h-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer"
                >
                  <Image
                    src="/OOR-LOGO.svg"
                    alt="OOR3D Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="100px"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden min-[1155px]:flex items-center justify-between flex-1">
                {/* Centered Nav Items */}
                <div className="flex-1 flex justify-center">
                  <nav className="flex items-center gap-6 relative z-40">
                    <Link
                      href="/"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      Home
                    </Link>
                    <Link
                      href="https://app.outofreach3d.com/upgrades"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/contact"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>

                {/* Login Button */}
                <div className="w-[140px] flex justify-end relative z-40">
                  <GradientButton asChild>
                    <Link href="https://auth.outofreach3d.com/login">
                      Login
                    </Link>
                  </GradientButton>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="min-[1155px]:hidden text-gray-400 hover:text-white hover:scale-110 transition-all duration-200 relative z-[60] p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Checkerboard pattern */}
            <div 
              className="absolute inset-0 mix-blend-soft-light"
              style={{
                opacity: 0.5,
                backgroundImage: `
                  linear-gradient(45deg, rgba(255, 240, 230, 0.05) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255, 240, 230, 0.05) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255, 240, 230, 0.05) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255, 240, 230, 0.05) 75%)
                `,
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
              }}
            />
          </div>
        </header>
      </div>

      {/* Mobile Navigation and Backdrop - Side Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-[45]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu - Side Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[300px] bg-[#0A0C13]/60 backdrop-blur-[12px] z-[50] flex flex-col shadow-2xl border-l border-white/10"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)' // Safari support
              }}
            >
              {/* Menu Items Container */}
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <div className="flex flex-col gap-6">
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="https://app.outofreach3d.com/upgrades"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-2">
                    <GradientButton asChild className="w-full">
                      <Link 
                        href="https://auth.outofreach3d.com/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </GradientButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 