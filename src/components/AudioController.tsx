'use client'

import { useEffect, useRef, useState } from 'react'

interface AudioControllerProps {
  isLoaded: boolean
}

export default function AudioController({ isLoaded }: AudioControllerProps) {
  const [isMuted, setIsMuted] = useState(true)
  const bgMusicRef = useRef<HTMLAudioElement | null>(null)
  const clickSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isLoaded && !isMuted && bgMusicRef.current) {
      bgMusicRef.current.play().catch(error => {
        console.error('Error playing background music:', error)
      })
    }
  }, [isLoaded, isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (bgMusicRef.current) {
      if (isMuted) {
        bgMusicRef.current.play().catch(console.error)
        bgMusicRef.current.volume = 0.3
      } else {
        bgMusicRef.current.pause()
      }
    }
  }

  const playClickSound = () => {
    if (!isMuted && clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0
      clickSoundRef.current.play().catch(console.error)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        onMouseDown={playClickSound}
        className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-full transition-colors duration-300"
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      <audio
        ref={bgMusicRef}
        src="/audio/background-music.mp3"
        loop
        preload="auto"
      />
      
      <audio
        ref={clickSoundRef}
        src="/audio/click.mp3"
        preload="auto"
      />
    </div>
  )
} 