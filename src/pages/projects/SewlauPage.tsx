import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  recto: '/assets/projects/sewlau/carte-recto.png',
  verso: '/assets/projects/sewlau/carte-verso.png',
}

const COLORS = [
  { hex: '#00227A', name: 'Couleur principale' },
  { hex: '#3358A7', name: 'Couleur secondaire' },
  { hex: '#AED1EA', name: 'Bleu clair'         },
  { hex: '#FEFEFE', name: 'Blanc'              },
]

function PrintFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`pd-print-frame pd-print-frame--screen ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.75, delay, ease: 'easeOut' as const },
})

export default function SewlauPage() {
  return (
    <>
      <Helmet>
        <title>Sewlau — Célia Antunes</title>
        <meta name="description" content="Conception de l'identité visuelle et des supports graphiques pour l'entreprise Sewlau." />
      </Helmet>

      <motion.div
        className="pd"
        style={{ '--pd-accent': '#1A2D8A' } as React.CSSProperties}
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
                Sewlau
              </motion.h1>

              <motion.p
                className="pd-hero__sub"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                Supports de communication & identité de marque
              </motion.p>

              <motion.div
                className="pd-meta"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36 }}
              >
                <div className="pd-meta__year-row">
                  <span className="pd-meta__year">2024</span>
                  <span className="pd-meta__year-line" />
                </div>
                <p className="pd-meta__primary">Design Graphique<br />Création graphique</p>
                <p className="pd-meta__secondary">Carte de visite · Identité de marque · Direction artistique</p>
              </motion.div>
            </div>

            <motion.div
              className="sw-crawl"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
            >
              <div className="sw-crawl__inner">
                <div className="sw-card sw-card--a">
                  <img src={IMGS.recto} alt="Sewlau — Recto" loading="eager" />
                </div>
                <div className="sw-card sw-card--b">
                  <img src={IMGS.verso} alt="Sewlau — Verso" loading="eager" />
                </div>
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
                Dans le cadre de mon alternance chez Sewlau, j'ai participé à la création des premiers supports graphiques de la marque. La startup, en phase de lancement, disposait déjà de son logo mais n'avait pas encore de supports de communication pour accompagner son développement commercial. J'ai donc été chargé de concevoir des cartes de visite afin de structurer sa présence professionnelle et faciliter les échanges avec clients et partenaires.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Contexte</span>
                <p className="pd-body-text">
                  Sewlau avait besoin de supports de communication professionnels et cohérents pour accompagner son lancement. La startup disposait déjà de son logo, mais aucun support physique n'existait encore pour représenter la marque dans un contexte commercial et renforcer sa crédibilité lors des échanges avec clients et partenaires.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  J'ai conçu des cartes de visite en m'appuyant sur l'identité visuelle existante afin d'assurer une cohérence graphique avec la marque. L'objectif était de créer un support clair, mémorable et professionnel, permettant de transmettre rapidement les informations essentielles tout en renforçant la crédibilité de Sewlau lors des échanges commerciaux.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ SCREENS ══ */}
        <section className="pd-section pd-section--screens">
          <div className="pd-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px', marginBottom: '48px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Processus de création</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                J'ai construit la carte de visite à partir de l'identité graphique déjà existante de Sewlau, en reprenant les couleurs et la typographie définies dans la charte associée au logo, afin de garantir une cohérence visuelle.
                Pour enrichir le design, je me suis inspiré de l'univers de la marque : le nom "Sewlau" évoquant l'eau et l'ambiance du bureau étant déjà liée à cet univers maritime, j'ai intégré un motif de vagues comme élément graphique principal. L'ondulation des vagues a été construite à partir des formes du logo, que j'ai adaptées, agrandies et répétées selon le recto et le verso de la carte, afin de créer un motif fluide et identitaire.
                Dans le cadre d'un salon professionnel auquel l'équipe participait, j'ai également contribué à la préparation des supports marketing de la marque. Je me suis occupé de la conception et de la commande de différents goodies et supports de communication, comme des stylos personnalisés ainsi que des pulls pour l'équipe, afin d'assurer une image cohérente et professionnelle lors de l'événement.
              </motion.p>
            </div>

            <div className="pd-screens">
              <div className="pd-scr-row pd-scr-row--1-1">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">1</span>
                    <span className="pd-scr__name">Recto</span>
                  </div>
                  <PrintFrame src={IMGS.recto} alt="Sewlau — Recto" className="pd-print-frame--bare" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">2</span>
                    <span className="pd-scr__name">Verso</span>
                  </div>
                  <PrintFrame src={IMGS.verso} alt="Sewlau — Verso" className="pd-print-frame--bare" />
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
                        style={{ background: c.hex, border: c.hex === '#FFFFFF' || c.hex === '#A8D4F0' ? '1px solid #E0E0E0' : 'none' }}
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
                    <span className="pd-typo__text" style={{ fontSize: 40, fontWeight: 700, fontFamily: '"Titillium Web", sans-serif', color: '#00227A' }}>Titillium Web</span>
                    <span className="pd-typo__label">Titres — Bold 700</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 22, fontWeight: 400, fontFamily: '"Open Sans", sans-serif', color: '#3358A7' }}>Open Sans</span>
                    <span className="pd-typo__label">Corps — Regular 400</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ProjectNav slug="sewlau" />

      </motion.div>
    </>
  )
}
