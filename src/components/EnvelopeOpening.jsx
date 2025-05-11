import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const EnvelopeOpening = ({ onEnvelopeOpen }) => {
  const [isFlapping, setIsFlapping] = useState(false)
  const [showHint, setShowHint] = useState(true)
  
  const handleEnvelopeClick = () => {
    if (isFlapping) return
    
    setIsFlapping(true)
    setShowHint(false)
    
    // Timing for the entire envelope opening animation sequence
    setTimeout(() => {
      onEnvelopeOpen()
    }, 2000)
  }

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-md mx-auto px-4">
        {/* Hint text */}
        <motion.div
          className="absolute top-16 left-0 right-0 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: showHint ? 1 : 0, 
            y: showHint ? 0 : -20 
          }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-lg text-primary-700 font-handwriting">
            Tap the envelope to open your gift!
          </p>
        </motion.div>
        
        {/* Envelope Container */}
        <motion.div
          className="relative mx-auto w-full max-w-sm aspect-[4/3] cursor-pointer"
          onClick={handleEnvelopeClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Envelope Back */}
          <motion.div 
            className="envelope-back absolute inset-0 rounded-lg shadow-envelope"
            style={{ zIndex: 1 }}
          />

          {/* Envelope Flap (top part that opens) */}
          <motion.div 
            className="envelope-flap absolute top-0 left-0 w-full h-1/2 bg-primary-200"
            style={{ zIndex: 3, transformOrigin: 'top center' }}
            animate={{ 
              rotateX: isFlapping ? -180 : 0,
              // At the end, push the flap to the back
              zIndex: isFlapping ? 0 : 3 
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Letter inside */}
          <motion.div
            className="envelope-card absolute top-0 left-0 right-0 bottom-0 m-auto w-[90%] h-[85%] rounded-lg p-6 texture-paper paper-curl"
            style={{ zIndex: 2 }}
            animate={{ 
              y: isFlapping ? -120 : 0,
            }}
            transition={{ 
              delay: isFlapping ? 0.8 : 0,
              duration: 1.2, 
              ease: "easeOut" 
            }}
          >
            <motion.div
              className="h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isFlapping ? 1 : 0,
              }}
              transition={{ 
                delay: isFlapping ? 1.2 : 0,
                duration: 0.5
              }}
            >
              <FaHeart className="text-4xl text-primary-500 mb-4" />
              <h2 className="font-cursive text-2xl text-primary-600 mb-2">For My Dearest Alina</h2>
              <p className="text-sm text-gray-600 italic">Click to continue...</p>
            </motion.div>
          </motion.div>
          
          {/* Envelope Front (bottom part) */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-100 rounded-b-lg"
            style={{ zIndex: 2 }}
          />
          
          {/* Hearts decoration */}
          <motion.div
            className="absolute -top-6 -right-6"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              y: [0, -5, 0, -3, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <FaHeart className="text-2xl text-primary-400 opacity-80" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4"
            animate={{ 
              rotate: [0, -10, 0, 10, 0],
              y: [0, -3, 0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              delay: 0.5,
              ease: "easeInOut"
            }}
          >
            <FaHeart className="text-2xl text-secondary-400 opacity-80" />
          </motion.div>
        </motion.div>
        
        {/* From text */}
        <motion.p
          className="mt-8 text-center font-cursive text-lg text-primary-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          With love, from your special someone ❤️
        </motion.p>
      </div>
    </motion.div>
  )
}

export default EnvelopeOpening