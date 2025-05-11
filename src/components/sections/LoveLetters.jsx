import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaHeart, FaStar } from 'react-icons/fa'

const LoveLetters = () => {
  const [activeCard, setActiveCard] = useState(null)
  
  const loveNotes = [
    {
      id: 1,
      title: "My Cutu Bachhi",
      message: "Alina, you are my universe .. multiverese .. everything. Your smile brightens my darkest days, and your laughter is the music that plays in my heart. Every morning I wake up feeling blessed to have you in my life. You are my greatest blessing, and I cherish every moment with you."
    },
    {
      id: 2,
      title: "For My Brownie Cutiepie",
      message: "To my adorable Brownie Cutiepie, your sweetness rivals the most delicious desserts in the world. Your eyes sparkle with kindness, your touch is gentle, and your heart is pure gold. You make me feel like the luckiest person alive, and I fall in love with you a little more every day."
    },
    {
      id: 3,
      title: "My Sundri Pyari",
      message: "My beautiful Sundri Pyari, you are grace personified. The way you move, talk, and simply exist captivates me endlessly. Your beauty isn't just external; it radiates from within. Your compassion for others, your intelligence, and your strength make you truly magnificent in every way."
    },
    {
      id: 4,
      title: "To My BB Wifeyy",
      message: "To my precious BB Wifeyy, I dream of our future together every day. Building a life with you is my greatest aspiration. Your love has transformed me into a better person. You challenge me, support me, and love me unconditionally. Thank you for being the perfect partner in this journey called life."
    },
  ]
  
  return (
    <section className="py-16 px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-cursive text-center text-gradient mb-2">
          Love Letters For You
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Words from my heart to yours
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loveNotes.map((note) => (
            <motion.div 
              key={note.id}
              className="card border-gradient relative overflow-hidden group"
              whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(236, 72, 153, 0.1)" }}
              onClick={() => setActiveCard(activeCard === note.id ? null : note.id)}
            >
              <FaHeart className="absolute top-3 right-3 text-primary-400" />
              
              <h3 className="text-xl font-bold text-primary-600 mb-3">
                {note.title}
              </h3>
              
              <AnimatePresence>
                {activeCard === note.id ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 font-handwriting text-lg">
                      {note.message}
                    </p>
                    
                    <div className="text-right mt-4">
                      <FaPaperPlane className="ml-auto text-secondary-400" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-gray-500 line-clamp-2 mb-4">
                      {note.message.substring(0, 75)}...
                    </p>
                    <button className="text-sm text-primary-600 font-medium flex items-center">
                      <span>Read more</span>
                      <FaStar className="ml-1 text-accent-400" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 card bg-gradient-to-r from-primary-100 to-secondary-100 text-center p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cursive text-primary-700 mb-4">
            What I Love About You
          </h3>
          
          <ul className="max-w-lg mx-auto space-y-3 text-left">
            {[
              "Your beautiful smile that lights up my world",
              "Your cutu pyari nosu",
              "Your chubby cheekus(I love to eat em hehe)",
              "Your Rosy suckable tasty lipsu",
              "Your brownie tasty yummy figure",
              "Your cutie kissable forehead",
              "Your beautiful eyes( I wish our cutu babies get the same eyes as you )",
              "Your sweet fragrance (uff I love sleeping in your arms)",
              "Your pretty cutu face (I always wanna kiss your gorgeus face)",
              "Your perfect brownie tummy(yumm)",
              "The way you love me",
              "The way you treat me like your baby",
              "Your nature and behaviour , damn i got the most perfect and precious girl"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaHeart className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default LoveLetters