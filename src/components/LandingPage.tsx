'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [isDiscordHovered, setIsDiscordHovered] = useState(false)

  return (
    <div className="relative min-h-screen z-10">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 text-white">Create Without Complexity</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Experience the future of creation. No more waiting, no more complexity.
          Just pure creativity at your fingertips.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            You DESERVE Full Control Over Your Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">No More Waiting</h3>
              <p className="text-gray-400">
                Take control of your creative process. No more depending on others.
              </p>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Skip the Complexity</h3>
              <p className="text-gray-400">
                Avoid complex software that slows you down. Create effortlessly.
              </p>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Future of Creating</h3>
              <p className="text-gray-400">
                Join us in 2025 for a revolutionary approach to creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-20 text-center">
        <div 
          className="max-w-2xl mx-auto px-4 transition-transform duration-300"
          style={{ transform: isDiscordHovered ? 'scale(1.02)' : 'scale(1)' }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Community</h2>
          <p className="text-xl text-gray-400 mb-8">
            Be part of something special. Connect with fellow creators and stay updated.
          </p>
          <Link 
            href="https://discord.gg/outofreach"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsDiscordHovered(true)}
            onMouseLeave={() => setIsDiscordHovered(false)}
            className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Join Our Discord
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-black/30 backdrop-blur-sm">
        <p>© 2025 OUTOFREACH, Inc. All rights reserved.</p>
      </footer>
    </div>
  )
} 