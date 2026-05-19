import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  home:       '/assets/projects/marvel/accueil.png',
  persos:     '/assets/projects/marvel/personnages.png',
  films:      '/assets/projects/marvel/films.png',
  series:     '/assets/projects/marvel/series.png',
}

const COLORS = [
  { hex: '#E82525', name: 'Rouge principal' },
  { hex: '#f0f0f0', name: 'Fond'            },
  { hex: '#d8d8d8', name: 'Bordures'        },
  { hex: '#aaaaaa', name: 'Liens / texte secondaire' },
]

function BrowserMock({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`pd-browser ${className}`}>
      <div className="pd-browser__screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.75, delay, ease: 'easeOut' as const },
})

export default function MarvelPage() {
  return (
    <>
      <Helmet>
        <title>Marvel — Célia Antunes</title>
        <meta name="description" content="Fan site interactif MCU — exploration des personnages, films et séries Marvel en TypeScript." />
      </Helmet>

      <motion.div
        className="pd"
        style={{ '--pd-accent': '#E23636' } as React.CSSProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* ══ HERO ══ */}
        <div className="pd-hero">
          <div className="pd-hero__grid">

            <div className="pd-hero__left">
              <motion.h1
                className="pd-hero__title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              >
                Marvel
              </motion.h1>

              <motion.p
                className="pd-hero__sub"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                Exploration interactive de l'univers Marvel
              </motion.p>

              <motion.div
                className="pd-meta"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36 }}
              >
                <div className="pd-meta__year-row">
                  <span className="pd-meta__year">2023</span>
                  <span className="pd-meta__year-line" />
                </div>
                <p className="pd-meta__primary">UI Design<br />Expérience visuelle</p>
                <p className="pd-meta__secondary">Projet personnel · Navigation filtrée · Immersif</p>
              </motion.div>
            </div>

            <div className="pd-photostack">
              <motion.div
                className="pd-photo pd-photo--l"
                initial={{ opacity: 0, x: -32, y: -24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={IMGS.home}   alt="Marvel — Accueil" loading="eager" />
              </motion.div>
              <motion.div
                className="pd-photo pd-photo--r"
                initial={{ opacity: 0, x: 32, y: 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={IMGS.persos} alt="Marvel — Personnages" loading="eager" />
              </motion.div>
            </div>

          </div>
          <div className="pd-scroll-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* ══ OVERVIEW ══ */}
        <section className="pd-section pd-section--overview">
          <div className="pd-wrap">
            <motion.div className="pd-overview-body" {...fadeUp(0)}>
              <p className="pd-overview-text">
                Projet personnel inspiré de l'univers Marvel, conçu pour explorer les films, séries et personnages de manière structurée et visuelle. L'objectif était de créer une plateforme permettant de naviguer facilement à travers les différentes phases et œuvres de l'univers, avec une expérience fluide et centrée sur l'image. Le site a été développé entièrement en TypeScript, avec une interface sobre et claire mettant fortement en valeur les contenus visuels.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Contexte</span>
                <p className="pd-body-text">
                  En tant que fan de Marvel, je cherchais une ressource me permettant de visionner les films dans l'ordre de sortie et par phases. Les contenus existants se limitaient souvent à des listes statiques sans véritable expérience de navigation ou d'exploration visuelle. L'idée de ce projet est donc née du besoin de créer un outil plus immersif et structuré pour explorer cet univers de manière fluide et agréable.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  J'ai conçu une interface centrée sur la mise en valeur des visuels et la simplicité de navigation. Les personnages, films et séries sont accessibles via une expérience fluide, avec des portraits en noir et blanc réactifs au survol et des arrière-plans dynamiques floutés sur les fiches détaillées. L'ensemble a été pensé pour offrir une exploration visuelle cohérente et immersive de l'univers Marvel.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ SCREENS ══ */}
        <section className="pd-section pd-section--screens">
          <div className="pd-wrap">
            <motion.span className="pd-section-label" {...fadeUp(0)}>Écrans du projet</motion.span>

            <div className="pd-screens">

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">1</span>
                  <span className="pd-scr__name">Page d'accueil</span>
                </div>
                <BrowserMock src={IMGS.home} alt="Page d'accueil" className="pd-browser--full" />
              </motion.div>

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">2</span>
                  <span className="pd-scr__name">Personnages</span>
                </div>
                <BrowserMock src={IMGS.persos} alt="Personnages" className="pd-browser--full" />
              </motion.div>

              <div className="pd-scr-row pd-scr-row--1-1">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">3</span>
                    <span className="pd-scr__name">Films</span>
                  </div>
                  <BrowserMock src={IMGS.films} alt="Films" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">4</span>
                    <span className="pd-scr__name">Séries</span>
                  </div>
                  <BrowserMock src={IMGS.series} alt="Séries" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ DESIGN SYSTEM ══ */}
        <section className="pd-section pd-section--ds">
          <div className="pd-wrap">
            <motion.span className="pd-section-label" {...fadeUp(0)}>Identité visuelle</motion.span>

            <div className="pd-ds-grid">
              <motion.div className="pd-ds-block" {...fadeUp(0)}>
                <h3 className="pd-ds-title">Palette de couleurs</h3>
                <div className="pd-palette">
                  {COLORS.map((c) => (
                    <div key={c.hex} className="pd-swatch">
                      <div
                        className="pd-swatch__circle"
                        style={{ background: c.hex, border: c.hex === '#FFFFFF' || c.hex === '#F5F5F5' ? '1px solid #E0E0E0' : 'none' }}
                      />
                      <span className="pd-swatch__hex">{c.hex}</span>
                      <span className="pd-swatch__name">{c.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="pd-ds-block" {...fadeUp(0.1)}>
                <h3 className="pd-ds-title">Typographie</h3>
                <div className="pd-typo">
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 40, fontWeight: 400, fontFamily: 'Anton, sans-serif', letterSpacing: '0.02em' }}>Anton</span>
                    <span className="pd-typo__label">Titres — Regular</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 24, fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>Montserrat</span>
                    <span className="pd-typo__label">Navigation / accent — Bold 700</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 16, fontWeight: 300, fontFamily: 'Montserrat, sans-serif', color: '#E82525' }}>Montserrat</span>
                    <span className="pd-typo__label">Corps — Light 300</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        <ProjectNav slug="marvel" />

      </motion.div>
    </>
  )
}
