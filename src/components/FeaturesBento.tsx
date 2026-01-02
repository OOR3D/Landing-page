'use client'

import { motion } from 'framer-motion'
import { Shirt } from 'lucide-react'
import Image from 'next/image'
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"

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
}

function BentoCard({ title, description, icon, imageSrc, className, delay = 0, bgColor, imageClassName }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative overflow-hidden rounded-[40px] flex flex-col justify-between h-full min-h-[450px] transition-transform duration-500 hover:scale-[1.02] shadow-2xl",
        bgColor,
        className
      )}
    >
      {/* Lighting Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-20" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-transparent pointer-events-none z-0" />

      
      {/* Image Layer - Massive & Breaking Frame */}
      <div className={cn("absolute inset-0 flex items-center justify-center z-10 pointer-events-none", imageClassName ? "" : "")}>
         {imageSrc ? (
           <div className={cn("relative w-full h-full", imageClassName)}>
             <Image 
               src={imageSrc} 
               alt={title} 
               fill 
               className="object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
               priority
             />
           </div>
         ) : (
            <div className="relative w-full h-full flex items-center justify-center">
               <div className="p-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl transform scale-150">
                 {icon}
               </div>
            </div>
         )}
      </div>

      {/* Content Layer */}
      <div className="relative z-20 mt-auto m-8 bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/5">
        <h3 className={`text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-md ${montserrat.className}`}>{title}</h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">{description}</p>
      </div>
      
    </motion.div>
  )
}

export default function FeaturesBento() {
  return (
    <section className="px-6 py-24 relative z-10">
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
            title="Browser Based"
            description="Forget 50GB downloads. Open OOR3D in Chrome and start creating immediately."
            imageSrc="/browser.png"
            className="md:col-span-2"
            delay={0.1}
            bgColor="bg-[#1e1b4b]" // Deep Indigo
            imageClassName="!w-[100%] !h-[100%] translate-y-8" // Full width
          />

          {/* Quick Export */}
          <BentoCard
            title="Lightning Fast Exports"
            description="Get game-ready assets in under 10 seconds."
            imageSrc="/rocket.png"
            delay={0.2}
            bgColor="bg-[#4c1d95]" // Rich Purple
            imageClassName="!w-[140%] !h-[140%] -translate-x-12 translate-y-16 rotate-12" // Pushing edges
          />

          {/* Universal Inventory */}
          <BentoCard
            title="Universal Inventory"
            description="Your personal digital vault. Store assets securely."
            imageSrc="/folder.png"
            delay={0.3}
            bgColor="bg-[#064e3b]" // Dark Emerald
            imageClassName="!w-[130%] !h-[130%] translate-x-8 translate-y-12" // Pushing edges
          />

          {/* Variety of Products - Large */}
          <BentoCard
            title="Curated Product Library"
            description="Start with professional-grade base models. Access a growing library of 3D assets ready for your unique touch."
            icon={<Shirt className="w-20 h-20 text-white" />}
            className="md:col-span-2"
            delay={0.4}
            bgColor="bg-[#7f1d1d]" // Deep Red
          />
        </div>
      </div>
    </section>
  )
}
