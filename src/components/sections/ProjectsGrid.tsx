import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsGrid() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="projets" className="projects-section">
      <div className="container">
        <motion.div
          ref={titleRef}
          className="projects-header projects-header--center"
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <h2 className="projects-header__title">
            Projets <em style={{ color: "#62769E" }}>récents</em>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
