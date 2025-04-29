import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "spring" | "tween";
  distance?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "spring",
  distance = 20,
}: AnimatedSectionProps) {
  const getInitialDirection = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const getFinalDirection = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0 };
      case "left":
      case "right":
        return { x: 0 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        ...getInitialDirection()
      }}
      whileInView={{
        opacity: 1,
        ...getFinalDirection(),
        transition: {
          type,
          stiffness: type === "spring" ? 100 : undefined,
          damping: type === "spring" ? 20 : undefined,
          mass: type === "spring" ? 1.2 : undefined,
          duration: type === "tween" ? 0.6 : undefined,
          delay,
          ease: "easeOut"
        }
      }}
      viewport={{ margin: "-50px", once: false }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedFadeIn({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut"
        }
      }}
      viewport={{ margin: "-50px", once: false }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedScale({
  children,
  className = "",
  delay = 0,
  scale = 0.95
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        scale 
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1.2,
          delay,
          ease: "easeOut"
        }
      }}
      viewport={{ margin: "-50px", once: false }}
    >
      {children}
    </motion.div>
  );
} 