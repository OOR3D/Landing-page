import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from "next/font/google";

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
          src="/images/discord-logo.svg"
          alt="Discord"
          width={80}
          height={60}
          className="mx-auto"
        />
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}>
        JOIN OUR DISCORD COMMUNITY
      </h2>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
        This server is where early creators help shape the platform, decide what gets built, and lead the future of creating inside of virtual worlds.
      </p>
      <Link 
        href="https://discord.gg/oor3d"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-10 rounded-full text-base transition-all duration-300 hover:scale-105"
      >
        Join Now!
      </Link>
    </div>
  );
};

export default DiscordCTA; 