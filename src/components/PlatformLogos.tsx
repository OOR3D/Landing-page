import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const platforms = [
  // Top Row
  { name: "Zepeto", src: "https://assets.oor3d.com/img/downloads/zepeto/zepeto-logo.svg", width: 60, height: 60, top: 12, left: 50, url: "https://web.zepeto.me", mobile: { top: 5, left: 50 } },
  { name: "IMVU", src: "https://assets.oor3d.com/img/downloads/imvu/imvu.webp", width: 60, height: 60, top: 18, left: 18, url: "https://imvu.com", mobile: { top: 12, left: 15 } },
  { name: "Roblox", src: "https://assets.oor3d.com/img/downloads/roblox/roblox-logo.svg", width: 60, height: 60, top: 18, left: 82, url: "https://www.roblox.com", mobile: { top: 12, left: 85 } },
  
  // Inner Mid Row
  { name: "Second Life", src: "https://assets.oor3d.com/img/downloads/secondlife/secondlife.svg", width: 140, height: 40, top: 28, left: 32, url: "https://secondlife.com", mobile: { top: 22, left: 25 } },
  { name: "Minecraft", src: "https://assets.oor3d.com/img/downloads/minecraft/minecraft.svg", width: 120, height: 40, top: 32, left: 68, url: "https://www.minecraft.net", mobile: { top: 22, left: 75 } },
  
  // Outer Mid Row
  { name: "The Sims 4", src: "https://assets.oor3d.com/img/downloads/sims4/sims-4.svg", width: 60, height: 60, top: 50, left: 12, url: "https://www.ea.com/games/the-sims/the-sims-4", mobile: { top: 75, left: 25 } },
  { name: "VRChat", src: "https://assets.oor3d.com/img/downloads/vrchat/vchat-logo.png", width: 60, height: 60, top: 50, left: 88, url: "https://vrchat.com", mobile: { top: 75, left: 75 } },
  
  // Low Row
  { name: "Inzoi", src: "https://assets.oor3d.com/img/downloads/inzoi/inzoi.svg", width: 80, height: 40, top: 72, left: 15, url: "https://playinzoi.com", mobile: { top: 82, left: 15 } },
  { name: "FiveM", src: "https://assets.oor3d.com/img/downloads/fivem/fivem.svg", width: 50, height: 50, top: 72, left: 85, url: "https://fivem.net", mobile: { top: 82, left: 85 } },
  
  // Bottom Row
  { name: "Avakin Life", src: "https://assets.oor3d.com/img/downloads/avakinlife/avakinlife.png", width: 60, height: 60, top: 88, left: 35, url: "https://avakin.com", mobile: { top: 92, left: 35 } },
  { name: "GTA 6", src: "https://assets.oor3d.com/img/downloads/gta6/gta6-logo.png", width: 80, height: 60, top: 88, left: 65, url: "https://www.rockstargames.com/gta6", mobile: { top: 92, left: 65 } },
];

// Calculate responsive horizontal position based on screen width
const getResponsivePosition = (basePosition: number, screenWidth: number) => {
  // Only adjust on very small screens to preserve circular shape
  if (screenWidth < 640) {
    const center = 50;
    const offset = (basePosition - center) * 0.5; // Reduce spread by 50% only on small screens
    return Math.max(10, Math.min(90, center + offset));
  }
  // On all other screens, use original positions to keep circles circular
  return basePosition;
};

// Calculate responsive vertical position - keep more spread for height
const getResponsiveTopPosition = (basePosition: number, screenWidth: number) => {
  // On small screens, keep good vertical spread but ensure safe bounds
  if (screenWidth < 640) {
    return Math.max(5, Math.min(95, basePosition));
  }
  // On all other screens, use original positions
  return basePosition;
};

export const PlatformLogos = ({ children }: { children?: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Handle resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[750px] flex items-center justify-center">
      {/* Central Content - Animated */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Animated wrapper for children with staggered effect */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              }
            }
          }}
        >
          {/* Wrap each child in its own animated container */}
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
              >
                {child}
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Floating Logos */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-full sm:max-w-[95%] md:max-w-[92%] lg:max-w-[90%] xl:max-w-[88%] h-full px-2 sm:px-4 md:px-6">
          <TooltipProvider delayDuration={0}>
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="absolute pointer-events-auto"
              initial={{ 
                top: "50%", 
                left: "50%", 
                opacity: 0, 
                scale: 0.5, 
                filter: "blur(10px)",
                x: "-50%",
                y: "-50%"
              }}
              whileInView={{ 
                top: `${windowWidth < 640 && platform.mobile ? platform.mobile.top : (windowWidth > 0 ? getResponsiveTopPosition(platform.top, windowWidth) : platform.top)}%`, 
                left: `${windowWidth < 640 && platform.mobile ? platform.mobile.left : (windowWidth > 0 ? getResponsivePosition(platform.left, windowWidth) : platform.left)}%`, 
                opacity: 1, 
                scale: windowWidth < 640 ? 0.75 : 1, 
                filter: "blur(0px)",
                x: "-50%",
                y: "-50%"
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.1, // Staggered entrance
              }}
              style={{
                  width: platform.name === "Second Life" 
                    ? platform.width - 40 
                    : platform.name === "Minecraft" 
                    ? platform.width - 10 
                    : platform.width + 40,
                  height: platform.height + 40
              }}
            >
               {/* Continuous Floating Animation Wrapper */}
              <motion.div
                  animate={{
                      y: [0, -15, 0],
                  }}
                  transition={{
                      duration: 3 + (index % 3), // Randomize float speed slightly
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2 + (index * 0.1), // Start floating after entrance
                  }}
                  className="w-full h-full"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={platform.url}
                      target="_blank"
                      draggable={false}
                      className="group relative flex items-center justify-center w-full h-full"
                    >
                      <div className="absolute inset-0 bg-[#251D3E]/40 backdrop-blur-md border border-white/10 rounded-[28px] shadow-lg group-hover:bg-[#251D3E]/60 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300" />
                      <div className="relative w-full h-full p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                          {platform.src.endsWith('.svg') ? (
                            <img
                              src={platform.src}
                              alt={platform.name}
                              draggable={false}
                              className="w-full h-full object-contain drop-shadow-lg"
                            />
                          ) : (
                            <Image
                              src={platform.src}
                              alt={platform.name}
                              fill
                              draggable={false}
                              className="object-contain drop-shadow-lg"
                              sizes={`${platform.width}px`}
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{platform.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </motion.div>
          ))}
          </TooltipProvider>
        </div>
      </div>
      
      {/* Background Gradient Effect - Subtle center glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0429]/50 to-[#0D0429] pointer-events-none" />
    </div>
  );
};

export default PlatformLogos;
