"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import LoadingScreen from '@/components/LoadingScreen'
import { fadeIn, scaleUp } from '@/lib/animations'
import NavigationWrapper from "@/components/NavigationWrapper"
import Image from 'next/image'
import PrelaunchMission from '@/components/PrelaunchMission'
import FAQSection from '@/components/FAQSection'
import { HelpCircle } from 'lucide-react'
import NoDownloadsRequired from '@/components/NoDownloadsRequired'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function HomePage() {
  const [showContent, setShowContent] = useState(true) // Default to true to avoid flash
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsVideoMuted(!isVideoMuted)
    }
  }

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore')
    
    if (!hasVisited) {
      // If first visit, show loading screen and set flag
      setShowContent(false)
      const timer = setTimeout(() => {
        setShowContent(true)
        localStorage.setItem('hasVisitedBefore', 'true')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!showContent) {
    return <LoadingScreen />
  }

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-[#0A0C13] text-white [&_*]:cursor-none">
        {/* Background Glow Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Top-right glow */}
          <div className="absolute -top-[30%] right-[10%] w-[50rem] h-[50rem] bg-red-500/20 rounded-full blur-[10rem] animate-pulse" />
          {/* Left-center glow */}
          <div className="absolute top-[30%] -left-[20%] w-[40rem] h-[40rem] bg-orange-500/20 rounded-full blur-[10rem] animate-pulse" style={{ animationDelay: '1s' }} />
          {/* Bottom-right glow */}
          <div className="absolute bottom-[10%] right-[20%] w-[45rem] h-[45rem] bg-red-500/20 rounded-full blur-[10rem] animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Center glow */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-orange-500/10 rounded-full blur-[10rem] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10 text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full text-sm font-semibold text-orange-400 border border-orange-500/20 backdrop-blur-xl">
                PRELAUNCH
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`text-5xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} pb-2`}
            >
              Create 3D Products for the Virtual World
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              custom={1}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              OOR3D™ makes it easy to design and customize virtual products for IMVU, Second Life, Sims 4, and more — no complicated software, no technical experience needed.
            </motion.h2>

            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-4 mb-16"
            >
              <GradientButton
                size="lg"
                asChild
              >
                <Link href="/early-access">
                  Get Started
                </Link>
              </GradientButton>
            </motion.div>

            {/* Trust Bar Section - Moved inside hero */}
            <motion.div
              variants={fadeIn}
              custom={3}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <div className="text-center mb-8">
                <h2 className="text-xl font-medium tracking-wide text-white/90 mb-2">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-sm text-gray-400 tracking-wide max-w-2xl mx-auto">
                  Innovating a new standard for creation in virtual spaces, powered by global pioneers of technology.
                </p>
              </div>

              {/* Infinite scroll container */}
              <div className="relative flex justify-center overflow-hidden">
                <div className="max-w-4xl relative mx-auto w-full">
                  <div className="flex justify-center overflow-hidden whitespace-nowrap py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent_100%)]">
                    <motion.div 
                      className="flex items-center gap-16 px-16"
                      animate={{
                        x: [0, -3280]
                      }}
                      transition={{
                        x: {
                          duration: 40,
                          ease: "linear",
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 0
                        }
                      }}
                      style={{
                        width: "fit-content"
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((set) => (
                        <div key={set} className="flex items-center justify-center gap-16">
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
                              key={index} 
                              className="flex items-center justify-center mx-4 opacity-90 hover:opacity-100 transition-opacity"
                            >
                              <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 w-auto text-white"
                                width={100}
                                height={40}
                                style={{
                                  filter: 'brightness(0) invert(1)',
                                  objectFit: 'contain',
                                  maxWidth: 'none'
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Create Without Complexity Section */}
        <section className="relative bg-[#0A0C13] py-32">
          {/* Section-specific glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[30%] w-[30rem] h-[30rem] bg-red-500/10 rounded-full blur-[8rem] animate-pulse" />
            <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[8rem] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className={`text-4xl md:text-6xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className} pb-2`}>
                Skip the complexity.
                <br />
                Start bringing your ideas to life.
              </h2>
            </motion.div>

            {/* Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative max-w-[120rem] mx-auto aspect-[16/9] mb-24 group"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden z-10">
                <Image
                  src="/dashboard.png"
                  alt="OOR3D Dashboard"
                  fill
                  className="object-cover [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]"
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 1920px"
                  loading="eager"
                  unoptimized={true}
                />
              </div>
              {/* External Border */}
              <div className="absolute -inset-4 border-2 border-white/20 rounded-[2rem] z-20" />
            </motion.div>

            {/* Text Content */}
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-4xl text-white font-semibold mb-8"
              >
                You don't need to learn complicated software to create products for your avatar anymore.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-xl md:text-2xl text-gray-300 mb-12"
              >
                OOR3D™ makes it easy to design and customize 3D items for the virtual worlds you already play in.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="pt-4"
              >
                <GradientButton
                  size="lg"
                  asChild
                  className="text-xl py-6 px-12"
                >
                  <Link href="/early-access">
                    Create Now!
                  </Link>
                </GradientButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="relative bg-[#0A0C13] py-24">
          {/* Section-specific glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[30%] right-[20%] w-[40rem] h-[40rem] bg-red-500/10 rounded-full blur-[8rem] animate-pulse" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-4xl text-white font-semibold"
              >
                Compatible with IMVU
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-2xl md:text-3xl text-gray-300"
              >
                with plans to extend compatibility to
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-4xl text-white font-semibold"
              >
                Second Life, Sims 4, Roblox, Inzoi, GTA 6
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-2xl md:text-3xl text-gray-300"
              >
                and more virtual worlds to come
              </motion.p>
            </div>
          </div>
        </section>

        {/* No Downloads Required Section - Floating Style */}
        <section className="relative bg-[#0A0C13] py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0A0C13] border border-red-500/20">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20" />
                
                {/* Content */}
                <div className="relative flex items-center justify-center gap-16 p-16">
                  <div className="flex items-center gap-24 max-w-5xl">
                    {/* Left side with icons */}
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Main container for all elements */}
                      <div className="relative w-64 h-64">
                        {/* Spinning dashed circle only */}
                        <div className="absolute inset-0 border-2 border-dashed border-red-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                        
                        {/* Static content container */}
                        <div className="absolute inset-0">
                          {/* No Download Icon - Top Left */}
                          <div className="absolute -top-6 -left-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                              <line x1="4" y1="4" x2="20" y2="20" />
                            </svg>
                          </div>

                          {/* Globe Icon - Bottom Right */}
                          <div className="absolute -bottom-6 -right-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="2" y1="12" x2="22" y2="12" />
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                          </div>

                          {/* Static centered text */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center whitespace-nowrap">
                              <span className="text-xl font-bold text-white">It's All </span>
                              <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 font-bold">Online</span>
                            </div>
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-red-500/10 blur-sm" />
                      </div>
                    </motion.div>

                    {/* Right side with text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="flex-1"
                    >
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                      >
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}>
                          OOR3D™ requires no downloads of any softwares.
                        </span>
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <GradientButton
                          size="lg"
                          asChild
                          className="text-xl py-6 px-12"
                        >
                          <Link href="/early-access">
                            Take me there!
                          </Link>
                        </GradientButton>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative bg-[#0A0C13] py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
              >
                A New Era
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-gray-300 text-center mb-12"
              >
                The Way You Create Is About To Change Forever.
              </motion.p>

              {/* Video Container */}
              <div className="max-w-sm mx-auto relative rounded-3xl bg-[#0A0C13] border border-red-500/20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20" />
                
                {/* Video */}
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="https://publicmediaok.s3.amazonaws.com/OOR3D+PRELAUNCH+TEASER+(1).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Audio Toggle Button */}
                  <button
                    onClick={toggleAudio}
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 border border-red-500/20 text-white group hover:scale-125 z-10"
                    aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-1000 z-20 translate-x-[-50%]">
                      <div className="relative">
                        <div className="bg-black/90 text-white text-sm px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
                          {isVideoMuted ? "Unmute" : "Mute"}
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute -bottom-1 right-4 border-4 border-transparent border-t-black/90" />
                      </div>
                    </div>

                    {isVideoMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Prelaunch Mission Section */}
        <section className="relative bg-[#0A0C13] py-24 overflow-hidden">
          {/* Section-specific glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] bg-orange-500/10 rounded-full blur-[8rem] animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-red-500/10 rounded-full blur-[8rem] animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
              >
                Prelaunch Mission
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center space-y-6 text-xl text-gray-300"
              >
                <p>We're in the building phase of OOR3D™.</p>
                <p>We're building in public so creators like you can get involved early.</p>
                <p>Whether you're just starting out or you're a seasoned pro, you're in the right place.</p>
              </motion.div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission Item 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    y: [0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-[2rem] p-8 border border-red-500/20 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-white">Early Access</h3>
                  <p className="text-gray-300 text-center">Join our exclusive early access program and be among the first to experience the future of 3D content creation.</p>
                </motion.div>

                {/* Mission Item 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    y: [0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-[2rem] p-8 border border-red-500/20 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-white">Community Building</h3>
                  <p className="text-gray-300 text-center">Help shape the future of OOR3D™ by providing feedback and connecting with fellow creators.</p>
                </motion.div>

                {/* Mission Item 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    y: [0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }
                  }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-[2rem] p-8 border border-red-500/20 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-white">Platform Growth</h3>
                  <p className="text-gray-300 text-center">Be part of our journey as we expand to support more virtual worlds and creative possibilities.</p>
                </motion.div>
              </div>
            </div>

            {/* Discord Section */}
            <div className="max-w-4xl mx-auto mt-32 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-12 border border-red-500/20 text-center relative overflow-hidden backdrop-blur-xl"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)]" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h3 className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}>
                    Join Our Discord Community
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    This server is your home base if you want to shape the platform, influence what gets built, and lead the next era of creating.
                  </p>
                  <GradientButton
                    size="lg"
                    asChild
                    className="text-xl py-6 px-12"
                  >
                    <Link href="https://discord.gg/oor3d" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                        Join Discord
                      </div>
                    </Link>
                  </GradientButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Rest of the content */}
      </main>
    </NavigationWrapper>
  );
}