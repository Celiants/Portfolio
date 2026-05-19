import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/#projets', label: 'Projets' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <div className={`navbar-wrapper${scrolled ? ' navbar--scrolled' : ''}`}>
      <motion.header
        className="navbar"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Link to="/" className="navbar__logo" aria-label="Célia Antunes — accueil">
          <span className="navbar__logo-icon">CA</span>
          <span className="navbar__logo-name">Célia Antunes</span>
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Navigation principale">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="navbar__link">
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </motion.header>
    </div>
  )
}
