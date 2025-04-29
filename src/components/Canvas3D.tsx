'use client'

import { useEffect, useRef } from 'react'
import Experience from '../Experience/Experience'

export default function Canvas3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const experienceRef = useRef<Experience | null>(null)

  useEffect(() => {
    if (!canvasRef.current || experienceRef.current) return

    // Create experience
    experienceRef.current = new Experience(canvasRef.current)

    return () => {
      if (experienceRef.current) {
        experienceRef.current.destroy()
        experienceRef.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
} 