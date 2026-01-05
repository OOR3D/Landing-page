"use client"

import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Shield, Headphones, Database, Handshake } from 'lucide-react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

const features = [
  {
    title: "Protected by Design",
    description: "Your data, under your control. Private and safe by default. Security is never an afterthought.",
    icon: Shield,
    imagePath: "https://assets.oor3d.com/img/security/protected.png",
  },
  {
    title: "Support Next Door",
    description: "Real help from the people building OOR3D™. Talk directly to 3D specialists and the core team when you need it.",
    icon: Headphones,
    imagePath: "https://assets.oor3d.com/img/security/headset.png",
    containerClass: "scale-125",
    hoverScaleClass: "group-hover:scale-[1.35]",
  },
  {
    title: "Universal Inventory",
    description: "Everything you create is saved automatically in one place. Organize, revisit, and reuse your products, textures, and exports anytime.",
    icon: Database,
    imagePath: "https://assets.oor3d.com/img/security/cloud.png",
  },
  {
    title: "Partner in Creation",
    description: "We handle the tech. You focus on creating. We help you create faster and go further. You decide what you make and how far you take it.",
    icon: Handshake,
    imagePath: "https://assets.oor3d.com/img/security/spartnership.png",
  }
]

export default function SecurityFeatures() {
  return (
    <section className="px-6 py-16 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Vertical divider line - centered, with gaps at top and bottom */}
          <div 
            className="hidden md:block absolute left-1/2 top-[15%] bottom-[15%] w-px bg-white/10 -translate-x-1/2"
            aria-hidden="true"
          />
          {/* Horizontal divider line - centered, with gaps at left and right */}
          <div 
            className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-white/10 -translate-y-1/2"
            aria-hidden="true"
          />
          
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative flex flex-col md:flex-row items-center md:items-start gap-6 p-8 md:p-12 lg:p-16",
                // Mobile borders only (all except last have bottom border)
                index !== features.length - 1 && "border-b border-white/10 md:border-b-0"
              )}
            >
              {/* Icon Container - No Box */}
              <div className={cn(
                "relative shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center transition-transform duration-500 ease-out",
                // @ts-ignore
                feature.containerClass,
                // @ts-ignore
                feature.hoverScaleClass || "group-hover:scale-105"
              )}>
                {/* Hover Glow removed */}
                
                <div
                  className="relative w-full h-full"
                >
                  <Image 
                    src={feature.imagePath} 
                    alt={feature.title}
                    fill
                    draggable={false}
                    className={cn("object-contain", 
                      // @ts-ignore
                      feature.imageClass
                    )}
                  />
                </div>
              </div>

              <div className="flex-1 pt-4 text-center md:text-left max-w-md lg:max-w-xl relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white ${montserrat.className}`}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-white/60 leading-relaxed text-sm md:text-base"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
