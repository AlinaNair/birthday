import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-primary-50 to-secondary-100 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className="inline-block mb-4"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          <span className="text-5xl">💖</span>
        </motion.div>
        <motion.h2 
          className="text-2xl font-handwriting text-primary-700 mb-4"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading Alina's special gift...
        </motion.h2>
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-primary-400"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen