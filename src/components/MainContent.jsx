import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import LoveLetters from './sections/LoveLetters'
import MemoryTimeline from './sections/MemoryTimeline'
import Footer from './sections/Footer'
import Confetti from 'react-confetti'
import useSound from 'use-sound'

const MainContent = () => {
  const [showConfetti, setShowConfetti] = useState(true)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })
  
  // URL to a birthday music track
  const musicUrl = 'https://cdn.pixabay.com/download/audio/2022/01/13/audio_80204ecb6a.mp3?filename=happy-birthday-music-box-164746.mp3'
  
  // Mock play function since we'll use the MusicPlayer component for actual playback
  const [play] = useSound(musicUrl, { volume: 0 })
  
  useEffect(() => {
    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener('resize', handleResize)
    
    // Trigger sound effect (would normally play but volume is 0)
    play()
    
    // Remove confetti after 8 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false)
    }, 8000)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(confettiTimer)
    }
  }, [play])
  
  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  
  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          colors={['#ec4899', '#8b5cf6', '#f97316', '#06b6d4']}
        />
      )}
      
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Gallery />
        <LoveLetters />
        <MemoryTimeline />
        <Footer />
      </motion.div>
    </>
  )
}

export default MainContent