import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setProgress(scrolled)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        top: 'auto',
        left: 0,
        right: 0,
        height: 2,
        zIndex: 9998,
        background: 'var(--border)',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'var(--accent)',
          transformOrigin: 'left',
          scaleX: progress,
        }}
      />
    </div>
  )
}
