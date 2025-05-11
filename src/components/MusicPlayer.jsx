import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMusic, FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef(null)
  
  // Birthday song URL
  const musicUrl = 'https://cdn.pixabay.com/download/audio/2022/01/13/audio_80204ecb6a.mp3?filename=happy-birthday-music-box-164746.mp3'
  
  useEffect(() => {
    // Auto-play music when component mounts (with a delay)
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(error => {
            // Autoplay was prevented, we'll need user interaction
            console.log('Autoplay prevented:', error)
            setIsPlaying(false)
          })
      }
    }, 4000)
    
    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5, duration: 0.8 }}
    >
      <audio ref={audioRef} src={musicUrl} loop />
      
      <motion.div 
        className={`relative flex items-center bg-white bg-opacity-90 rounded-full shadow-lg ${isExpanded ? 'pl-4 pr-2 py-2' : 'p-2'}`}
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 focus:outline-none"
          onClick={toggleExpand}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMusic />
        </motion.button>
        
        {isExpanded && (
          <motion.div 
            className="flex items-center ml-2 gap-2"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 focus:outline-none"
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </motion.button>
            
            <motion.button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 focus:outline-none"
              onClick={toggleMute}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </motion.button>
            
            <motion.p 
              className="text-xs font-medium text-primary-700 hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Birthday Music
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default MusicPlayer