import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
});

const DiscordCTA = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-12 text-center bg-[#0A0C13] rounded-[2rem] border border-white/10">
      <div className="relative mb-6">
        <Image
          src="https://assets.oor3d.com/svg/icons/branding/discord-3d-logo.svg"
          alt="Discord"
          width={80}
          height={60}
          draggable={false}
          className="mx-auto"
        />
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}>
        JOIN OUR DISCORD COMMUNITY
      </h2>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
        This server is where early creators help shape the platform, decide what gets built, and lead the future of creating inside of virtual worlds.
      </p>
      <GradientButton
        size="lg"
        asChild
      >
        <Link href="https://discord.gg/oor3d" target="_blank">
          Join Discord Community
        </Link>
      </GradientButton>
    </div>
  );
};

export default DiscordCTA; 