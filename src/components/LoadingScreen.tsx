"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CustomCursor from './CustomCursor'

export default function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    let startCount = 0;
    const interval = setInterval(() => {
      if (startCount < 100) {
        // Random increment between 1 and 3
        const increment = Math.floor(Math.random() * 3) + 1;
        startCount = Math.min(100, startCount + increment);
        setLoadingProgress(startCount);
      } else {
        clearInterval(interval);
      }
    }, 40); // Slightly slower interval for more visible random effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0A0C13] flex items-center justify-center cursor-none [&_*]:cursor-none">
      <CustomCursor />
      <motion.div 
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {loadingProgress}%
      </motion.div>
    </div>
  );
} 