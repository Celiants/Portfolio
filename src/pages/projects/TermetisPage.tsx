import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  home:      '/assets/projects/termetis/accueil.png',
  danses:    '/assets/projects/termetis/danses.png',
  creneaux:  '/assets/projects/termetis/creneaux.png',
  equipe:    '/assets/projects/termetis/equipe.png',
  actu:      '/assets/projects/termetis/actualites.png',
}

const COLORS = [
  { hex: '#C8503A', name: 'Rouge principal'  },
  { hex: '#C98512', name: 'Jaune principal'  },
  { hex: '#F6EFE2', name: 'Fond'             },
  { hex: '#FBF6EC', name: 'Fond secondaire'  },
  { hex: '#1A1410', name: 'Titre'            },
  { hex: '#3D3027', name: 'Texte'            },
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

export default function TermetisPage() {
  return (
    <>
      <Helmet>
        <title>Termétis — Célia Antunes</title>
        <meta name="description" content="Site vitrine pour l'association Termétis, dédiée à la danse et musique africaine en Normandie." />
      </Helmet>

      <motion.div
        className="pd"
        style={{ '--pd-accent': '#C4721F' } as React.CSSProperties}
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
                Termétis
              </motion.h1>

              <motion.p
                className="pd-hero__sub"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                Site association danse africaine
              </motion.p>

              <motion.div
                className="pd-meta"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36 }}
              >
                <div className="pd-meta__year-row">
                  <span className="pd-meta__year">2026</span>
                  <span className="pd-meta__year-line" />
                </div>
                <p className="pd-meta__primary">UI Design</p>
                <p className="pd-meta__secondary">Figma · Site vitrine · Identité visuelle · Wireframes</p>
              </motion.div>
            </div>

            <motion.div
              className="pd-hero__right"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
            >
              <BrowserMock src={IMGS.home}  alt="Termétis — Page d'accueil" className="pd-browser--primary" />
              <BrowserMock src={IMGS.danses} alt="Termétis — Danses"        className="pd-browser--secondary" />
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
                Termétis est une association de danse et musique africaine transmettant les répertoires traditionnels du Mali et de la Guinée. Le projet consistait à concevoir et développer leur site vitrine afin de valoriser leurs activités, présenter leurs cours, leurs intervenants et leurs actualités. L'objectif était de créer une plateforme claire et accessible, capable de refléter l'identité culturelle de l'association tout en facilitant la découverte de ses activités pour de nouvelles danseuses ainsi que le suivi des actualités et des stages pour les danseuses déjà inscrites.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Contexte</span>
                <p className="pd-body-text">
                  L'association disposait uniquement d'une page Facebook pour communiquer. Lors de leurs participations à des salons afin de recruter de nouvelles danseuses, elles rencontraient des difficultés à présenter clairement leurs activités et à attirer de nouvelles adhérentes. Le besoin était donc de disposer d'un site centralisé, permettant de structurer l'information et de rendre l'association plus visible et identifiable en ligne.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  J'ai conçu un site vitrine simple, lisible et engageant, mettant en avant les différentes danses, les cours, les intervenants et les actualités de l'association. L'identité visuelle a été développée à partir de leur logo existant, afin de refléter l'univers de Termétis et de créer une interface cohérente et attractive, donnant envie aux nouvelles danseuses de rejoindre l'association.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ PROCESSUS DE CONCEPTION ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '32px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Processus de conception</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                J'ai commencé par un échange avec la professeure de danse afin de définir précisément les besoins du site vitrine. Cet échange m'a permis de construire une forme de cahier des charges et de clarifier les attentes en termes de contenu, de visibilité des activités et de communication autour des stages et événements.
                Une fois les informations réunies, j'ai réalisé une phase de recherche sur d'autres sites d'associations et d'écoles de danse afin d'identifier les codes visuels que les sites mettaient en pratique pour mettre en valeur leurs cours. J'ai ensuite traduit ces réflexions sous forme de wireframes, réalisés à la main sur papier pour explorer librement différentes idées d'organisation.
              </motion.p>
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
              <motion.img {...fadeUp(0.05)} src="/assets/projects/termetis/wireframe-01.jpg" alt="Wireframe Termétis — accueil" style={{ width: '45%', height: '360px', objectFit: 'contain' }} />
              <motion.img {...fadeUp(0.1)} src="/assets/projects/termetis/wireframe-02.png" alt="Wireframe Termétis — actualités" style={{ width: '45%', height: '360px', objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* ══ SCREENS ══ */}
        <section className="pd-section pd-section--screens">
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '48px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Conception du site</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                L'interface de la page d'accueil a notamment été pensée autour d'un carrousel mettant en avant les actualités de l'association, afin de créer un point d'entrée dynamique et attractif. Les deux styles de danse enseignés ont également été mis en avant pour permettre une compréhension rapide de l'activité de Termétis dès l'arrivée sur le site.
              </motion.p>
            </div>

            <div className="pd-screens">

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">1</span>
                  <span className="pd-scr__name">Page d'accueil</span>
                </div>
                <BrowserMock src={IMGS.home} alt="Page d'accueil" className="pd-browser--full" />
              </motion.div>

              <div className="pd-scr-row pd-scr-row--3-2">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">2</span>
                    <span className="pd-scr__name">Styles de danse</span>
                  </div>
                  <BrowserMock src={IMGS.danses} alt="Styles de danse" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">3</span>
                    <span className="pd-scr__name">Créneaux et lieux</span>
                  </div>
                  <BrowserMock src={IMGS.creneaux} alt="Créneaux et lieux" />
                </motion.div>
              </div>

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">4</span>
                  <span className="pd-scr__name">L'équipe</span>
                </div>
                <BrowserMock src={IMGS.equipe} alt="L'équipe" className="pd-browser--full" />
              </motion.div>

              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">5</span>
                  <span className="pd-scr__name">Actualités</span>
                </div>
                <BrowserMock src={IMGS.actu} alt="Actualités" className="pd-browser--full" />
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
                    <span className="pd-typo__text" style={{ fontSize: 40, fontWeight: 700, fontFamily: '"DM Serif Display", serif' }}>DM Serif Display</span>
                    <span className="pd-typo__label">Titres — Regular 400</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 28, fontWeight: 400, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', color: '#C8503A' }}>Instrument Serif</span>
                    <span className="pd-typo__label">Sous-titres / Accent — Italic</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 18, fontWeight: 500, fontFamily: 'Manrope, sans-serif' }}>Manrope</span>
                    <span className="pd-typo__label">Navigation / UI — Medium 500</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 16, fontWeight: 400, fontFamily: '"Crimson Text", serif', color: '#3D3027' }}>Crimson Text</span>
                    <span className="pd-typo__label">Corps — Regular 400</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        <ProjectNav slug="termetis" />

      </motion.div>
    </>
  )
}
