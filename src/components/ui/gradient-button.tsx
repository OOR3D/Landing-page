"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GradientButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode
  className?: string
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Button
          ref={ref}
          className={cn(
            "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700",
            "text-white font-medium",
            "border-0 rounded-full",
            "transition-all duration-300",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  }
)

GradientButton.displayName = "GradientButton"

export { GradientButton } 