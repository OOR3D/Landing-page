import { motion } from 'framer-motion'
import { Globe, Download } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GradientButton } from "@/components/ui/gradient-button"
import { scaleUp } from '@/lib/animations'

export default function NoDownloadsRequired() {
  return (
    <section className="relative overflow-hidden bg-[#0A0C13] py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#0A0C13] to-orange-900/20" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,50,0.1),transparent_70%)]"
      />

      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side with icon and text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="relative">
                {/* No Download Icon */}
                <div className="absolute -top-4 -left-4">
                  <div className="relative inline-flex items-center">
                    <Download className="w-6 h-6 text-red-400" />
                    <div className="h-0.5 w-full absolute bg-red-500/50" style={{ transform: 'rotate(-5deg)' }} />
                  </div>
                </div>

                {/* Main Circle with Text */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-lg font-bold">It's All</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 font-bold">Online</span>
                  </div>
                </div>

                {/* Globe Icon */}
                <div className="absolute -bottom-2 -right-2">
                  <Globe className="w-8 h-8 text-red-400" />
                </div>

                {/* Spinning Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-2 rounded-full bg-red-500/10 -z-10"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side with text and button */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                OOR3D™ REQUIRES ZERO DOWNLOADS OF ANY SOFTWARE.
              </h3>
            </motion.div>
            <GradientButton
              size="lg"
              asChild
            >
              <Link href="https://discord.gg/oor3d" target="_blank" rel="noopener noreferrer">
                Join Discord
              </Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
} 