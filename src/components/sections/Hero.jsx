import { motion } from 'framer-motion'
import { FaHeart, FaBirthdayCake, FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating elements in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-primary-300 opacity-60"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      >
        <FaHeart className="text-4xl" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 text-secondary-300 opacity-70"
        animate={{ 
          y: [0, 40, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      >
        <FaBirthdayCake className="text-5xl" />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4 text-accent-300 opacity-60"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
      >
        <FaStar className="text-3xl" />
      </motion.div>
      
      {/* Main birthday message */}
      <motion.div 
        className="text-center relative z-10 max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="inline-block mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        >
          <span className="text-6xl sm:text-7xl md:text-8xl">🎂</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-cursive text-gradient mb-2"
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          Happy Birthday, Alina!
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-primary-700 mt-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          My Beautiful Brownie Cutiepie Sundri Pyari BB ❤️
        </motion.p>
        
        <motion.p 
          className="mt-6 text-gray-600 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Today we celebrate 18 amazing years of you, and 2.5 wonderful years together.
          This little digital gift is filled with my love for you my cutiepie.
        </motion.p>
        
        {/* Birthday wishes card */}
        <motion.div 
          className="card mt-8 mx-auto max-w-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-primary-700 mb-4">
            My Wish For You
          </h2>
          <p className="text-gray-700 font-handwriting text-lg">
            May your 18th birthday be as beautiful and special as you are. 
            May this year bring you endless joy, exciting adventures, and all the love your heart can hold.
            Thank you for being my everything! ❤️
          </p>
          
          {/* Heart animation */}
          <motion.div 
            className="mt-4 inline-block"
            animate={{ 
              scale: [1, 1.2, 1, 1.2, 1],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <FaHeart className="text-3xl text-primary-500" />
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            delay: 3
          }}
        >
          <p className="text-sm text-primary-600 mb-2">Scroll for more</p>
          <div className="w-6 h-10 rounded-full border-2 border-primary-400 flex justify-center">
            <motion.div 
              className="w-2 h-2 bg-primary-500 rounded-full mt-1"
              animate={{ y: [0, 15, 0] }}
              transition={{ 
                repeat: Infinity,
                duration: 2
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero