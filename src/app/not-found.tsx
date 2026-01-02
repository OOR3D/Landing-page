'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { ArrowRight, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

// Brand colors
const colors = {
  bgPrimary: '#0D0429',
  bgSecondary: '#251D3E',
  accent: '#FE0101',
  gradientFrom: '#FF4AE7',
  gradientTo: '#FE0101',
  borderHighlight: 'rgba(255, 255, 255, 0.15)',
}

// Nebula background
const nebulaBackground = `
  radial-gradient(circle at 15% 50%, rgba(120, 119, 198, 0.08) 0%, transparent 25%),
  radial-gradient(circle at 85% 30%, rgba(255, 74, 231, 0.08) 0%, transparent 25%),
  linear-gradient(180deg, #0D0429 0%, #08021a 100%)
`

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors hover:bg-white/5 rounded-full"
    >
      {children}
    </Link>
  )
}

function FloatingAsset({ 
  src, 
  className, 
  delay,
  targetBlur = 0,
  targetOpacity = 1 
}: { 
  src: string, 
  className: string, 
  delay: number,
  targetBlur?: number,
  targetOpacity?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
      animate={{ opacity: targetOpacity, scale: 1, filter: `blur(${targetBlur}px)` }}
      transition={{ 
        duration: 1.2, 
        delay: delay * 0.2,
        ease: "easeOut" 
      }}
      className={`${className} pointer-events-none`}
    >
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 bg-[#FE0101]/20 blur-2xl rounded-full transform scale-75" />
        <Image 
          src={src} 
          alt="3D Asset" 
          fill 
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  )
}

export default function NotFound() {
  return (
    <div 
      className={`min-h-screen text-white selection:bg-[#FE0101]/30 selection:text-white ${montserrat.variable} flex flex-col`}
      style={{ 
        background: nebulaBackground,
        backgroundColor: colors.bgPrimary,
      }}
    >
      {/* Noise Overlay for Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-1 pl-6 pr-2 py-2 rounded-full shadow-2xl shadow-black/20"
          style={{ 
            backgroundColor: 'rgba(8, 2, 26, 0.6)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${colors.borderHighlight}`,
            boxShadow: '0 0 0 1px rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.4)'
          }}
        >
          <Link href="/" className="mr-6 opacity-90 hover:opacity-100 transition-opacity">
            <Image src="/OOR-LOGO.svg" alt="OOR3D" width={40} height={12} className="brightness-0 invert" />
          </Link>
          
          <div className="hidden md:flex items-center gap-1 mr-2">
            <NavLink href="https://app.outofreach3d.com/upgrades">Pricing</NavLink>
            <NavLink href="https://app.outofreach3d.com/help/faq/general">FAQ</NavLink>
            <NavLink href="https://auth.outofreach3d.com/login">Login</NavLink>
          </div>
          
          <Link href="https://auth.outofreach3d.com/signup">
            <Button variant="red" size="sm" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </nav>

      {/* 404 Content */}
      <section className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Glow Behind Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4AE7] rounded-full blur-[180px] opacity-[0.08] pointer-events-none animate-pulse-slow" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <motion.h1
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`text-[10rem] md:text-[14rem] font-bold tracking-tighter leading-none ${montserrat.className}`}
            >
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8CEA] via-[#FE0101] to-[#FF8CEA] bg-[length:200%_auto] animate-gradient"
                style={{ 
                  textShadow: '0 0 80px rgba(254,1,1,0.3)',
                }}
              >
                404
              </span>
            </motion.h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${montserrat.className}`}
          >
            You're off the map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed font-light"
          >
            This page doesn't exist in OOR3D's universe yet.
            <br />
            <span className="text-white/40 text-base block mt-2">Let's get you back on track.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/">
              <Button variant="red" size="default" className="rounded-full px-6 w-auto">
                <Home className="w-4 h-4 mr-2" />
                Take Me Home
              </Button>
            </Link>
            <Link href="https://app.outofreach3d.com">
              <Button variant="outline" size="default" className="rounded-full px-6 w-auto border-white/20 text-white hover:bg-white/10">
                Open App <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating 3D Assets */}
        <FloatingAsset 
          src="/texture.png"
          className="absolute top-1/4 left-[5%] w-32 h-32 lg:w-48 lg:h-48 hidden md:block"
          delay={0}
          targetOpacity={0.6}
          targetBlur={2}
        />
        <FloatingAsset 
          src="/download.png"
          className="absolute bottom-1/4 right-[5%] w-40 h-40 lg:w-56 lg:h-56 hidden md:block"
          delay={2}
          targetOpacity={0.6}
          targetBlur={2}
        />
        <FloatingAsset 
          src="/t shirt.png"
          className="absolute top-1/3 right-[15%] w-24 h-24 lg:w-36 lg:h-36 hidden lg:block"
          delay={1.5}
          targetBlur={4}
          targetOpacity={0.4}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
