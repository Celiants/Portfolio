import { Link } from 'react-router-dom'
import { getAdjacentProjects } from '../../data/projects'

interface Props {
  slug: string
}

export default function ProjectNav({ slug }: Props) {
  const { prev, next } = getAdjacentProjects(slug)
  if (!prev && !next) return null

  return (
    <nav className="proj-nav" aria-label="Navigation entre projets">
      {prev ? (
        <Link to={`/projets/${prev.slug}`} className="proj-nav__item proj-nav__item--prev">
          <div className="proj-nav__content">
            <span className="proj-nav__dir">
              <span className="proj-nav__arrow-icon">←</span>
              Précédent
            </span>
            <span className="proj-nav__name" style={{ color: prev.accent }}>{prev.title}</span>
            <span className="proj-nav__sub">{prev.subtitle}</span>
          </div>
        </Link>
      ) : <div className="proj-nav__empty" />}

      {next ? (
        <Link to={`/projets/${next.slug}`} className="proj-nav__item proj-nav__item--next">
          <div className="proj-nav__content proj-nav__content--right">
            <span className="proj-nav__dir">
              Suivant
              <span className="proj-nav__arrow-icon">→</span>
            </span>
            <span className="proj-nav__name" style={{ color: next.accent }}>{next.title}</span>
            <span className="proj-nav__sub">{next.subtitle}</span>
          </div>
        </Link>
      ) : <div className="proj-nav__empty" />}
    </nav>
  )
}
