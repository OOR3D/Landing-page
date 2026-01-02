"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { ChevronDown, ArrowRight, Play, Globe, Users, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import TestimonialsSection from '@/components/TestimonialsSection'

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

import { Footer } from '@/components/Footer'

export default function NewLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div 
      className={`min-h-screen text-white selection:bg-[#FE0101]/30 selection:text-white ${montserrat.variable}`}
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
            <span className="block text-white mb-2 drop-shadow-2xl">The Workspace for</span>
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8CEA] via-[#FE0101] to-[#FF8CEA] bg-[length:200%_auto] animate-gradient"
            >
              Virtual Creators
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Design, customize, and export game-ready assets directly from your browser.
            <br />
            <span className="text-white/40 text-base md:text-lg block mt-2">No 3D experience required.</span>
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
          className="absolute top-1/3 right-[15%] w-24 h-24 lg:w-36 lg:h-36 hidden lg:block"
          delay={1.5}
          targetBlur={4}
          targetOpacity={0.6}
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
              className="flex items-center min-w-full"
              animate={{ x: ["0%", "-25%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 shrink-0 pr-16">
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

      {/* Meet Remix - Video Showcase */}
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

          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${montserrat.className}`}>
              Meet Remix
            </h2>
            <p className="text-xl text-white/60">
              The powerful editor that makes 3D creation accessible to everyone.
            </p>
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
                  src="https://www.youtube.com/embed/nrmqh6p7c_k"
                  title="OOR3D Remix Editor Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - 3 Step Workflow */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${montserrat.className}`}>How It Works</h2>
            <p className="text-xl text-white/60">From concept to creation in three simple steps.</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group/cards">
              {/* Step 1: Pick */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-[#150a2e]/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:border-[#FE0101]/50 transition-all duration-500 hover:scale-[1.02] hover:!opacity-100 group-hover/cards:opacity-40"
              >
                <div className="absolute -top-20 -left-20 w-48 h-48 opacity-100 transition-all duration-500 pointer-events-none z-20 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(254,1,1,0.3)]">
                  <Image src="/1 3d.png" alt="Step 1" fill className="object-contain" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col pt-24">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">Pick</h3>
                    <p className="text-white/50 leading-relaxed text-sm">Choose a base model from our curated library of high-quality assets.</p>
                  </div>
                  
                  <div className="mt-auto relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 border border-white/5 group-hover:border-[#FE0101]/20 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/20 text-xs">Generate: "Grid of 3D clothing models"</p>
                    </div>
                     {/* <Image src="/images/step-1-pick.png" alt="Pick a model" fill className="object-cover" /> */}
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Customize */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative bg-[#150a2e]/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:border-[#FE0101]/50 transition-all duration-500 hover:scale-[1.02] hover:!opacity-100 group-hover/cards:opacity-40"
              >
                <div className="absolute -top-20 -left-20 w-48 h-48 opacity-100 transition-all duration-500 pointer-events-none z-20 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(254,1,1,0.3)]">
                   <Image src="/2 3d.png" alt="Step 2" fill className="object-contain" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col pt-24">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">Customize</h3>
                    <p className="text-white/50 leading-relaxed text-sm">Upload your images or textures. See it applied instantly in 3D</p>
                  </div>
                  
                  <div className="mt-auto relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 border border-white/5 group-hover:border-[#FE0101]/20 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/20 text-xs">Generate: "Applying texture to model"</p>
                    </div>
                    {/* <Image src="/images/step-2-texture.png" alt="Customize your model" fill className="object-cover" /> */}
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Export */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative bg-[#150a2e]/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:border-[#FE0101]/50 transition-all duration-500 hover:scale-[1.02] hover:!opacity-100 group-hover/cards:opacity-40"
              >
                <div className="absolute -top-20 -left-20 w-48 h-48 opacity-100 transition-all duration-500 pointer-events-none z-20 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(254,1,1,0.3)]">
                   <Image src="/3 3d.png" alt="Step 3" fill className="object-contain" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col pt-24">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">Export</h3>
                    <p className="text-white/50 leading-relaxed text-sm">Get game-ready files. Download and upload directly to supported platforms</p>
                  </div>
                  
                  <div className="mt-auto relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 border border-white/5 group-hover:border-[#FE0101]/20 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <p className="text-white/20 text-xs">Generate: "Download ready files"</p>
                    </div>
                    {/* <Image src="/images/step-3-export.png" alt="Export files" fill className="object-cover" /> */}
                  </div>
                </div>
              </motion.div>

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
                  <TooltipProvider delayDuration={0}>
                    {/* IMVU is active */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://imvu.com" target="_blank" className="relative w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300">
                           <Image src="/images/platforms/imvu-logo.webp" alt="IMVU" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>IMVU</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    {/* Coming Soon */}
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://secondlife.com" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/second-life-logo.svg" alt="Second Life" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Second Life</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://www.ea.com/games/the-sims/the-sims-4" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/sims4-logo.svg" alt="The Sims 4" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The Sims 4</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://www.roblox.com" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/roblox-logo.svg" alt="Roblox" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Roblox</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://vrchat.com" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/vrchat-logo.png" alt="VRChat" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>VRChat</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://web.zepeto.me" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/zepeto-logo.svg" alt="Zepeto" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Zepeto</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://playinzoi.com" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/inzoi-logo.svg" alt="Inzoi" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Inzoi</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="https://fivem.net" target="_blank" className="relative w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Image src="/images/platforms/fivem-logo.svg" alt="FiveM" fill className="object-contain" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>FiveM</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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

      {/* Remix Editor Showcase */}
      {/* <section className="px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${montserrat.className}`}>
              Meet Remix
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The powerful editor that makes 3D creation accessible to everyone.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-[#FE0101]/20 border border-white/10 bg-[#150a2e]"
          >
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/nrmqh6p7c_k"
                title="OOR3D Remix Editor Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Community Section */}
      <section className="px-6 py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5865F2]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <BentoCard className="p-8 md:p-16 text-center relative overflow-hidden border-[#5865F2]/30 group">
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/10 via-[#150a2e]/50 to-[#FE0101]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Floating Discord Logo */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 mb-8 relative drop-shadow-[0_0_30px_rgba(88,101,242,0.6)]"
              >
                <Image 
                  src="/images/discord-logo.svg" 
                  alt="Discord" 
                  fill 
                  className="object-contain"
                />
              </motion.div>

              <h2 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${montserrat.className}`}>
                Join the <span className="text-[#5865F2]">Community</span>
              </h2>
              
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Connect with Hundreds of creators. Share your designs, get instant feedback, and shape the future of OOR3D.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="https://discord.gg/oor3d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="default" 
                    className="group relative overflow-hidden bg-gradient-to-b from-[#5865F2] to-[#4752C4] text-white rounded-full px-8 py-6 text-base h-auto shadow-[0_4px_20px_rgba(88,101,242,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[0.98] active:scale-95 hover:text-white active:text-white"
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ease-in-out" />

                    {/* Top Highlight Line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold tracking-wide">Join Discord Server</span>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Footer */}
      <Footer />
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
        delay: delay * 0.2, // Reduced delay multiplier for faster entrance
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
          delay: delay // Keep original phase delay for floating
        }}
        className="relative w-full h-full"
      >
        {/* Glow effect behind image */}
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
