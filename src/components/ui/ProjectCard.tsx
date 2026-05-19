import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { type: 'spring' as const, stiffness: 160, damping: 24 } },
}

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 1.1, delay: (index % 2) * 0.15, ease: 'easeOut' }}
    >
      <Link
        to={`/projets/${project.slug}`}
        style={{ display: 'block', textDecoration: 'none' }}
        className="project-card-link"
      >
        <div className="project-card">
          <motion.div
            className="project-card__image-wrap"
            style={{ background: project.color }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={imageVariants} style={{ width: '100%', height: '100%' }}>
              {project.cover ? (
                <div
                  className="project-card__image"
                  style={{
                    backgroundImage: `url(${project.cover})`,
                    backgroundSize: project.coverSize ?? 'cover',
                    backgroundPosition: project.coverPosition ?? 'top center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                  }}
                  role="img"
                  aria-label={project.title}
                />
              ) : (
                <div className="project-card__placeholder">
                  <span>{project.title}</span>
                </div>
              )}
            </motion.div>
          </motion.div>

          <div className="project-card__header">
            <span className="project-card__category">
              {project.tags[0]}
            </span>
            <h3 className="project-card__title" style={{ color: project.accent }}>{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
