import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  connexion: '/assets/projects/sentinel/connexion.png',
  dashboard: '/assets/projects/sentinel/tableau-bord.png',
  liste:     '/assets/projects/sentinel/tickets.png',
  kanban:    '/assets/projects/sentinel/kanban.png',
  pointage:  '/assets/projects/sentinel/pointage.png',
  profil:    '/assets/projects/sentinel/profil.png',
  org:       '/assets/projects/sentinel/organisation.png',
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
        <title>Sentinel — Kyliann Levesque</title>
        <meta name="description" content="Sentinel — Application web full-stack de gestion de tickets, pointage et TechHealth. ASP.NET Core, PostgreSQL, React, TypeScript." />
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
                Application web de gestion de tickets
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
              </motion.div>
            </div>

            <motion.div
              className="sn-solo"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="sn-solo__frame">
                <img src={IMGS.dashboard} alt="Sentinel — Tableau de bord" loading="lazy" />
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
                Sentinel est une application web de gestion de tickets et de projets destinée aux équipes de développement. Elle centralise le suivi des incidents, la planification des tâches, le pointage et la surveillance de l'état technique des projets au sein d'une interface épurée. L'expérience a été pensée pour que chaque membre de l'équipe accède rapidement à l'information dont il a besoin, sans friction et sans changer d'outil.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Problème</span>
                <p className="pd-body-text">
                  Les équipes de développement jonglent entre plusieurs outils pour gérer tickets, temps de travail et état technique des projets. Cette fragmentation ralentit le suivi, multiplie les allers-retours et nuit à la visibilité d'ensemble sur l'avancement réel du travail.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  Une interface unifiée pensée pour réduire la charge cognitive : chaque vue est conçue pour donner une lecture immédiate de l'état du projet. Les informations sont hiérarchisées, les actions accessibles en un clic, et la navigation construite autour des flux de travail réels de l'équipe.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <motion.span className="pd-section-label" {...fadeUp(0)}>Fonctionnalités</motion.span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginTop: '32px',
            }}>
              {[
                { num: '01', title: 'Tableau de bord', desc: 'Vue synthétique de l\'état de l\'équipe : tickets ouverts, urgences, activité récente et indicateurs clés en un coup d\'œil.' },
                { num: '02', title: 'Vue Kanban', desc: 'Glisser-déposer les tickets entre colonnes de statut. Interface fluide pensée pour le travail quotidien en équipe.' },
                { num: '03', title: 'Détail de ticket', desc: 'Fiche complète avec description, commentaires, pièces jointes et historique des modifications, tout au même endroit.' },
                { num: '04', title: 'Pointage', desc: 'Saisie rapide du temps passé sur chaque ticket, avec récapitulatif hebdomadaire par membre de l\'équipe.' },
                { num: '05', title: 'TechHealth', desc: 'Tableau de bord dédié à la santé des projets : dépendances obsolètes, vulnérabilités détectées et score global.' },
                { num: '06', title: 'Paramètres', desc: 'Gestion de l\'organisation, des membres et de leurs rôles depuis une interface d\'administration claire et structurée.' },
              ].map(({ num, title, desc }, i) => (
                <motion.div
                  key={num}
                  {...fadeUp(i * 0.05)}
                  style={{
                    padding: '24px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#5B4FE9', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{num}</span>
                  <strong style={{ fontSize: 15, fontWeight: 700, color: '#1E293B' }}>{title}</strong>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: '#64748B', margin: 0 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SCREENS ══ */}
        <section className="pd-section pd-section--screens">
          <div className="pd-wrap">
            <motion.span className="pd-section-label" {...fadeUp(0)}>Écrans du projet</motion.span>

            <div className="pd-screens">

              {/* 00 — Connexion full */}
              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">1</span>
                  <span className="pd-scr__name">Connexion</span>
                </div>
                <BrowserMock src={IMGS.connexion} alt="Page de connexion" className="pd-browser--full" />
              </motion.div>

              {/* 02 — Dashboard full */}
              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">2</span>
                  <span className="pd-scr__name">Tableau de bord</span>
                </div>
                <BrowserMock src={IMGS.dashboard} alt="Tableau de bord" className="pd-browser--full" />
              </motion.div>

              {/* 03 + 04 — Liste + Kanban */}
              <div className="pd-scr-row pd-scr-row--3-2">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">3</span>
                    <span className="pd-scr__name">Liste des tickets</span>
                  </div>
                  <BrowserMock src={IMGS.liste} alt="Liste des tickets" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">4</span>
                    <span className="pd-scr__name">Vue Kanban</span>
                  </div>
                  <BrowserMock src={IMGS.kanban} alt="Vue Kanban" />
                </motion.div>
              </div>

              {/* 05 — Pointage full */}
              <motion.div className="pd-scr pd-scr--full" {...fadeUp(0)}>
                <div className="pd-scr__label">
                  <span className="pd-scr__num">5</span>
                  <span className="pd-scr__name">Pointage</span>
                </div>
                <BrowserMock src={IMGS.pointage} alt="Pointage" className="pd-browser--full" />
              </motion.div>

              {/* 06 + 07 — Settings */}
              <div className="pd-scr-row pd-scr-row--1-1">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">6</span>
                    <span className="pd-scr__name">Profil</span>
                  </div>
                  <BrowserMock src={IMGS.profil} alt="Paramètres profil" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">7</span>
                    <span className="pd-scr__name">Organisation</span>
                  </div>
                  <BrowserMock src={IMGS.org} alt="Paramètres organisation" />
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
