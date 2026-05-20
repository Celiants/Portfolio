import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  carte: '/assets/projects/katlidev/carte-recto.png',
  verso: '/assets/projects/katlidev/carte-verso.png',
}

const COLORS = [
  { hex: '#00924C', name: 'Couleur principale' },
  { hex: '#000000', name: 'Texte'              },
  { hex: '#FEFEFE', name: 'Texte blanc'        },
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

export default function KatliDevPage() {
  return (
    <>
      <Helmet>
        <title>KatliDev — Célia Antunes</title>
        <meta name="description" content="Création d'une carte de visite professionnelle pour une développeuse indépendante." />
      </Helmet>

      <motion.div
        className="pd"
        style={{ '--pd-accent': '#00924C' } as React.CSSProperties}
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
                KatliDev
              </motion.h1>

              <motion.p
                className="pd-hero__sub"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                Carte de visite développeuse
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
                <p className="pd-meta__primary">Design Graphique<br />Création graphique</p>
                <p className="pd-meta__secondary">Canva · Branding · Logo · Charte graphique</p>
              </motion.div>
            </div>

            <motion.div
              className="kd-crawl"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
            >
              <div className="kd-crawl__inner">
                <div className="kd-card kd-card--a">
                  <img src={IMGS.carte} alt="KatliDev — Carte de visite recto" loading="eager" />
                </div>
                <div className="kd-card kd-card--b">
                  <img src={IMGS.verso} alt="KatliDev — Carte de visite verso" loading="eager" />
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
                Dans le cadre de mon IUT en BUT Informatique, nous avons réalisé un projet de groupe consistant à imaginer une marque de A à Z en réponse à un appel d'offre fictif proposé par les enseignants. Par équipe de six, nous devions construire l'identité complète de l'entreprise : concept, histoire, logo, identité visuelle et stratégie de présentation. Le projet reproduisait un véritable contexte professionnel, avec des échanges client, des rendez-vous préparatoires et une organisation de travail collaborative.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Contexte</span>
                <p className="pd-body-text">
                  L'objectif du projet était de nous confronter à une situation réelle de gestion de projet et de relation client, dans un cadre pédagogique simulant un véritable appel d'offre. Nous devions préparer une demande de rendez-vous professionnel et anticiper les échanges avec le client en réfléchissant collectivement aux questions, besoins et attentes du projet. Au-delà de la création visuelle, ce travail demandait une forte capacité d'organisation, de coordination entre membres de l'équipe et de gestion des priorités tout au long du projet.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  Nous avons mis en place une organisation de travail structurée afin de gérer efficacement les différentes étapes du projet. La répartition des tâches s'est faite via un système de tickets et des groupes de travail ponctuels selon les besoins du projet. Cette méthode nous a permis de coordonner la création de l'identité visuelle, la préparation des échanges clients et le suivi de l'avancement du projet tout en développant des compétences en communication, gestion d'équipe et résolution de conflits.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ CONSTRUCTION DE L'IDENTITÉ DE MARQUE ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row">
              <motion.span className="pd-section-label" {...fadeUp(0)}>Construction de l'identité de marque</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                La première étape du projet a consisté à définir l'univers et les services de notre entreprise fictive. Nous avons choisi de développer une agence spécialisée dans le développement d'applications, la maintenance ainsi que la création de sites web et mobiles. Notre ambition était d'accompagner les entreprises dans leur transition numérique à travers une approche accessible et moderne.
                Nous avons ensuite travaillé sur les valeurs que devait transmettre la marque : une vision écoresponsable, un objectif de transparence ainsi qu'une attention particulière portée à la qualité de service. Le symbole du chat s'est rapidement imposé comme élément central de l'identité, représentant la curiosité, l'agilité, la rapidité, la convivialité et l'intelligence.
                C'est à partir de cette réflexion qu'est né le nom Katlidev : une combinaison entre "cat/chat", "qualité" et "dev". Le choix du vert dans l'identité visuelle faisait écho à l'engagement écoresponsable de la marque, cette couleur étant souvent associée à la nature, l'équilibre et l'innovation durable.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══ RECHERCHE ET CRÉATION DU LOGO ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '32px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Recherche et création du logo</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                Pour la conception du logo, j'ai d'abord exploré plusieurs pistes autour de la tête d'un chat afin de représenter directement l'identité de la marque. Cependant, lors des tests sur des formats plus petits, le nom devenait difficilement lisible dans certains documents et supports.
                Nous avons donc réorienté le concept vers une silhouette de chat plus minimaliste et adaptable. Après plusieurs essais et ajustements de formes, de proportions et d'intégration typographique, nous avons trouvé une version plus équilibrée, capable de rester identifiable même en petit format.
              </motion.p>
            </div>
            <motion.img {...fadeUp(0.1)} src="/assets/projects/katlidev/logo-recherche.png" alt="Recherche logo Katlidev" style={{ width: '65%', borderRadius: '8px', boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)', display: 'block', margin: '0 auto' }} />
          </div>
        </section>

        {/* ══ DÉCLINAISONS GRAPHIQUES ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '32px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Déclinaisons graphiques</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                Une fois le logo validé, j'ai réalisé différentes déclinaisons pour assurer son utilisation sur plusieurs supports : versions en noir et blanc, adaptations pour petits formats, variations de contraste et tests de lisibilité. Cette étape permettait de garantir une identité visuelle cohérente et facilement exploitable dans tous les contextes de communication.
              </motion.p>
            </div>
            <motion.img {...fadeUp(0.1)} src="/assets/projects/katlidev/logo-declinaisons.png" alt="Déclinaisons logo Katlidev" style={{ width: '65%', borderRadius: '8px', boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)', display: 'block', margin: '0 auto' }} />
          </div>
        </section>

        {/* ══ SCREENS ══ */}
        <section className="pd-section pd-section--screens">
          <div className="pd-wrap">
            <motion.span className="pd-section-label" {...fadeUp(0)}>Visuels du projet</motion.span>

            <div className="pd-screens">
              <div className="pd-scr-row pd-scr-row--1-1">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">1</span>
                    <span className="pd-scr__name">Recto</span>
                  </div>
                  <PrintFrame src={IMGS.carte} alt="KatliDev — Carte de visite recto" className="pd-print-frame--bare" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">2</span>
                    <span className="pd-scr__name">Verso</span>
                  </div>
                  <PrintFrame src={IMGS.verso} alt="KatliDev — Carte de visite verso" className="pd-print-frame--bare" />
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
                        style={{ background: c.hex, border: c.hex === '#FEFEFE' ? '1px solid #E0E0E0' : 'none' }}
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
                    <span className="pd-typo__text" style={{ fontSize: 40, fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', color: '#00924C' }}>Nunito Sans</span>
                    <span className="pd-typo__label">Titres — Bold 700</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 22, fontWeight: 400, fontFamily: '"Nunito Sans", sans-serif' }}>Nunito Sans</span>
                    <span className="pd-typo__label">Corps — Regular 400</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ProjectNav slug="katlidev" />

      </motion.div>
    </>
  )
}
