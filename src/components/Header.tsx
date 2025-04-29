"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Single scroll threshold for all animations
  const scrollThreshold = [0, 100]
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
      width: "65%",
      margin: "16px",
      radius: "40px",
      background: "rgba(10, 12, 19, 0.8)",
      blur: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      translate: "40px",
      pattern: 0.05
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > scrollThreshold[0])
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
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.header 
        className="w-full pointer-events-auto"
        style={{
          width: headerWidth,
          marginTop: headerMargin,
          borderRadius: headerRadius,
          background: headerBackground,
          backdropFilter: headerBackdropBlur,
          border: headerBorder,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' // Smoother easing
        }}
      >
        {/* Checkered background */}
        <motion.div 
          className="absolute inset-0 rounded-[inherit]"
          style={{
            opacity: patternOpacity,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' // Match header transition
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <motion.div 
              style={{ 
                x: logoTranslateX,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="relative flex items-center"
            >
              <Link 
                href="/" 
                className="relative w-[100px] h-[30px] hover:scale-110 transition-transform duration-200"
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
            <div className="hidden md:flex items-center justify-between flex-1 pl-20">
              {/* Centered Nav Items */}
              <div className="flex-1" /> {/* Spacer */}
              <nav className="flex items-center gap-8">
                <Link 
                  href="/events/contest"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  Creator Contest
                </Link>
                <Link 
                  href="/experience"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  Experience
                </Link>
                <Link 
                  href="/contact"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  Contact
                </Link>
              </nav>
              <div className="flex-1" /> {/* Spacer */}
              
              {/* Early Access Button with animation */}
              <motion.div 
                style={{ 
                  x: earlyAccessTranslateX,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' // Match header transition
                }}
              >
                <Link 
                  href="/early-access"
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-full transition-all duration-200 hover:scale-110 ml-8"
                >
                  Early Access
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.nav
            initial={false}
            animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'mb-4' : ''}`}
          >
            <div className="flex flex-col gap-4 py-4">
              <Link 
                href="/early-access"
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-full text-center transition-all duration-200 hover:scale-110"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Early Access
              </Link>
              <Link 
                href="/events/contest"
                className="text-gray-400 hover:text-white text-center py-2 transition-all duration-200 hover:scale-110"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Creator Contest
              </Link>
              <Link 
                href="/experience"
                className="text-gray-400 hover:text-white text-center py-2 transition-all duration-200 hover:scale-110"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="/contact"
                className="text-gray-400 hover:text-white text-center py-2 transition-all duration-200 hover:scale-110"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        </div>
      </motion.header>
    </div>
  )
} 