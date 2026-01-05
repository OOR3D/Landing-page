"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const colors = {
  borderHighlight: 'rgba(255, 255, 255, 0.15)',
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      draggable={false}
      className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors hover:bg-white/5 rounded-full"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) {
  return (
    <Link
      href={href}
      draggable={false}
      onClick={onClick}
      className="px-4 py-3 text-base font-medium text-white/80 hover:text-white transition-colors hover:bg-white/5 rounded-xl"
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    // Attempt to scroll multiple targets
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.body.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.scrollTo({ top: 0, behavior: 'instant' })
    
    // Also try finding a scrolling container if main scroll doesn't work
    const scrollableDivs = document.querySelectorAll('div, main, section')
    scrollableDivs.forEach(div => {
      if (div.scrollTop > 0) {
        div.scrollTop = 0
      }
    })
  }

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4">
      {/* Container for header and dropdown to share same width */}
      <div className="flex flex-col items-stretch">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-1 pl-6 pr-2 py-2 rounded-full shadow-2xl shadow-black/20 pointer-events-auto"
          style={{ 
            backgroundColor: 'rgba(8, 2, 26, 0.6)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${colors.borderHighlight}`,
            boxShadow: '0 0 0 1px rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.4)'
          }}
        >
          <button 
            type="button"
            onClick={scrollToTop} 
            className="mr-6 opacity-90 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0"
          >
            <img src="https://assets.oor3d.com/logo/OOR-allwhite.svg" alt="OOR3D" width={40} height={12} draggable={false} className="brightness-0 invert" />
          </button>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 mr-2">
            <NavLink href="https://app.outofreach3d.com/upgrades">Pricing</NavLink>
            <NavLink href="https://app.outofreach3d.com/help/faq/general">FAQ</NavLink>
            <NavLink href="https://auth.outofreach3d.com/login">Login</NavLink>
          </div>
          
          {/* Desktop CTA */}
          <Link href="https://auth.outofreach3d.com/signup" draggable={false} className="hidden md:block">
            <Button variant="red" size="sm" className="rounded-full">
              Get Started
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          {/* Mobile CTA - Always visible on mobile */}
          <Link href="https://auth.outofreach3d.com/signup" draggable={false} className="md:hidden">
            <Button variant="red" size="sm" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </motion.div>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl overflow-hidden pointer-events-auto w-full"
              style={{ 
                backgroundColor: 'rgba(8, 2, 26, 0.95)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${colors.borderHighlight}`,
                boxShadow: '0 8px 40px rgba(0,0,0,0.5)'
              }}
            >
              <div className="flex flex-col p-2">
                <MobileNavLink href="https://app.outofreach3d.com/upgrades" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>
                <MobileNavLink href="https://app.outofreach3d.com/help/faq/general" onClick={() => setMobileMenuOpen(false)}>FAQ</MobileNavLink>
                <MobileNavLink href="https://auth.outofreach3d.com/login" onClick={() => setMobileMenuOpen(false)}>Login</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

