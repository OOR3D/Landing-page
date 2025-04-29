"use client"

import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Users, Palette, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Montserrat } from "next/font/google"
import NavigationWrapper from "@/components/NavigationWrapper"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function ContestPage() {
  // Contest end date: May 14, 2025
  const endDate = new Date("2025-05-14T23:59:59")
  const [daysRemaining, setDaysRemaining] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference <= 0) {
        setIsActive(false)
        setDaysRemaining(0)
      } else {
        setIsActive(true)
        const actualDays = Math.floor(difference / (1000 * 60 * 60 * 24))
        
        // Animate the countdown
        setIsAnimating(true)
        let start = Math.min(actualDays + 50, 365)
        const duration = 2000 // 2 seconds
        const interval = 30 // Update every 30ms
        const steps = duration / interval
        const decrement = (start - actualDays) / steps

        let current = start
        const countDown = setInterval(() => {
          current -= decrement
          if (current <= actualDays) {
            clearInterval(countDown)
            setDaysRemaining(actualDays)
            setIsAnimating(false)
          } else {
            setDaysRemaining(Math.round(current))
          }
        }, interval)

        return () => clearInterval(countDown)
      }
    }

    calculateTimeRemaining()
    const timer = setInterval(calculateTimeRemaining, 86400000)
    return () => clearInterval(timer)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // IMVU product data - organized in vertical columns
  const meshColumns = [
    [
      {
        title: "Aya LLT E Boot-Cut",
        url: "https://www.imvu.com/shop/product.php?products_id=70918757",
        imageUrl: "/7.png",
      },
      {
        title: "Eve Short Dress",
        url: "https://www.imvu.com/shop/product.php?products_id=70918818",
        imageUrl: "/8.png",
      },
    ],
    [
      {
        title: "Informal Hoodie",
        url: "https://www.imvu.com/shop/product.php?products_id=70567526",
        imageUrl: "/3.png",
      },
      {
        title: "Denim Jean",
        url: "https://www.imvu.com/shop/product.php?products_id=71049285",
        imageUrl: "/4.png",
      },
    ],
    [
      {
        title: "Up Shirt + Bra",
        url: "https://www.imvu.com/shop/product.php?products_id=70614229",
        imageUrl: "/1.png",
      },
      {
        title: "Open Home Pants",
        url: "https://www.imvu.com/shop/product.php?products_id=70614256",
        imageUrl: "/2.png",
      },
    ],
    [
      {
        title: "Open Sport Jacket",
        url: "https://www.imvu.com/shop/product.php?products_id=67558844",
        imageUrl: "/6.png",
      },
      {
        title: "Sport Shorts",
        url: "https://www.imvu.com/shop/product.php?products_id=67558868",
        imageUrl: "/5.png",
      },
    ],
  ]

  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-[#0A0C13] text-white [&_*]:cursor-none">
        {/* Hero Section */}
        <style jsx global>{`
          @keyframes breathe {
            0%, 100% {
              background-color: rgba(34, 197, 94, 0.1);
              border-color: rgba(34, 197, 94, 0.3);
            }
            50% {
              background-color: rgba(34, 197, 94, 0.15);
              border-color: rgba(34, 197, 94, 0.4);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(34, 197, 94, 0.2);
            }
            50% {
              box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
            }
          }

          .active-tag {
            animation: breathe 3s ease-in-out infinite,
                      glow 3s ease-in-out infinite;
          }
        `}</style>

        <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20 z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)] z-0"
          />

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Active Status */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="active-tag inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-400/30">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                    Active
                  </span>
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`text-5xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
              >
                OOR3D™ Creator Contest V.1
              </motion.h1>

              {/* Countdown Timer */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-300 mb-12"
                >
                  {daysRemaining} days until it's over
                </motion.div>
              )}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto mb-4"
              >
                Create for IMVU and win real prizes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <GradientButton
                  size="lg"
                  asChild
                  disabled={!isActive}
                >
                  <Link href="https://discord.gg/oor3d" target="_blank">
                    {isActive ? "Start the Challenge" : "Contest Ended"}
                  </Link>
                </GradientButton>
              </motion.div>
            </div>
          </div>

          {/* Enhanced bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0A0C13]/80 to-[#0A0C13]" />
        </section>

        {/* How to Enter Section */}
        <section className="relative py-20 bg-[#0A0C13]">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0C13] via-[#0A0C13] to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className={`text-3xl md:text-4xl font-bold mb-12 text-center ${montserrat.className}`}
              >
                🌿 How to Enter
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <StepCard
                  number={1}
                  title="Invite Friends"
                  description="Invite at least 3 friends to the OOR3D™ Discord server."
                  icon={<Users className="w-16 h-16 text-red-400" />}
                />
                <StepCard
                  number={2}
                  title="Create Your Design"
                  description="Derive a design from the provided IMVU products."
                  icon={<Palette className="w-16 h-16 text-orange-400" />}
                />
                <StepCard
                  number={3}
                  title="Submit Your Work"
                  description="Submit your final work inside the Discord."
                  icon={<Send className="w-16 h-16 text-amber-400" />}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#0A0C13] to-[#0A0C13]" />
        </section>

        {/* Prizes Section */}
        <section className="py-20 bg-[#0A0C13]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className={`text-3xl md:text-4xl font-bold mb-4 text-center ${montserrat.className}`}
              >
                Prizes
              </motion.h2>
              <motion.p
                className="text-xl text-center mb-4 text-orange-300"
              >
                Win real cash and IMVU prizes!
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-3xl mx-auto space-y-6 px-4 py-8"
              >
                <PrizeCard
                  place="1st Place"
                  emoji="🥇"
                  prize="💰 $100 USD (Via Paypal)"
                  bgClass="from-red-500/20 to-orange-500/20 border-red-500/30"
                  index={0}
                />
                <PrizeCard
                  place="2nd Place"
                  emoji="🥈"
                  prize="💳 $50 IMVU Gift Card (6 months Platinum VIP or 44K credits)"
                  bgClass="from-red-500/20 to-orange-500/20 border-red-500/30"
                  index={1}
                />
                <PrizeCard
                  place="3rd Place"
                  emoji="🥉"
                  prize="💳 $20 IMVU Gift Card (3 months Platinum VIP or 20K credits)"
                  bgClass="from-red-500/20 to-orange-500/20 border-red-500/30"
                  index={2}
                />
                <PrizeCard
                  place="4th Place"
                  emoji="🏅"
                  prize="💳 $20 IMVU Gift Card (3 months Platinum VIP or 20K credits)"
                  bgClass="from-red-500/20 to-orange-500/20 border-red-500/30"
                  index={3}
                />
                <PrizeCard
                  place="5th Place"
                  emoji="🏅"
                  prize="💳 $20 IMVU Gift Card (3 months Platinum VIP or 20K credits)"
                  bgClass="from-red-500/20 to-orange-500/20 border-red-500/30"
                  index={4}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="relative py-20 bg-[#0A0C13]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className={`text-3xl md:text-4xl font-bold mb-12 text-center ${montserrat.className}`}
              >
                IMVU Products to Derive From
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {meshColumns.map((column, colIndex) => (
                  <div key={`column-${colIndex}`} className="flex flex-col gap-6">
                    {column.map((mesh, meshIndex) => {
                      let objectPositionClass = "object-[50%_10%]";
                      if (mesh.imageUrl === "/1.png") {
                        objectPositionClass = "object-[50%_45%]";
                      } else if (mesh.imageUrl === "/3.png") {
                        objectPositionClass = "object-[50%_20%]";
                      } else if (mesh.imageUrl === "/5.png") {
                        objectPositionClass = "object-[50%_55%]";
                      } else if (mesh.imageUrl === "/6.png") {
                        objectPositionClass = "object-[50%_52%]";
                      }

                      return (
                        <MeshCard
                          key={`mesh-${colIndex}-${meshIndex}`}
                          title={mesh.title}
                          imageUrl={mesh.imageUrl}
                          url={mesh.url}
                          objectPositionClass={objectPositionClass}
                        />
                      )
                    })}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#0A0C13] to-[#0A0C13]" />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900/30 via-[#0A0C13] to-orange-900/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className={`text-3xl md:text-4xl font-bold mb-6 text-center ${montserrat.className}`}
              >
                Ready to showcase your creativity on IMVU?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              >
                Join our Discord and enter the OOR3D™ Creator Contest today!
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton
                  size="lg"
                  asChild
                  disabled={!isActive}
                >
                  <Link href="https://discord.gg/oor3d" target="_blank">
                    {isActive ? "Join the Contest" : "Contest Ended"}
                  </Link>
                </GradientButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </NavigationWrapper>
  )
}

// Define prop types for StepCard
interface StepCardProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

// Component for each step card
function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.2), 0 10px 10px -5px rgba(239, 68, 68, 0.1)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#0A0C13]/40 rounded-xl p-6 border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#0A0C13]/60 flex items-center justify-center mb-4 text-xl font-bold">
          {number}
        </div>
        <div className="mb-6 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

// Define prop types for PrizeCard
interface PrizeCardProps {
  place: string
  emoji: string
  prize: string
  bgClass: string
  index: number
}

// Component for each prize card
function PrizeCard({ place, emoji, prize, bgClass, index }: PrizeCardProps) {
  const scale = 1 - (index * 0.03);
  const blur = index === 0 ? 0 : index * 0.5;
  const bgOpacity = index === 0 ? 0.4 : 0.4 - (index * 0.05);
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { 
          opacity: 0,
          x: -20, 
          scale: scale * 0.8,
          y: 50
        },
        visible: { 
          opacity: 1,
          x: 0, 
          scale: scale,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 400 - (index * 50),
            damping: 30,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{
        scale: scale + 0.02,
        transition: { duration: 0.2 },
      }}
      className={`p-6 rounded-lg bg-gradient-to-r border relative overflow-hidden mx-auto w-full max-w-2xl`}
      style={{
        transformOrigin: "center",
        background: `linear-gradient(to right, rgba(239, 68, 68, 0), rgba(249, 115, 22, 0))`,
        borderColor: 'rgba(239, 68, 68, 0)'
      }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: index * 0.1
          }
        }}
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(239, 68, 68, ${bgOpacity}), rgba(249, 115, 22, ${bgOpacity}))`,
          backdropFilter: `blur(${blur}px)`
        }}
      />
      <div className="relative flex items-center gap-4">
        <motion.div
          initial={{ rotate: -10 }}
          whileHover={{ rotate: 10, scale: 1.2 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="text-4xl mr-3"
        >
          {emoji}
        </motion.div>
        <div className="flex-1">
          <motion.h3 
            className={`font-bold text-xl mb-1 ${index === 0 ? 'text-amber-400' : 'text-white'}`}
          >
            {place}
          </motion.h3>
          <motion.p 
            className="text-white text-lg"
          >
            {prize}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

// Define prop types for MeshCard
interface MeshCardProps {
  title: string
  imageUrl: string
  url: string
  objectPositionClass?: string
}

// Component for each mesh card
function MeshCard({ title, imageUrl, url, objectPositionClass = "object-[50%_10%]" }: MeshCardProps) {
  // Extract product ID from the URL
  const productId = url.split('products_id=')[1];
  const deriveUrl = `imvu:DeriveProduct?product_id=${productId}`;

  const handleDerive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = deriveUrl;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative z-10 bg-gray-900 border-gray-800 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] rounded-3xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative h-48 bg-gray-800 rounded-t-3xl"
        >
          <Image 
            src={imageUrl || "/placeholder.svg"} 
            alt={title} 
            fill 
            className={`object-cover ${objectPositionClass} rounded-t-3xl`}
            priority
          />
        </motion.div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0 gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline" size="sm" className="text-gray-400 border-gray-700 rounded-full" asChild>
              <Link href={url} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on IMVU
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-red-400 border-red-700/50 hover:bg-red-950/30 rounded-full"
              onClick={handleDerive}
            >
              <Palette className="w-4 h-4 mr-2" />
              Derive
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
