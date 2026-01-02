import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const platforms = [
  { name: "IMVU", src: "/images/platforms/imvu-logo.webp", width: 60, height: 60, top: 10, left: 10, url: "https://imvu.com" },
  { name: "Second Life", src: "/images/platforms/second-life-logo.svg", width: 140, height: 40, top: 20, left: 80, url: "https://secondlife.com" },
  { name: "The Sims 4", src: "/images/platforms/sims4-logo.svg", width: 60, height: 60, top: 80, left: 15, url: "https://www.ea.com/games/the-sims/the-sims-4" },
  { name: "Roblox", src: "/images/platforms/roblox-logo.svg", width: 60, height: 60, top: 85, left: 85, url: "https://www.roblox.com" },
  { name: "VRChat", src: "/images/platforms/vrchat-logo.png", width: 60, height: 60, top: 45, left: 5, url: "https://vrchat.com" },
  { name: "Zepeto", src: "/images/platforms/zepeto-logo.svg", width: 60, height: 60, top: 50, left: 95, url: "https://web.zepeto.me" },
  { name: "Inzoi", src: "/images/platforms/inzoi-logo.svg", width: 80, height: 40, top: 5, left: 40, url: "https://playinzoi.com" },
  { name: "FiveM", src: "/images/platforms/fivem-logo.svg", width: 50, height: 50, top: 90, left: 45, url: "https://fivem.net" },
  { name: "Avakin Life", src: "/images/platforms/avakinlife-logo.png", width: 60, height: 60, top: 25, left: 25, url: "https://avakin.com" },
  { name: "Minecraft", src: "/images/platforms/minecraft-logo.svg", width: 120, height: 40, top: 75, left: 5, url: "https://www.minecraft.net" },
];

export const PlatformLogos = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center">
      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {children}
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
                top: `${platform.top}%`, 
                left: `${platform.left}%`, 
                opacity: 1, 
                scale: 1, 
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
                  width: platform.width + 40,
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
                      className="group relative flex items-center justify-center w-full h-full"
                    >
                      <div className="absolute inset-0 bg-[#251D3E]/40 backdrop-blur-md border border-white/10 rounded-[28px] shadow-lg group-hover:bg-[#251D3E]/60 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300" />
                      <div className="relative w-full h-full p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <Image
                              src={platform.src}
                              alt={platform.name}
                              fill
                              className="object-contain drop-shadow-lg"
                              sizes={`${platform.width}px`}
                          />
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
      
      {/* Background Gradient Effect - Subtle center glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0429]/50 to-[#0D0429] pointer-events-none" />
    </div>
  );
};

export default PlatformLogos;
