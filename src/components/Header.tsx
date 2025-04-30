"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

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

  // Tighter scroll threshold for more immediate response
  const scrollThreshold = [0, 50]

  // Unified transition config for smoother animation
  const transitionConfig = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
    stiffness: 100,
    damping: 30
  }

  const scrollValues = {
    initial: {
      width: "100%",
      margin: "0px",
      radius: "0px",
      background: "rgba(10, 12, 19, 0)",
      blur: "blur(0px)",
      border: "1px solid transparent",
      translate: "0px",
      pattern: 0
    },
    final: {
      width: "50%",
      margin: "16px",
      radius: "40px",
      background: "rgba(7, 9, 14, 0.6)",
      blur: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      translate: "0px",
      pattern: 0.5
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > scrollThreshold[0]
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled)
    }
  })
  
  const headerWidth = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.width, scrollValues.final.width]
  )

  const headerMargin = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.margin, scrollValues.final.margin]
  )

  const headerRadius = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.radius, scrollValues.final.radius]
  )

  const headerBackground = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.background, scrollValues.final.background]
  )

  const headerBackdropBlur = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.blur, scrollValues.final.blur]
  )

  const headerBorder = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.border, scrollValues.final.border]
  )

  const logoTranslateX = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.translate, scrollValues.final.translate]
  )

  const earlyAccessTranslateX = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.translate, `-${scrollValues.final.translate}`]
  )

  const patternOpacity = useTransform(
    scrollY,
    scrollThreshold,
    [scrollValues.initial.pattern, scrollValues.final.pattern]
  )

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center">
        <motion.header 
          className="w-full relative overflow-hidden"
          style={{
            width: headerWidth,
            marginTop: headerMargin,
            borderRadius: headerRadius,
            background: headerBackground,
            backdropFilter: headerBackdropBlur,
            border: headerBorder,
            transition: `all ${transitionConfig.duration}s cubic-bezier(${transitionConfig.ease.join(',')})`
          }}
        >
          <div className="relative container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Single Logo with animation */}
              <motion.div 
                style={{ 
                  x: logoTranslateX,
                  transition: `all ${transitionConfig.duration}s cubic-bezier(${transitionConfig.ease.join(',')})`
                }}
                className="w-[140px] flex items-center relative z-40 -ml-1"
              >
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
              </motion.div>

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
                      href="/events/contest"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      Events
                    </Link>
                    <Link
                      href="https://experience.outofreach3d.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      Experience
                    </Link>
                    <Link 
                      href="/contact"
                      className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>

                {/* Early Access Button */}
                <motion.div
                  style={{ 
                    x: earlyAccessTranslateX,
                    transition: `all ${transitionConfig.duration}s cubic-bezier(${transitionConfig.ease.join(',')})`
                  }}
                  className="w-[140px] flex justify-end relative z-40"
                >
                  <GradientButton asChild>
                    <Link href="/early-access">
                      Early Access
                    </Link>
                  </GradientButton>
                </motion.div>
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
            <motion.div 
              className="absolute inset-0 mix-blend-soft-light"
              style={{
                opacity: patternOpacity,
                backgroundImage: `
                  linear-gradient(45deg, rgba(255, 240, 230, 0.05) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255, 240, 230, 0.05) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255, 240, 230, 0.05) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255, 240, 230, 0.05) 75%)
                `,
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
                transition: `all ${transitionConfig.duration}s cubic-bezier(${transitionConfig.ease.join(',')})`
              }}
            />
          </div>
        </motion.header>
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
                    href="/events/contest"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                  <Link
                    href="https://experience.outofreach3d.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Experience
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
                        href="/early-access"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Early Access
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