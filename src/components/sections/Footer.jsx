import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-cursive text-gradient mb-2">
            Happy 18th Birthday, Alina!
          </h2>
          
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            As you turn 18, I want you to know that my love for you grows stronger each day. 
            Thank you for being my person, my favorite human, and the best part of my life.
          </p>
          
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-pink-100 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.3, 0.7]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3
                }}
              />
              <motion.div
                className="absolute inset-0 bg-pink-100 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  delay: 0.3
                }}
              />
              <FaHeart className="text-4xl text-primary-500 relative z-10" />
            </div>
          </motion.div>
          
          <div className="pt-8 border-t border-gray-200">
            <p className="text-lg font-cursive text-primary-600">
              Forever yours,
            </p>
            <p className="text-xl font-handwriting text-gradient mt-2">
              Your Pyara Abhinav
            </p>
          </div>
          
          <motion.p 
            className="text-sm text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
            Made with <FaHeart className="inline text-xs text-primary-500" /> for the most amazing person in my world
          </motion.p>
        </motion.div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary-50 to-transparent opacity-70" />
      
      <motion.div
        className="absolute -bottom-4 -right-4 text-primary-200 opacity-20"
        animate={{ 
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      >
        <FaHeart className="text-[200px]" />
      </motion.div>
      
      <motion.div
        className="absolute -top-4 -left-4 text-secondary-200 opacity-20"
        animate={{ 
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
      >
        <FaHeart className="text-[150px]" />
      </motion.div>
    </footer>
  )
}

export default Footer