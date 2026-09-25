import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import Home from './pages/Home'
import FlamCoPage from './pages/projects/FlamCoPage'
import MarvelPage from './pages/projects/MarvelPage'
import TermetisPage from './pages/projects/TermetisPage'
import SentinelPage from './pages/projects/SentinelPage'
import SewlauPage from './pages/projects/SewlauPage'
import KatliDevPage from './pages/projects/KatliDevPage'

const scrollPositions = new Map<string, number>()

function scrollToHash(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'instant' })
}

function AnimatedRoutes() {
  const location = useLocation()
  const navType = useNavigationType()

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    if (location.hash) scrollToHash(location.hash)
  }, [])

  useEffect(() => {
    const savePosition = () => scrollPositions.set(location.key, window.scrollY)
    window.addEventListener('scroll', savePosition, { passive: true })
    return () => window.removeEventListener('scroll', savePosition)
  }, [location.key])

  const restoreScroll = () => {
    requestAnimationFrame(() => {
      if (location.hash) {
        scrollToHash(location.hash)
        return
      }
      const top = navType === 'POP' ? scrollPositions.get(location.key) ?? 0 : 0
      window.scrollTo({ top, behavior: 'instant' })
    })
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={false} onExitComplete={restoreScroll}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projets/flamco" element={<FlamCoPage />} />
          <Route path="/projets/marvel" element={<MarvelPage />} />
          <Route path="/projets/termetis" element={<TermetisPage />} />
          <Route path="/projets/sentinel" element={<SentinelPage />} />
          <Route path="/projets/sewlau" element={<SewlauPage />} />
          <Route path="/projets/katlidev" element={<KatliDevPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}
