'use client'

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { Shirt } from 'lucide-react'
import Image from 'next/image'
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from 'react'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

interface BentoCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  imageSrc?: string
  className?: string
  delay?: number
  bgColor: string
  imageClassName?: string
  allowOverflow?: boolean
  enableTravelAnimation?: boolean
  enableFloatAnimation?: boolean
  enablePulseAnimation?: boolean
  enableRotateAnimation?: boolean
  constrainBottom?: boolean
  sectionRef?: React.RefObject<HTMLElement | null>
  enableBlurOverlay?: boolean
  enableUpwardAnimation?: boolean
  imageAboveBlur?: boolean
  imageX?: number
  imageY?: number
}

function BentoCard({ title, description, icon, imageSrc, className, delay = 0, bgColor, imageClassName, allowOverflow = false, enableTravelAnimation = false, enableFloatAnimation = false, enablePulseAnimation = false, enableRotateAnimation = false, constrainBottom = false, sectionRef, enableBlurOverlay = false, enableUpwardAnimation = false, imageAboveBlur = false, imageX, imageY }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Scroll-based animation for rocket travel
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  // Travel animation values - rocket moves from left to right and up
  const travelX = enableTravelAnimation 
    ? useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [-600, -150, 48, 48, 300])
    : useMotionValue(0)
  
  const travelY = enableTravelAnimation
    ? useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [400, 100, -48, -48, -200])
    : useMotionValue(0)
  
  const travelRotate = enableTravelAnimation
    ? useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [-40, -5, 12, 12, 40])
    : useMotionValue(0)
  
  const travelScale = enableTravelAnimation
    ? useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [1.8, 1.8, 1.8, 1.8, 1.8])
    : useMotionValue(1.8)

  // Upward animation values - image comes up from bottom
  const upwardY = enableUpwardAnimation
    ? useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [930, 680, 680, 630])
    : useMotionValue(0)
    
  const upwardScale = enableUpwardAnimation
    ? useTransform(scrollYProgress, [0, 1], [1.1, 1.2])
    : useMotionValue(1)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative rounded-[40px] flex flex-col justify-between h-full min-h-[450px] transition-transform duration-500 hover:scale-[1.02] shadow-2xl",
        allowOverflow ? "overflow-visible" : "overflow-hidden",
        bgColor,
        className
      )}
    >
      {/* Premium Border Overlay */}
      <div className="absolute inset-0 rounded-[40px] border border-white/40 mix-blend-overlay pointer-events-none z-[5]" />

      {/* Lighting Effects - Constrained to box */}
      <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-20" />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-0" />
      </div>

      
      {/* Image Layer - Massive & Breaking Frame */}
      <div 
        className={cn(
          "absolute inset-0 flex pointer-events-none",
          imageAboveBlur ? "z-[16]" : "z-10",
          constrainBottom ? "items-end justify-center" : "items-center justify-center",
          imageClassName ? "" : ""
        )}
        style={allowOverflow && constrainBottom ? { clipPath: 'inset(-200% -200% 0% -200% round 40px)' } : undefined}
      >
         {imageSrc ? (
           <motion.div 
             className={cn("relative", enableTravelAnimation || enableUpwardAnimation ? "" : imageClassName)}
             initial={
               enableTravelAnimation 
                 ? { x: -600, y: 400, rotate: -40, scale: 1.8, filter: "blur(20px)", opacity: 0 } 
                 : enableUpwardAnimation 
                 ? { y: 930, scale: 1.1, filter: "blur(20px)", opacity: 0 } 
                 : { filter: "blur(20px)", opacity: 0, scale: 0.8 }
             }
             whileInView={
               enableTravelAnimation || enableUpwardAnimation 
                 ? { filter: "blur(0px)", opacity: 1 }
                 : { filter: "blur(0px)", opacity: 1, scale: 1 }
             }
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             animate={
               enableFloatAnimation 
                 ? { 
                     y: [0, -20, 0],
                     transition: { 
                       duration: 3, 
                       repeat: Infinity, 
                       ease: "easeInOut" 
                     } 
                   }
                 : enablePulseAnimation
                 ? {
                     scale: [1, 1.05, 1],
                     transition: {
                       duration: 2,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }
                   }
                 : enableRotateAnimation
                 ? {
                     rotate: [0, 5, -5, 0],
                     transition: {
                       duration: 4,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }
                   }
                 : undefined
             }
             style={enableTravelAnimation ? {
               x: travelX,
               y: travelY,
               rotate: travelRotate,
               scale: travelScale,
             } : enableUpwardAnimation ? {
               y: upwardY,
               scale: upwardScale,
             } : {
               ...(imageX !== undefined && { x: imageX }),
               ...(imageY !== undefined && { y: imageY }),
             }}
           >
             <Image 
               src={imageSrc} 
               alt={title} 
               width={2000}
               height={2000}
               draggable={false}
               className="object-contain drop-shadow-2xl transition-transform duration-700"
               priority
             />
           </motion.div>
         ) : (
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              animate={
                enablePulseAnimation
                  ? {
                      scale: [1, 1.1, 1],
                      transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  : undefined
              }
            >
               <div className="p-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl transform scale-150">
                 {icon}
               </div>
            </motion.div>
         )}
      </div>

      {/* Blur overlay at bottom for text focus */}
      {enableBlurOverlay && (
        <div 
          className="absolute inset-x-0 bottom-0 h-48 backdrop-blur-lg pointer-events-none z-[15] rounded-b-[40px]"
          style={{
            maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)'
          }}
        />
      )}

      {/* Content Layer */}
      <div className="relative z-20 mt-auto m-8">
        <h3 className={`text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-md ${montserrat.className}`}>{title}</h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">{description}</p>
      </div>
      
    </motion.div>
  )
}

export default function FeaturesBento() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="px-6 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${montserrat.className}`}>
            Everything you need to create
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Powerful tools built directly into your browser. No expensive hardware required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(500px,auto)]">
          {/* Browser Based - Large */}
          <BentoCard
            title="Browser-based"
            description="Get direct access to OOR3D from your browser. No installs required."
            imageSrc="/browser.png"
            className="md:col-span-2"
            delay={0.1}
            bgColor="bg-[#1e1b4b]" // Deep Indigo
            enableBlurOverlay={true}
            imageClassName="!w-[100%] !h-[100%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" // Full width
            imageX={24}
            imageY={-40}
          />

          {/* Quick Export */}
          <BentoCard
            title="Fast Exports"
            description="Get the right file for your target game in seconds."
            imageSrc="/rocket.png"
            className="z-20"
            delay={0.2}
            bgColor="bg-[#4c1d95]" // Rich Purple
            allowOverflow={true}
            enableTravelAnimation={true}
            sectionRef={sectionRef}
            enableBlurOverlay={true}
            imageClassName="scale-[1.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" // Base scale, travel animation handles position
          />

          {/* Universal Inventory */}
          <BentoCard
            title="Asset Management"
            description="Store, organize, and manage all your products, textures, and files in one secure place."
            imageSrc="/folder-1.png"
            delay={0.3}
            bgColor="bg-[#064e3b]" // Dark Emerald
            enableBlurOverlay={true}
            imageClassName="!w-[100%] !h-[100%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" // Centered, positioned lower
            imageY={60}
          />

          {/* Variety of Products - Large */}
          <BentoCard
            title="Curated Product Library"
            description="Start with professional-grade base models. Access a growing library of 3D assets ready for your unique touch."
            imageSrc="/MULTIPLE PRODUCTS NEW.png"
            className="md:col-span-2 z-20"
            delay={0.4}
            bgColor="bg-[#7f1d1d]" // Deep Red
            allowOverflow={true}
            constrainBottom={true}
            enableBlurOverlay={true}
            enableUpwardAnimation={true}
            imageClassName="!w-[120%] !h-[120%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}
