import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  accueil:   '/assets/projects/sentinel/accueil.webp',
  dashboard: '/assets/projects/sentinel/tableau-bord.webp',
  projets:   '/assets/projects/sentinel/projets.webp',
  org:       '/assets/projects/sentinel/organisation.webp',
  profil:    '/assets/projects/sentinel/profil.webp',
}

const COLORS = [
  { hex: '#5B4FE9', name: 'Violet principal' },
  { hex: '#8B7FF5', name: 'Violet clair'     },
  { hex: '#F3F4F6', name: 'Fond'             },
  { hex: '#FFFFFF', name: 'Blanc'            },
  { hex: '#1E293B', name: 'Sidebar'          },
  { hex: '#64748B', name: 'Texte secondaire' },
]

function BrowserMock({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`pd-browser ${className}`}>
      <div className="pd-browser__screen">
        <img src={src} alt={alt} loading="lazy" style={{ objectPosition: 'top left' }} />
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

export default function SentinelPage() {
  return (
    <>
      <Helmet>
        <title>Sentinel — Célia Antunes</title>
        <meta name="description" content="Sentinel — Application web de surveillance de la sécurité des dépendances : scan des dépôts GitHub et GitLab, détection des vulnérabilités et note de santé de A à F par projet." />
      </Helmet>

      <motion.div
        className="pd"
        style={{ '--pd-accent': '#5B4FE9' } as React.CSSProperties}
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
                Sentinel
              </motion.h1>

              <motion.p
                className="pd-hero__sub"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                Surveillance de la sécurité des dépendances
              </motion.p>

              <motion.div
                className="pd-meta"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36 }}
              >
                <div className="pd-meta__year-row">
                  <span className="pd-meta__year">2025</span>
                  <span className="pd-meta__year-line" />
                </div>
                <p className="pd-meta__primary">Design d'interface<br />Expérience utilisateur</p>
                <p className="pd-meta__secondary">Figma · Design système · Composants · Prototypage</p>
                <a
                  href="https://sentinelbase.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-visit-btn"
                >
                  <span>Visiter le site</span>
                  <span className="pd-visit-btn__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>

            <motion.div
              className="sn-solo"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="sn-solo__frame">
                <img src={IMGS.accueil} alt="Sentinel — Page d'accueil" loading="lazy" />
              </div>
            </motion.div>

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
                Sentinel est une application web qui surveille la santé et la sécurité des dépendances des projets logiciels. Une fois les dépôts GitHub ou GitLab connectés, elle analyse automatiquement les dépendances de 12 écosystèmes (npm, PyPI, NuGet, Maven…), les croise avec les bases de vulnérabilités et repère les failles, les dépendances obsolètes et les runtimes en fin de vie. Chaque projet reçoit une note de A à F, lisible d'un coup d'œil par un développeur, un manager ou un client, sans expertise technique requise.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Problème</span>
                <p className="pd-body-text">
                  La sécurité des dépendances est éclatée entre plusieurs outils spécialisés, qui surveillent chacun un signal isolé. Les équipes n'ont aucune vue d'ensemble de l'état de leurs projets, les runtimes en fin de vie passent souvent inaperçus et le suivi des corrections se fait dans un outil externe. Une faille peut ainsi rester longtemps en production avant d'être traitée.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  Sentinel croise ces signaux en un seul scan et les traduit en une note de A à F, calculée sur 100 selon un barème transparent où chaque risque retire un nombre de points fixe. Les scans tournent automatiquement ou depuis la CI/CD, une alerte email part dès qu'une faille dépasse le seuil fixé, et tickets, SBOM et rapports sont générés dans l'outil.
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
                  <span className="pd-scr__name">Tableau de bord</span>
                </div>
                <BrowserMock src={IMGS.dashboard} alt="Tableau de bord" className="pd-browser--full" />
              </motion.div>

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">2</span>
                  <span className="pd-scr__name">Projets</span>
                </div>
                <BrowserMock src={IMGS.projets} alt="Projets" className="pd-browser--full" />
              </motion.div>

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">3</span>
                  <span className="pd-scr__name">Organisation</span>
                </div>
                <BrowserMock src={IMGS.org} alt="Organisation" className="pd-browser--full" />
              </motion.div>

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">4</span>
                  <span className="pd-scr__name">Profil</span>
                </div>
                <BrowserMock src={IMGS.profil} alt="Profil" className="pd-browser--full" />
              </motion.div>

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
                        style={{ background: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #E0E0E0' : 'none' }}
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
                    <span className="pd-typo__text" style={{ fontSize: 40, fontWeight: 700 }}>Inter</span>
                    <span className="pd-typo__label">Titres — Bold 700</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 24, fontWeight: 600, color: '#5B4FE9' }}>Inter — SemiBold</span>
                    <span className="pd-typo__label">Labels / Accent</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 16, fontWeight: 400 }}>Inter — Corps de texte, descriptions, navigation</span>
                    <span className="pd-typo__label">Corps — Regular 400</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        <ProjectNav slug="sentinel" />

      </motion.div>
    </>
  )
}
