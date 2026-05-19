import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLocation, useNavigationType } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import ProjectsGrid from '../components/sections/ProjectsGrid'
import Contact from '../components/sections/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function Home() {
  const navType = useNavigationType()
  const location = useLocation()
  const isReturning = navType === 'POP' || !!(location.state as { back?: boolean } | null)?.back || !!location.hash

  return (
    <>
      <Helmet>
        <title>Célia Antunes — Designer UX/UI</title>
        <meta name="description" content="Portfolio de Célia Antunes, Designer UX/UI basée à Rouen. Mastère Expert en Design d'Expérience Utilisateur à la Normandie Web School." />
        <meta property="og:title" content="Célia Antunes — Designer UX/UI" />
        <meta property="og:description" content="Portfolio de Célia Antunes, Designer UX/UI basée à Rouen." />
        <meta property="og:type" content="website" />
      </Helmet>
      <motion.div
        variants={pageVariants}
        initial={isReturning ? false : 'initial'}
        animate="animate"
        exit="exit"
        transition={{ duration: isReturning ? 0.2 : 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="page-wrapper">
          <Hero />
          <ProjectsGrid />
          <Contact />
        </div>
      </motion.div>
    </>
  )
}
