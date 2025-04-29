"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface EarlyAccessPopupProps {
  onClose: () => void
}

export default function EarlyAccessPopup({ onClose }: EarlyAccessPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0a0c13] p-8 rounded-2xl border border-gray-800 max-w-sm mx-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Coming Soon!</h2>
        <p className="text-gray-300 mb-6">
          Early access registration will be available soon. Join our Discord community to stay updated and be the first to know when it launches!
        </p>
        <div className="space-y-4">
          <Button
            className="w-full bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3C45A5] text-white border-0 rounded-full"
            asChild
          >
            <Link href="https://discord.gg/oor3d" target="_blank">
              Join Discord Community
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full text-gray-400 hover:text-white"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
} 