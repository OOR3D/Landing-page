"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { ChevronDown, Play, Globe, Users, Palette, Sparkles, ArrowRight } from 'lucide-react'
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
  { q: "What is OOR3D™?", a: "A browser-based platform to customize 3D products with your textures and export to virtual worlds." },
  { q: "Do I need 3D experience?", a: "No! Products are pre-made. Just add your textures." },
  { q: "What platforms?", a: "IMVU now. Second Life, Sims, Roblox coming soon." },
  { q: "Is there a free trial?", a: "Yes! Sign up and explore during our beta." },
]

import FeaturesBento from '@/components/FeaturesBento'
import SecurityFeatures from '@/components/SecurityFeatures'
import PlatformLogos from '@/components/PlatformLogos'
import { Footer } from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function NewLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    // Check if user has visited before
    if (typeof window === 'undefined') return
    
    // Clean up old key if it exists
    if (localStorage.getItem('hasVisitedBefore')) {
      localStorage.removeItem('hasVisitedBefore')
    }
    
    const hasVisited = localStorage.getItem('oor3d_has_visited')
    
    // Show loader for everyone, but make it 3x faster for returning visitors
    const startTime = performance.now()
    const baseDuration = 1500 // 1.5 seconds for first-time visitors
    const duration = hasVisited === 'true' ? baseDuration / 3 : baseDuration // 3x faster for returning visitors (500ms)
    
    const animate = () => {
      const elapsed = performance.now() - startTime
      const progress = Math.min((elapsed / duration) * 100, 100)
      setLoadingProgress(progress)
      
      if (progress < 100) {
        requestAnimationFrame(animate)
      } else {
        // Ensure we set exactly 100% when done
        setLoadingProgress(100)
      }
    }
    
    requestAnimationFrame(animate)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Mark as visited after loader completes
    if (typeof window !== 'undefined') {
      localStorage.setItem('oor3d_has_visited', 'true')
    }
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen progress={loadingProgress} onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!isLoading && (
        <div 
          className={`min-h-screen text-white selection:bg-[#FF1493]/60 selection:text-white ${montserrat.variable}`}
          style={{ 
            backgroundColor: '#020005', // Deep dark background for the void
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
            <Image src="https://assets.oor3d.com/logo/OOR-allwhite.svg" alt="OOR3D" width={40} height={12} draggable={false} className="brightness-0 invert" />
          </Link>
          
          <div className="hidden md:flex items-center gap-1 mr-2">
            <NavLink href="https://app.outofreach3d.com/upgrades">Pricing</NavLink>
            <NavLink href="https://app.outofreach3d.com/help/faq/general">FAQ</NavLink>
            <NavLink href="https://auth.outofreach3d.com/login">Login</NavLink>
          </div>
          
          <Link href="https://auth.outofreach3d.com/signup" draggable={false}>
            <Button variant="red" size="sm" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
         {/* Curved Background */}
        <div 
          className="absolute inset-0 z-0 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden border-b border-white/5"
          style={{ background: nebulaBackground }}
        >
           {/* Animated Border Beam - Bottom Edge Only */}
           
           {/* Pink Border Glow Effect - Combined */}
           <motion.div 
             className="absolute inset-0 rounded-b-[60px] md:rounded-b-[100px] pointer-events-none"
             initial={{ opacity: 0 }}
             animate={{ 
               opacity: 1,
               x: [0, -3, 2, -1, 3, -2, 1, -2, 0],
               y: [0, 2, -3, 1, -2, 3, -1, 2, 0],
             }}
             transition={{ 
               opacity: { duration: 0.8, delay: 0.2 },
               x: { 
                 duration: 8,
                 repeat: Infinity,
                 ease: "easeInOut",
                 // Very uneven spacing creates speed variation within one cycle:
                 // Tight intervals (0->0.02) = fast movement
                 // Wide intervals (0.75->0.95) = slow movement
                 times: [0, 0.02, 0.15, 0.25, 0.45, 0.55, 0.75, 0.95, 1]
               },
               y: { 
                 duration: 10,
                 repeat: Infinity,
                 ease: "easeInOut",
                 // Different uneven pattern for y-axis - creates different speed profile
                 times: [0, 0.03, 0.18, 0.28, 0.48, 0.58, 0.78, 0.97, 1]
               }
             }}
             style={{
               WebkitMaskImage: 'linear-gradient(to bottom, transparent calc(100% - 120px), black 100%)',
               maskImage: 'linear-gradient(to bottom, transparent calc(100% - 120px), black 100%)',
             }}
           >
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4AE7] rounded-full blur-[180px] opacity-[0.08] pointer-events-none" />
             
             {/* Glow Layer (Blurry) */}
             <div 
               className="absolute inset-0 rounded-b-[60px] md:rounded-b-[100px]"
               style={{
                 padding: '3px',
                 background: 'linear-gradient(90deg, transparent 49%, #FF4AE7 50%, transparent 51%)',
                 backgroundSize: '200% 100%',
                 animation: 'border-beam 15s linear infinite',
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
                 filter: 'blur(4px)',
                 opacity: 0.6,
               }}
             />
             
             {/* Core Beam (Sharp) */}
             <div 
               className="absolute inset-0 rounded-b-[60px] md:rounded-b-[100px]"
               style={{
                 padding: '1px',
                 background: 'linear-gradient(90deg, transparent 49.8%, #FFFFFF 50%, transparent 50.2%)',
                 backgroundSize: '200% 100%',
                 animation: 'border-beam 15s linear infinite',
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
                 filter: 'drop-shadow(0 0 5px #FF4AE7)',
               }}
             />
           </motion.div>

           {/* Animated Glow Behind Hero */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4AE7] rounded-full blur-[180px] opacity-[0.08] pointer-events-none animate-pulse-slow" />
        </div>

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
              Beta v0.1
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
            <Link href="https://auth.outofreach3d.com/signup" draggable={false}>
              <Button variant="red" size="default" className="rounded-full px-6 w-auto">
                <Sparkles className="w-4 h-4 mr-2" /> Start Creating
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* 3D Asset Floating Elements (Decorations) */}
        <FloatingAsset 
          src="/assets/texture.png" // Paintbrush sphere
          className="absolute top-1/4 left-[5%] w-32 h-32 lg:w-48 lg:h-48 hidden md:block"
          delay={0}
        />
        <FloatingAsset 
          src="/assets/download.png" // Box arrow
          className="absolute bottom-1/4 right-[5%] w-40 h-40 lg:w-56 lg:h-56 hidden md:block"
          delay={2}
        />
        <FloatingAsset 
          src="/assets/t shirt.png" // T-shirt
          className="absolute top-1/3 right-[15%] w-24 h-24 lg:w-36 lg:h-36 hidden lg:block"
          delay={1.5}
          targetBlur={4}
          targetOpacity={0.6}
        />
      </section>

      {/* Trusted By - Scrolling Logos */}
      <section className="py-12 border-b border-white/5 bg-[#08021a]/50 backdrop-blur-sm relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">
              Trusted by Industry Leaders
            </p>
            <p className="text-white/40 text-sm max-w-2xl mx-auto font-light">
              Innovating a new standard for creation in virtual spaces, powered by global pioneers of technology.
            </p>
          </motion.div>
          <motion.div 
            className="relative flex overflow-hidden mask-gradient-x"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
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
                        draggable={false}
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10" style={{ background: nebulaBackground }}>
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
                  title="OOR3D™ Remix Editor Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - 3 Step Workflow - Stacked Deck */}
      <StackedDeckSection />
      <MobileFeatures />

      {/* Features Bento Grid */}
      <FeaturesBento />

      {/* 3D Showcase Placeholder */}
      {/* <section className="px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 uppercase tracking-widest text-sm mb-4">Interactive Preview</p>
          <div className="aspect-[16/9] w-full bg-white/5 rounded-[32px] border border-white/10 flex items-center justify-center">
             <p className="text-white/60">3D Interactive Viewer Coming Soon</p>
          </div>
        </div>
      </section> */}

      {/* Platforms Section - Dedicated */}
      <section className="relative w-full py-24">
        <PlatformLogos>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${montserrat.className} px-2`}>
            Built for the platforms you create for
          </h2>
          <p className="text-lg sm:text-xl text-white/60 mb-2 max-w-5xl mx-auto px-4">
            <span className="text-white/80 font-medium">IMVU</span> is supported today.
          </p>
          <p className="text-lg sm:text-xl text-white/60 mb-2 max-w-5xl mx-auto px-4">
            We're actively expanding to the platforms creators care about next.
          </p>
          <p className="text-lg sm:text-xl text-white/80 font-medium mb-8 max-w-5xl mx-auto px-4">
            Second Life, The Sims 4, Roblox, VRChat, Zepeto, Inzoi, FiveM, Avakin Life, Minecraft, and GTA 6.
          </p>
        </PlatformLogos>
      </section>

      {/* Security & Support Features */}
      <SecurityFeatures />

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
                title="OOR3D™ Remix Editor Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* The Engine Section */}
      <section className="px-6 py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4AE7]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#FE0101]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${montserrat.className} text-white leading-tight`}>
              The Engine Behind Superpowered Creators
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              OUTOFREACH3D™ brings your tools, products, and workflow into a single system, so you can create faster and stay steps ahead.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="https://auth.outofreach3d.com/signup">
                <Button variant="red" size="lg" className="rounded-full px-8 w-full sm:w-auto">
                  Start creating
                </Button>
              </Link>
              <Link href="https://app.outofreach3d.com/upgrades">
                <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto border-white/20 hover:border-white/40">
                  See our plans
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                  src="https://assets.oor3d.com/svg/icons/social-media/discord.svg" 
                  alt="Discord" 
                  fill 
                  draggable={false}
                  className="object-contain"
                />
              </motion.div>

              <h2 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${montserrat.className}`}>
                Join the <span className="text-[#5865F2]">Community</span>
              </h2>
              
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Connect with Hundreds of creators. Share your designs, get instant feedback, and shape the future of OOR3D™.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="https://discord.gg/oor3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
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
      </div>
      )}
    </>
  )
}

// Components

// Word-by-word animation component (uses whileInView for scroll-triggered animation)
function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  wordDelay = 0.1
}: { 
  text: string, 
  className?: string,
  delay?: number,
  wordDelay?: number
}) {
  const words = text.split(' ')
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.5,
            delay: delay + (i * wordDelay),
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}

// Word-by-word animation component for scroll-based sections
function ScrollAnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  wordDelay = 0.1,
  scrollProgress
}: { 
  text: string, 
  className?: string,
  delay?: number,
  wordDelay?: number,
  scrollProgress: any
}) {
  const words = text.split(' ')
  const [hasAnimated, setHasAnimated] = useState(false)
  
  useEffect(() => {
    // Check initial value
    if (scrollProgress.get() > 0.01) {
      setHasAnimated(true)
    }

    // Subscribe to changes
    const unsubscribe = scrollProgress.on("change", (latest: number) => {
      if (!hasAnimated && latest > 0.01) {
        setHasAnimated(true)
      }
    })
    
    return () => unsubscribe()
  }, [scrollProgress, hasAnimated])
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + (i * wordDelay),
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
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

// New Stacked Deck Component
function StackedDeckSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Increased scroll range for sequential animation
  // Sequence:
  // 0.0 - 0.2: Start locked
  // 0.2 - 0.5: Card 1 moves Left
  // 0.5 - 0.8: Card 3 moves Right
  
  // Card 1 (Left) - Top of stack
  const x1 = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-110%"]) 
  const r1 = useTransform(scrollYProgress, [0.2, 0.5], [0, -5]) // Rotate slightly as it moves
  const s1 = useTransform(scrollYProgress, [0.2, 0.5], [1, 1])

  // Card 2 (Center) - Middle of stack
  // Stays in center, maybe subtle scale up
  const r2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const s2 = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1])
  
  // Card 3 (Right) - Bottom of stack
  const x3 = useTransform(scrollYProgress, [0.5, 0.8], ["0%", "110%"])
  const r3 = useTransform(scrollYProgress, [0.5, 0.8], [0, 5])
  const s3 = useTransform(scrollYProgress, [0.5, 0.8], [0.9, 1])

  // Opacity for entry (Text)
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Card 1 Entry Animation (From bottom)
  const entryOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1])
  const entryY = useTransform(scrollYProgress, [0.05, 0.2], [100, 0])
  
  // Opacity for Card 2 and 3 to hide them until scroll starts
  // Card 2 fades in as Card 1 moves
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
  // Card 3 fades in slightly later
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])

  return (
    <section ref={containerRef} className="px-6 relative z-10 min-h-[300vh] hidden md:block overflow-visible">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-visible">
        {/* Adjusted top position to clear header */}
        <div className="text-center mb-24 absolute top-32 left-0 right-0 z-20">
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${montserrat.className}`}>
            <ScrollAnimatedText 
              text="How It Works" 
              delay={0.1}
              wordDelay={0.15}
              scrollProgress={scrollYProgress}
            />
          </h2>
          <p className="text-2xl text-white/60">
            <ScrollAnimatedText 
              text="From concept to creation in three simple steps." 
              delay={0.4}
              wordDelay={0.1}
              scrollProgress={scrollYProgress}
            />
          </p>
        </div>

        {/* Increased size for focus - Reduced by ~15% */}
        <div className="relative h-[55vh] w-full max-w-[75vw] 2xl:max-w-[1500px] mx-auto mt-64 overflow-visible">
          <div className="flex items-center justify-center h-full w-full overflow-visible">
            
            {/* Step 1: Pick - Moves Left */}
            <motion.div 
              style={{ x: x1, y: entryY, rotate: r1, scale: s1, opacity: entryOpacity, zIndex: hoveredCard === "1" ? 50 : 3, transformOrigin: "top center" }}
              className="absolute w-[32%] h-full overflow-visible"
            >
              <FeatureCard 
                step="1"
                title="Choose" 
                desc="Pick a base model from our curated library of high-quality assets."
                img="/workflow/1 3d.png"
                isHovered={hoveredCard === "1"}
                isAnyHovered={hoveredCard !== null}
                onHoverChange={(isHovering: boolean) => setHoveredCard(isHovering ? "1" : null)}
              >
                  <Image 
                     src="/workflow/pick your asset.jpg" 
                     alt="Pick a model" 
                     fill 
                     draggable={false}
                     className="object-cover object-bottom transition-all duration-500"
                   />
              </FeatureCard>
            </motion.div>

            {/* Step 2: Customize - Center */}
            <motion.div 
              style={{ rotate: r2, scale: s2, opacity: opacity2, zIndex: hoveredCard === "2" ? 50 : 2, transformOrigin: "top center" }}
              className="absolute w-[32%] h-full overflow-visible"
            >
              <FeatureCard 
                step="2"
                title="Customize" 
                desc="Upload your images or textures. See it applied instantly in 3D."
                img="/workflow/2 3d.png"
                isHovered={hoveredCard === "2"}
                isAnyHovered={hoveredCard !== null}
                onHoverChange={(isHovering: boolean) => setHoveredCard(isHovering ? "2" : null)}
              >
                 <div className="absolute inset-0 w-full h-full">
                   <Image 
                      src="/workflow/image_VLrJ0nd__1767391135933_raw.jpg" 
                      alt="Customize model" 
                      fill 
                      draggable={false}
                      className="object-cover object-center transition-all duration-500 scale-[1.2]"
                    />
                 </div>
              </FeatureCard>
            </motion.div>

            {/* Step 3: Export - Moves Right */}
            <motion.div 
              style={{ x: x3, rotate: r3, scale: s3, opacity: opacity3, zIndex: hoveredCard === "3" ? 50 : 1, transformOrigin: "top center" }}
              className="absolute w-[32%] h-full overflow-visible"
            >
              <FeatureCard 
                step="3"
                title="Export" 
                desc="Get game-ready files. Download and upload directly to supported platforms."
                img="/workflow/3 3d.png"
                isHovered={hoveredCard === "3"}
                isAnyHovered={hoveredCard !== null}
                onHoverChange={(isHovering: boolean) => setHoveredCard(isHovering ? "3" : null)}
              >
                 <Image 
                    src="/workflow/f6dcb969-48ba-4c8f-b8a5-688b0559c71b.png" 
                    alt="Export files" 
                    fill 
                    draggable={false}
                    className="object-cover object-center transition-all duration-500"
                  />
              </FeatureCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mobile Version (simpler, vertical stack)
function MobileFeatures() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  return (
    <section className="px-4 sm:px-6 py-24 relative z-10 md:hidden overflow-visible">
       <div className="max-w-[1600px] mx-auto overflow-visible">
          <div className="text-center mb-24 px-2">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${montserrat.className}`}>
              <AnimatedText 
                text="How It Works" 
                delay={0.1}
                wordDelay={0.15}
              />
            </h2>
            <p className="text-xl text-white/60">
              <AnimatedText 
                text="From concept to creation in three simple steps." 
                delay={0.4}
                wordDelay={0.1}
              />
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
             <FeatureCard 
               step="1" 
               title="Choose" 
               desc="Pick a base model from our curated library." 
               img="/workflow/1 3d.png"
               isHovered={hoveredCard === "1"}
               isAnyHovered={hoveredCard !== null}
               onHoverChange={(isHovering: boolean) => setHoveredCard(isHovering ? "1" : null)}
             >
                <Image 
                  src="/workflow/pick your asset.jpg" 
                  alt="Pick a model" 
                  fill 
                  draggable={false}
                  className="object-cover object-bottom"
                />
             </FeatureCard>
             <FeatureCard 
               step="2" 
               title="Customize" 
               desc="Upload your images or textures." 
               img="/workflow/2 3d.png"
               isHovered={hoveredCard === "2"}
               isAnyHovered={hoveredCard !== null}
               onHoverChange={(isHovering: boolean) => setHoveredCard(isHovering ? "2" : null)}
             >
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src="/workflow/image_VLrJ0nd__1767391135933_raw.jpg" 
                    alt="Customize model" 
                    fill 
                    draggable={false}
                    className="object-cover object-center scale-[1.2]"
                  />
                </div>
             </FeatureCard>
             <FeatureCard 
               step="3" 
               title="Export" 
               desc="Get game-ready files." 
               img="/workflow/3 3d.png"
               isHovered={hoveredCard === "3"}
               isAnyHovered={hoveredCard !== null}
               onHoverChange={(isHovering: boolean) => setHoveredCard(isHovering ? "3" : null)}
             >
                <Image 
                  src="/workflow/f6dcb969-48ba-4c8f-b8a5-688b0559c71b.png" 
                  alt="Export files" 
                  fill 
                  draggable={false}
                  className="object-cover object-center"
                />
             </FeatureCard>
          </div>
       </div>
    </section>
  )
}

function FeatureCard({ step, title, desc, img, children, isHovered, isAnyHovered, onHoverChange }: any) {
  const iconSrc = "/workflow/check%20mark.png"
  
  // Get image source from children to create color-matched background
  const getImageSrc = () => {
    if (step === "1") return "/workflow/pick your asset.jpg"
    if (step === "2") return "/workflow/image_VLrJ0nd__1767391135933_raw.jpg"
    if (step === "3") return "/workflow/f6dcb969-48ba-4c8f-b8a5-688b0559c71b.png"
    return ""
  }
  
  const imageSrc = getImageSrc()
  
  // Determine if this card should be greyed out
  const shouldGreyOut = isAnyHovered && !isHovered

  return (
    <div
      className={`h-full group relative border border-white/10 rounded-[32px] hover:border-[#FE0101]/50 transition-all duration-500 ease-in-out hover:scale-105 flex flex-col overflow-visible bg-[#150a2e] drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)] ${shouldGreyOut ? 'grayscale opacity-80' : 'grayscale-0'}`}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      style={{ overflow: 'visible' }}
    >
      {/* Dynamic Background Color Layer (Applied to the whole card) */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px]">
        <Image
          src={imageSrc}
          alt=""
          fill
          draggable={false}
          className="object-cover"
          style={{ 
            filter: 'blur(80px) saturate(1.5) brightness(0.6)',
            transform: 'scale(1.5)',
            opacity: 0.4
          }}
        />
      </div>

      {/* Top Section: Header & Text - Takes up ~35% */}
      <div className="relative z-10 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 flex flex-col shrink-0 h-[35%]">
        <div className="flex justify-between items-start w-full mb-4 sm:mb-6">
           {/* Step Number Image (Top Left) - Made responsive */}
           <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 md:-top-16 md:-left-16 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 pointer-events-none group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(254,1,1,0.3)] transition-all duration-500 z-20">
              <Image src={img} alt={`Step ${step}`} fill draggable={false} className="object-contain" />
           </div>
           
           {/* Arrow Icon (Top Right) */}
           <div className="absolute top-2 right-2 sm:top-0 sm:right-2 opacity-90 group-hover:opacity-100 transition-opacity w-12 h-12 sm:w-16 sm:h-16 z-20">
              <Image src={iconSrc} alt="Completed" fill draggable={false} className="object-contain" />
           </div>
        </div>
        
        <div className="mt-auto mb-6 relative z-10 pb-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white transition-all duration-300">{title}</h3>
          <p className="text-white/60 leading-tight text-sm sm:text-base md:text-lg line-clamp-3 transition-all duration-300">{desc}</p>
        </div>
      </div>

      {/* Bottom Section: Image with Convex Arch - Takes up ~65% */}
      <div className="relative h-[65%] w-full z-10">
         {/* The Convex Container */}
         <div 
           className="absolute inset-0 w-full h-full overflow-hidden border-t border-white/10 bg-transparent"
           style={{
             borderTopLeftRadius: '50% 10%',  // Creates the convex arch
             borderTopRightRadius: '50% 10%', // Creates the convex arch
             borderBottomLeftRadius: '32px',  // Match card border radius
             borderBottomRightRadius: '32px', // Match card border radius
           }}
         > 
            {children}
            
            {/* Inner shadow for depth - Reduced opacity for clarity */}
            <div className="absolute inset-0 shadow-[inset_0_10px_40px_rgba(0,0,0,0.2)] pointer-events-none rounded-[inherit]" />
         </div>
      </div>
    </div>
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
          draggable={false}
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  )
}
