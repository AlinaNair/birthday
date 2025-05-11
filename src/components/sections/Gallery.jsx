import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Example photos (replace with actual photos of you and Alina)
  const photos = [
    {
      url: 'birthday/src/components/sections/photos/IMG-20240302-WA0017.jpg',
      caption: 'Your cutu baby pic(awww my love)❤️',
    },
    {
      url: 'birthday/src/components/sections/photos/IMG-20231221-WA0000.jpg',
      caption: 'Making silly faces together',
    },
    {
      url: 'birthday/src/components/sections/photos/Snapchat-1427700348.mp4',
      caption: 'That beautiful Face I fell in love with',
    },
    {
      url: 'birthday/src/components/sections/photos/VID_20250510_111040_045.mp4',
      caption: 'Your smile that lights up my world',
    }
  ]
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    )
  }
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary-50 to-primary-50">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-cursive text-center text-gradient mb-2">
          Our Precious Memories
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Some special moments from our 2.5 years together
        </p>
        
        <div className="relative">
          {/* Photo gallery */}
          <div className="relative bg-white p-3 rounded-2xl shadow-card overflow-hidden aspect-[4/3] md:aspect-[16/9]">
            <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {photos[currentIndex].url.endsWith('.mp4') ? (
                <video
                  src={photos[currentIndex].url}
                  controls
                  className="max-w-full max-h-full w-1/2 h-auto object-contain rounded-xl"
                />
              ) : (
                <img 
                  src={photos[currentIndex].url} 
                  alt={`Memory ${currentIndex + 1}`}
                  className="max-w-full max-h-full w-1/2 h-auto object-contain rounded-xl"
                />
              )}

              {/* Caption overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <FaHeart className="text-primary-400" />
                  <p className="font-cursive text-lg">
                    {photos[currentIndex].caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            </AnimatePresence>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-primary-600 shadow hover:bg-white transition-all focus:outline-none z-10"
              aria-label="Previous photo"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-primary-600 shadow hover:bg-white transition-all focus:outline-none z-10"
              aria-label="Next photo"
            >
              <FaChevronRight />
            </button>
          </div>
          
          {/* Photo indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary-500 w-6' 
                    : 'bg-primary-200'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery
