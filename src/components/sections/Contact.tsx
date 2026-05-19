import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact-section">
      <motion.div
        ref={ref}
        className="contact__inner"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <h2 className="contact__title">
          Une opportunité d'alternance ?<br />
          <em>Parlons</em><span style={{ fontStyle: 'normal', color: '#62769E' }}> – </span><em>en.</em>
        </h2>

        <a
          href="mailto:antunes.celia2004@gmail.com"
          className="contact__email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          antunes.celia2004@gmail.com
        </a>

      </motion.div>
    </section>
  )
}
