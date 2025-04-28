'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0c13] animate-fadeIn">
      <div className="text-center px-4">
        <h1 
          className="text-[12rem] font-bold text-white mb-4 opacity-90 animate-float select-none"
          style={{
            textShadow: '0 0 40px rgba(255,255,255,0.2)',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white/90 mb-3 animate-slideUp">
          You're off the map.
        </h2>
        <p className="text-gray-400 mb-8 animate-slideUp">
          This page doesn't exist in OOR3D's universe yet.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full 
                     bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 
                     text-white border-0 transition-all duration-200 hover:scale-105 animate-fadeIn"
        >
          Return Home
        </Link>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
} 