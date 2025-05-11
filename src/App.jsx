import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import EnvelopeOpening from './components/EnvelopeOpening'
import MainContent from './components/MainContent'
import MusicPlayer from './components/MusicPlayer'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading of assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpened(true)
  }

  return (
    <div className="App min-h-screen relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : !isEnvelopeOpened ? (
          <EnvelopeOpening key="envelope" onEnvelopeOpen={handleEnvelopeOpen} />
        ) : (
          <MainContent key="content" />
        )}
      </AnimatePresence>
      
      <MusicPlayer />
    </div>
  )
}

export default App