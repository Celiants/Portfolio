import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import type { Project } from '../../types'
import LazyImage from '../../components/ui/LazyImage'
import ProjectNav from '../../components/ui/ProjectNav'

interface Props {
  project: Project
}

export default function ProjectLayout({ project }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      <Helmet>
        <title>{project.title} — Célia Antunes</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} — Célia Antunes`} />
        <meta property="og:description" content={project.description} />
      </Helmet>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className="cs-hero"
          style={{ background: project.color }}
        >
          <motion.div
            className="cs-hero__back"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/#projets" state={{ back: true }} className="cs-back-link">
              <span className="cs-back-link__arrow">←</span>
              Tous les projets
            </Link>
          </motion.div>

          <motion.div
            className="cs-hero__body"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <motion.div
              className="cs-hero__tags"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.tags.map((tag) => (
                <span key={tag} className="cs-tag">{tag}</span>
              ))}
            </motion.div>

            <motion.h1
              className="cs-hero__title"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="cs-hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              {project.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="cs-hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="cs-hero__scroll-line" />
            <span className="cs-hero__scroll-label">Défiler</span>
          </motion.div>
        </div>

        {/* ── Méta ── */}
        <motion.div
          className="cs-meta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="cs-container">
            <div className="cs-meta__inner">
              <div className="cs-meta__item">
                <span className="cs-meta__label">Année</span>
                <span className="cs-meta__value">{project.year}</span>
              </div>
              <div className="cs-meta__divider" />
              <div className="cs-meta__item">
                <span className="cs-meta__label">Rôle</span>
                <span className="cs-meta__value">{project.role}</span>
              </div>
              <div className="cs-meta__divider" />
              <div className="cs-meta__item">
                <span className="cs-meta__label">Outils</span>
                <span className="cs-meta__value">{project.tools.join(' · ')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Aperçu ── */}
        <section className="cs-overview">
          <div className="cs-container">
            <div className="cs-overview__inner">
              <motion.div
                className="cs-overview__label"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
              >
                <span className="cs-section-num">01</span>
                <span className="cs-section-name">Aperçu</span>
              </motion.div>

              <motion.p
                className="cs-overview__text"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {project.overview}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Galerie ── */}
        {project.images.length > 0 && (
          <section className="cs-gallery">
            <div className="cs-container">
              <motion.div
                className="cs-gallery__header"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
              >
                <span className="cs-section-num">02</span>
                <span className="cs-section-name">Visuels</span>
              </motion.div>
            </div>

            <div className="cs-gallery__grid">
              {project.images.map((img, i) => {
                const isFirst = i === 0
                const isLast = i === project.images.length - 1 && project.images.length % 2 !== 0

                return (
                  <motion.div
                    key={img}
                    className={`cs-gallery__item ${isFirst ? 'cs-gallery__item--full' : ''} ${isLast && !isFirst ? 'cs-gallery__item--wide' : ''}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: isFirst ? 0 : (i % 2) * 0.1 }}
                  >
                    <LazyImage
                      src={img}
                      alt={`${project.title} — capture ${i + 1}`}
                      className="cs-gallery__img"
                    />
                  </motion.div>
                )
              })}
            </div>
          </section>
        )}

        {/* ── Liens ── */}
        {project.links.length > 0 && (
          <section className="cs-links">
            <div className="cs-container">
              <motion.div
                className="cs-links__inner"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="cs-links__header">
                  <span className="cs-section-num">{project.images.length > 0 ? '03' : '02'}</span>
                  <span className="cs-section-name">Liens</span>
                </div>
                <div className="cs-links__list">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-link-btn"
                    >
                      <span>{link.label}</span>
                      <span className="cs-link-btn__arrow">↗</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <ProjectNav slug={project.slug} />
      </motion.article>
    </>
  )
}
