"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { ChevronDown, ArrowRight, Play, Globe, Users, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

// Brand colors
const colors = {
  bgPrimary: '#0D0429',
  bgSecondary: '#251D3E',
  bgCard: 'rgba(25, 17, 52, 0.4)', // More transparent for glass
  accent: '#FE0101',
  gradientFrom: '#FF4AE7',
  gradientTo: '#FE0101',
  border: 'rgba(255, 255, 255, 0.08)',
  borderHighlight: 'rgba(255, 255, 255, 0.15)',
}

// Nebula background
const nebulaBackground = `
  radial-gradient(circle at 15% 50%, rgba(120, 119, 198, 0.08) 0%, transparent 25%),
  radial-gradient(circle at 85% 30%, rgba(255, 74, 231, 0.08) 0%, transparent 25%),
  linear-gradient(180deg, #0D0429 0%, #08021a 100%)
`

// FAQ Data
const faqs = [
  { q: "What is OOR3D?", a: "A browser-based platform to customize 3D products with your textures and export to virtual worlds." },
  { q: "Do I need 3D experience?", a: "No! Products are pre-made. Just add your textures." },
  { q: "What platforms?", a: "IMVU now. Second Life, Sims, Roblox coming soon." },
  { q: "Is there a free trial?", a: "Yes! Sign up and explore during our beta." },
]

export default function NewLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div 
      className={`min-h-screen text-white selection:bg-[#FE0101] selection:text-white ${montserrat.variable}`}
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
          <Link href="/new" className="mr-6 opacity-90 hover:opacity-100 transition-opacity">
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

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Glow Behind Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4AE7] rounded-full blur-[180px] opacity-[0.08] pointer-events-none animate-pulse-slow" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{ 
                backgroundColor: 'rgba(254, 1, 1, 0.1)',
                border: '1px solid rgba(254, 1, 1, 0.2)',
                color: '#FF4D4D',
                boxShadow: '0 0 20px rgba(254, 1, 1, 0.1)'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FE0101] animate-pulse" />
              Now in Beta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 ${montserrat.className}`}
          >
            <span className="block text-white mb-2 drop-shadow-2xl">The easiest way to create for</span>
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8CEA] via-[#FE0101] to-[#FF8CEA] bg-[length:200%_auto] animate-gradient"
            >
              virtual worlds
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Pick products. Add your textures. Export to IMVU.
            <br />
            <span className="text-white/40">No downloads. No 3D skills required.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="https://auth.outofreach3d.com/signup">
              <Button variant="red" size="default" className="rounded-full px-6 w-auto">
                Start Creating <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* 3D Asset Floating Elements (Decorations) */}
        <FloatingAsset 
          src="/texture.png" // Paintbrush sphere
          className="absolute top-1/4 left-[5%] w-32 h-32 lg:w-48 lg:h-48 hidden md:block"
          delay={0}
        />
        <FloatingAsset 
          src="/download.png" // Box arrow
          className="absolute bottom-1/4 right-[5%] w-40 h-40 lg:w-56 lg:h-56 hidden md:block"
          delay={2}
        />
        <FloatingAsset 
          src="/t shirt.png" // T-shirt
          className="absolute top-1/3 right-[15%] w-24 h-24 lg:w-36 lg:h-36 opacity-60 blur-[2px] hidden lg:block"
          delay={1.5}
        />
      </section>

      {/* Trusted By - Scrolling Logos */}
      <section className="py-12 border-b border-white/5 bg-[#08021a]/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">
              Trusted by Industry Leaders
            </p>
            <p className="text-white/40 text-sm max-w-2xl mx-auto font-light">
              Innovating a new standard for creation in virtual spaces, powered by global pioneers of technology.
            </p>
          </div>
          <div className="relative flex overflow-hidden mask-gradient-x">
            <motion.div 
              className="flex items-center gap-16 min-w-full"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 shrink-0">
                  {[
                    { src: "/Trusted By/stripe.svg", alt: "Stripe" },
                    { src: "/Trusted By/nvidia.svg", alt: "NVIDIA" },
                    { src: "/Trusted By/meta.svg", alt: "Meta" },
                    { src: "/Trusted By/unity.svg", alt: "Unity" },
                    { src: "/Trusted By/epicgames.svg", alt: "Epic Games" },
                    { src: "/Trusted By/blender.svg", alt: "Blender" },
                    { src: "/Trusted By/sega.svg", alt: "SEGA" },
                    { src: "/Trusted By/amd.svg", alt: "AMD" },
                    { src: "/Trusted By/msi.svg", alt: "MSI" },
                    { src: "/Trusted By/autodeskmaya.svg", alt: "Autodesk Maya" },
                    { src: "/Trusted By/logitech.svg", alt: "Logitech" },
                    { src: "/Trusted By/steam.svg", alt: "Steam" }
                  ].map((logo, index) => (
                    <div 
                      key={`${i}-${index}`}
                      className="relative w-24 h-8 opacity-30 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase - "The Stage" */}
      <section className="px-4 py-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Star-like glow effects */}
          <div className="absolute -inset-4 rounded-[2rem] opacity-75 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" />
            <div className="absolute top-0 right-1/4 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-white/30 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          {/* Border container */}
          <div className="relative">
            {/* Outer glowing border */}
            <div className="absolute -inset-4 rounded-[2rem] border-2 border-white/10 blur-[1px]" />
            <div className="absolute -inset-4 rounded-[2rem] border border-white/5" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#FE0101]/10 bg-[#150a2e]">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/WTSFG9HavAU"
                  title="OOR3D Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Premium Bento */}
      <section className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
            
            {/* Card 1: 3 Steps (Large) */}
            <BentoCard className="md:col-span-4 md:row-span-2 flex flex-col justify-center p-12">
              <span className="text-[#FE0101] font-bold tracking-wider text-sm uppercase mb-4 block">Workflow</span>
              <h2 className={`text-4xl md:text-5xl font-bold mb-12 leading-tight ${montserrat.className}`}>
                From concept to<br/>
                <span className="text-white/40">IMVU product.</span>
              </h2>
              
              <div className="space-y-12">
                <Step number="01" title="Pick" desc="Choose a base model from our library." />
                <Step number="02" title="Texture" desc="Upload your art. See it instantly." />
                <Step number="03" title="Export" desc="Get files ready for upload." />
              </div>
            </BentoCard>

            {/* Card 2: Browser Based */}
            <BentoCard className="md:col-span-2 md:row-span-1 p-8 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-2xl bg-[#FE0101]/10 flex items-center justify-center text-[#FE0101] group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">100% Browser</h3>
                <p className="text-white/50 text-sm">No massive downloads. Create from anywhere.</p>
              </div>
            </BentoCard>

            {/* Card 3: No Skills */}
            <BentoCard className="md:col-span-2 md:row-span-1 p-8 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-2xl bg-[#FE0101]/10 flex items-center justify-center text-[#FE0101] group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">No 3D Skills</h3>
                <p className="text-white/50 text-sm">Products are pre-made. Just add your creative touch.</p>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* Platforms Section - Dedicated */}
      <section className="px-6 py-24 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${montserrat.className}`}>
                Built for your favorite platforms
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Start creating for IMVU today. We're actively expanding to support more of the virtual worlds you love.
              </p>
                <div className="flex flex-wrap items-center gap-6">
                  {/* IMVU is active */}
                  <div className="relative w-8 h-8" title="IMVU">
                     <Image src="/images/platforms/imvu-logo.webp" alt="IMVU" fill className="object-contain" />
                  </div>
                  
                  {/* Coming Soon */}
                  <div className="w-px h-6 bg-white/10 mx-2" />
                  
                  <div className="relative w-8 h-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" title="Second Life">
                    <Image src="/images/platforms/second-life-logo.svg" alt="Second Life" fill className="object-contain" />
                  </div>
                  <div className="relative w-8 h-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" title="The Sims 4">
                    <Image src="/images/platforms/sims4-logo.svg" alt="The Sims 4" fill className="object-contain" />
                  </div>
                  <div className="relative w-8 h-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" title="Roblox">
                    <Image src="/images/platforms/roblox-logo.svg" alt="Roblox" fill className="object-contain" />
                  </div>
                </div>
            </div>
            
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform md:rotate-3 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/Starting with IMVU.png"
                alt="Platform Support - Starting with IMVU"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <BentoCard className="p-16 text-center relative overflow-hidden border-[#5865F2]/30">
            <div className="absolute inset-0 bg-[#5865F2]/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#5865F2]/10 to-transparent" />
            
            <div className="relative z-10">
              <h2 className={`text-4xl font-bold mb-6 ${montserrat.className}`}>Join the Creators</h2>
              <p className="text-xl text-white/60 mb-10 max-w-lg mx-auto">
                Get help, share designs, and shape the future of OOR3D in our Discord.
              </p>
              <Link 
                href="https://discord.gg/oor3d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-[#5865F2]/20"
              >
                <Users className="w-5 h-5" />
                Join Discord Server
              </Link>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#08021a] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 opacity-50">
            <Image src="/OOR-LOGO.svg" alt="OOR3D" width={40} height={12} className="brightness-0 invert" />
            <span className="text-xs">© 2026</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40">
            <Link href="https://app.outofreach3d.com/help/policy/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <Link href="https://app.outofreach3d.com/help/policy/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Components

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

function BentoCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div 
      className={`rounded-[32px] border bg-[#150a2e]/50 backdrop-blur-xl transition-all duration-500 hover:border-white/20 ${className}`}
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {children}
    </div>
  )
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <span className="text-2xl font-bold text-[#FE0101]/40 font-mono pt-1 group-hover:text-[#FE0101] transition-colors">{number}</span>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/50">{desc}</p>
      </div>
    </div>
  )
}

function Badge({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'outline' }) {
  if (variant === 'outline') {
    return (
      <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-white/40">
        {children}
      </span>
    )
  }
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FE0101] text-white shadow-lg shadow-[#FE0101]/20">
      {children}
    </span>
  )
}

function FloatingAsset({ src, className, delay }: { src: string, className: string, delay: number }) {
  return (
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
      className={`${className} pointer-events-none`}
    >
      <div className="relative w-full h-full">
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-[#FE0101]/20 blur-2xl rounded-full transform scale-75" />
        <Image 
          src={src} 
          alt="3D Asset" 
          fill 
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  )
}
