import Image from 'next/image';
import { motion } from 'framer-motion';

const PlatformLogos = () => {
  const logos = [
    { src: '/images/platforms/epic-games-logo.svg', alt: 'Epic Games', width: 40, height: 46 },
    { src: '/images/platforms/steam-logo.svg', alt: 'Steam', width: 46, height: 46 },
    { src: '/images/platforms/gog-logo.svg', alt: 'GOG', width: 46, height: 46 },
  ];

  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-transparent py-8">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{
          x: [0, -1 * logos.length * (46 + 64)], // Width of logo (46px) + gap (64px)
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="inline-block">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlatformLogos; 