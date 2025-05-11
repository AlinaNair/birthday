import { motion } from 'framer-motion'
import { FaCalendarAlt, FaHeart } from 'react-icons/fa'

const MemoryTimeline = () => {
  // Example memories (replace with your actual memories with Alina)
  const memories = [
    {
      date: "2.5 years ago",
      title: "When We First Met",
      description: "I still remember the first time I met you in GC. I was in search of a friend and somehow I knew you would be special in my life."
    },
    {
      date: "2 years ago",
      title: "You accepted my Proposal",
      description: "Remember how nervous we both were?\nRemember the situation? You were the one who saved me"
    },
    {
      date: "1 year ago",
      title: "Our Frist Anniversary",
      description: "One Whole year of dating , my longest date ever .. you just came and became the most important person in my life"
    },
    {
      date: "Few months ago",
      title: "We broke up",
      description: "Because of my god damn nonsense we just broke up and I know I hurted you deeply because of my actions—I cheated and broke your heart. It was my biggest mistake, But you chose to give me another chance, and for that, I’m beyond grateful. I promise to be better, to stay loyal, and to never take your love for granted again"
    },
    {
      date: "Today",
      title: "Your 18th Birthday",
      description: "Another milestone in our journey together. I'm so excited for all the adventures that await us in the future."
    },
  ]
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary-50">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-cursive text-center text-gradient mb-2">
          Our Journey Together
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Precious moments from our 2.5 years
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 z-0"></div>
          
          {/* Timeline events */}
          <div className="relative z-10">
            {memories.map((memory, index) => (
              <motion.div 
                key={index}
                className={`mb-12 flex flex-col ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                } items-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Date badge */}
                <div className={`md:w-1/2 flex ${
                  index % 2 === 0 
                    ? 'md:justify-end' 
                    : 'md:justify-start'
                }`}>
                  <div className="flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                    <FaCalendarAlt />
                    <span>{memory.date}</span>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-primary-400">
                  <FaHeart className="text-xs text-primary-500" />
                </div>
                
                {/* Memory card */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:text-left md:pl-10' 
                    : 'md:text-right md:pr-10'
                }`}>
                  <div className="card h-full">
                    <h3 className="text-xl font-bold text-primary-600 mb-2">
                      {memory.title}
                    </h3>
                    <p className="text-gray-600">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MemoryTimeline