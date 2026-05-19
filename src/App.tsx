import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
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
