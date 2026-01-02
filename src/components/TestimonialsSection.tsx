'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

interface Testimonial {
  name: string
  location: string
  text: string
  role?: string
  imageUrl?: string
}

// Generate a consistent color based on name
const getColorForName = (name: string): string => {
  const colors = [
    'from-[#FF4AE7]/20 to-[#FE0101]/20',
    'from-[#5865F2]/20 to-[#FF4AE7]/20',
    'from-[#FE0101]/20 to-[#FF8CEA]/20',
    'from-[#8B5CF6]/20 to-[#FF4AE7]/20',
    'from-[#EC4899]/20 to-[#FE0101]/20',
    'from-[#F59E0B]/20 to-[#EF4444]/20',
    'from-[#10B981]/20 to-[#3B82F6]/20',
    'from-[#6366F1]/20 to-[#8B5CF6]/20',
  ]
  
  // Simple hash function to get consistent color for same name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

const testimonials: Testimonial[] = [
  {
    name: "Bo Life",
    location: "US",
    text: "amazing and fast reponses",
    role: "Creator",
    imageUrl: "https://user-images.trustpilot.com/690292d74064146b262964e8/73x73.png"
  },
  {
    name: "Kleix 鬼侍",
    location: "JP",
    text: "I'm really satisfied with OUTOFREACH3D. From the very beginning, their customer service was excellent, always responding quickly and kindly. On top of that, their 3D products are of amazing quality — definitely some of the best I've seen. Highly recommended!",
    role: "3D Artist",
    imageUrl: "https://user-images.trustpilot.com/5f6b9f20d41eaabb93083021/73x73.png"
  },
  {
    name: "Ka Dior",
    location: "US",
    text: "Xenobiii(hismuvaa) amazing service ! Thank you for taking the time out of your day to make my designs come true ! I appreciate it❤️‍🩹",
    role: "Creator",
    imageUrl: "https://user-images.trustpilot.com/68b8516227764a1c0157c3b2/73x73.png"
  },
  {
    name: "Sia",
    location: "US",
    text: "Out of reach & Out of this world quality! Very Hardworking, Creative, Clean work/quality, Excellent communication, Organized and easy to work with.",
    role: "Creator"
  },
  {
    name: "Lintru Arslan Imvu",
    location: "FR",
    text: "Good quality, listening, highly recommend !",
    role: "Creator"
  },
  {
    name: "Zyh Files",
    location: "US",
    text: "This team is incredible! Their work is top quality, and they're always so kind and helpful. They take the time to assist with any questions and truly care about delivering great results. Highly recommend working with them!",
    role: "Creator"
  },
  {
    name: "BD IMVU",
    location: "AR",
    text: "Very professional company with an amazing team! Their teamwork is very nice and synchronized allowing a good development at the time of working with them",
    role: "Creator"
  },
  {
    name: "DayI",
    location: "",
    text: "Professional team that guide you with patience, fast response. Easy to understand the point that I'm learning as a new mesher.",
    role: "Creator"
  },
  {
    name: "Kapri DRVS",
    location: "US",
    text: "been searching for a good quality mesher for about a year until i found outofreach3d! and then till this day i've been with them ever since! quality is amazing and prices are reasonable & service is very good.",
    role: "Creator"
  },
  {
    name: "Jessie",
    location: "US",
    text: "Great experience so far! The platform is easy to use, and the team is very helpful and quick to respond. You can tell they care about their users, and they're always working to improve. Definitely recommend!",
    role: "Creator"
  },
  {
    name: "Stayer IMVU",
    location: "CA",
    text: "Very professional team",
    role: "Creator"
  },
]

export default function TestimonialsSection() {
  const [api, setApi] = useState<any>()
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  // Auto-scroll every 10 seconds
  useEffect(() => {
    if (!api || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      api?.scrollNext()
    }, 10000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [api, isPaused])

  // Pause on hover/interaction
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section className="relative py-32">
      {/* Section-specific glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[30rem] h-[30rem] bg-[#FF4AE7]/10 rounded-full blur-[8rem] animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] bg-[#FE0101]/10 rounded-full blur-[8rem] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div 
        className="container mx-auto px-4 relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Introduction Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-5xl font-bold text-white ${montserrat.className}`}
          >
            Built by Veterans of the Metaverse
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Made by the team at <span className="text-[#FF4AE7] font-semibold">OUTOFREACH Inc.</span>, with decades of experience creating content for virtual worlds like <span className="text-white font-medium">IMVU</span> and <span className="text-white font-medium">Second Life</span>.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex items-center justify-center gap-3"
          >
             <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
             <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
               Hear what the community has to say
             </p>
             <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
          </motion.div>
        </div>

        {/* Trustpilot Attribution */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 max-w-5xl mx-auto">
          <a
            href="https://www.trustpilot.com/review/outofreach3d.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Reviews from</span>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group-hover:bg-white/10">
              {/* Trustpilot stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L7.5 4.5L12 4.5L8.5 7.5L10 12L6 9L2 12L3.5 7.5L0 4.5L4.5 4.5L6 0Z" fill="#00B67A"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-white">Trustpilot</span>
              <span className="text-xs text-white/60">4.4/5</span>
            </div>
          </a>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Carousel with testimonials */}
            <div className="relative w-full">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
              <CarouselContent className="-ml-0">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative bg-gradient-to-br from-[#1a1533] to-[#0d091f] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-center overflow-hidden group hover:border-white/10 transition-colors duration-500"
                    >
                      {/* Background Quote Icon */}
                      <div className="absolute top-6 right-8 text-white/5 transform rotate-12 scale-150 pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                        <Quote size={120} fill="currentColor" />
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Star rating */}
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#FF4AE7] text-[#FF4AE7] drop-shadow-[0_0_8px_rgba(255,74,231,0.4)]"
                            />
                          ))}
                        </div>
                        
                        {/* Text */}
                        <blockquote className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8 flex-grow">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />

                        {/* Author info */}
                        <div className="flex items-center gap-4">
                          {/* Profile picture */}
                          <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg ${testimonial.imageUrl ? '' : `bg-gradient-to-br ${getColorForName(testimonial.name)}`}`}>
                            {testimonial.imageUrl ? (
                              <Image
                                src={testimonial.imageUrl}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            ) : (
                              <span className="text-white text-base font-bold">
                                {testimonial.name.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                          
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h4 className="text-white font-bold text-base tracking-wide">
                                {testimonial.name}
                              </h4>
                              {/* Verified badge */}
                              <div className="w-4 h-4 rounded-full bg-[#FF4AE7] flex items-center justify-center flex-shrink-0" title="Verified Review">
                                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-white/40 text-xs uppercase tracking-wider font-medium">
                              {testimonial.role || 'Creator'}
                              {testimonial.location && ` • ${testimonial.location}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              </Carousel>
            </div>

            {/* Right side - Fixed Branding */}
            <div className="flex flex-col items-center lg:items-end justify-center py-8 lg:py-0">
              <div className="relative">
                {/* Background decorative element */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#FF4AE7]/5 to-[#FE0101]/5 rounded-[32px] blur-2xl" />
                
                <div className="relative space-y-3 md:space-y-4 lg:space-y-5">
                  {/* "Loved" text with accent */}
                  <div className="flex items-end gap-3 justify-end">
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white ${montserrat.className} leading-tight`}>
                      Loved
                    </h3>
                    <div className="w-1 h-12 md:h-16 lg:h-20 bg-gradient-to-b from-[#FF4AE7] to-[#FE0101] rounded-full" />
                  </div>
                  
                  {/* "By" text */}
                  <h3 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/90 ${montserrat.className} leading-tight text-right`}>
                    By
                  </h3>
                  
                  {/* "Creators" text with underline accent */}
                  <div className="relative">
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4AE7] to-[#FE0101] ${montserrat.className} leading-tight text-right`}>
                      Creators
                    </h3>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4AE7] to-[#FE0101] rounded-full opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls - Bottom right */}
        <div className="flex justify-end gap-2 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-[#150a2e]/50 backdrop-blur-xl border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-[#150a2e]/50 backdrop-blur-xl border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

