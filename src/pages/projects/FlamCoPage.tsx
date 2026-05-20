import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import '../../styles/project-detail.css'
import ProjectNav from '../../components/ui/ProjectNav'

const IMGS = {
  logo:     '/assets/projects/flamco/logo.png',
  home:     '/assets/projects/flamco/accueil.png',
  cart:     '/assets/projects/flamco/panier.png',
  login:    '/assets/projects/flamco/connexion.png',
  location: '/assets/projects/flamco/localisation.png',
  camera:   '/assets/projects/flamco/camera.png',
  product:  '/assets/projects/flamco/produit.png',
}

const FC_COLORS = [
  { hex: '#FAA03F', name: 'Couleur principale' },
  { hex: '#FFF4E8', name: 'Couleur pour les fonds' },
  { hex: '#CDCDCD', name: 'Contour de carte' },
  { hex: '#000000', name: 'Texte' },
  { hex: '#696969', name: 'Bouton non sélectionné' },
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

export default function FlamCoPage() {
  return (
    <>
      <Helmet>
        <title>Flam&amp;Co — Célia Antunes</title>
        <meta name="description" content="Site e-commerce équipements cinéma & SFX — UI Design et développement Front-end." />
      </Helmet>

      <motion.div
        className="pd"
        style={{ '--pd-accent': '#E87324' } as React.CSSProperties}
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
                Flam&amp;Co
              </motion.h1>

              <motion.p
                className="pd-hero__sub"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                E-commerce équipements cinéma &amp; SFX
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
                <p className="pd-meta__primary">Design graphique<br />Conception UX/UI</p>
                <p className="pd-meta__secondary">Figma · E-commerce · UX Research · Cinéma</p>
              </motion.div>
            </div>

            <motion.div
              className="pd-hero__right"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
            >
              <BrowserMock src={IMGS.home}    alt="Flam&Co — Page d'accueil" className="pd-browser--primary pd-browser--h380" />
              <BrowserMock src={IMGS.product} alt="Flam&Co — Page produit"   className="pd-browser--secondary" />
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
                Flam &amp; Co est une entreprise spécialisée dans la location et la vente d'équipements pour le cinéma et l'audiovisuel : consommables de tournage, caméras, matériel de régie et effets spéciaux. Réalisé dans le cadre de mon alternance dans l'entreprise Sewlau, ce projet consistait à concevoir une vitrine e-commerce moderne et intuitive, capable de valoriser un large catalogue de matériel disponible à l'achat et à la location. L'expérience a été pensée autour d'une navigation claire par catégories, facilitant l'accès aux informations techniques et simplifiant le parcours utilisateur des professionnels du secteur audiovisuel.
              </p>
            </motion.div>

            <div className="pd-two-col">
              <motion.div className="pd-two-col__item" {...fadeUp(0)}>
                <span className="pd-section-label">Contexte</span>
                <p className="pd-body-text">
                  Le site existant ne permettait pas la commande en ligne et ne reflétait plus l'image ni les besoins actuels de l'entreprise. Flam &amp; Co souhaitait proposer une plateforme plus moderne, capable de présenter clairement son catalogue aux professionnels du secteur audiovisuel, à la recherche de matériel fiable, rapidement accessible et accompagné d'informations techniques précises.
                </p>
              </motion.div>
              <motion.div className="pd-two-col__item" {...fadeUp(0.1)}>
                <span className="pd-section-label">Solution</span>
                <p className="pd-body-text">
                  J'ai conçu une interface centrée sur la clarté du parcours utilisateur et l'accessibilité des contenus techniques, avec une architecture pensée pour simplifier la navigation entre les nombreuses catégories de matériel. La direction artistique s'appuie sur les couleurs chaudes déjà présentes dans le logo existant, créant une interface moderne et cohérente avec l'univers de la marque.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ DÉCOUVERTE DE L'ANCIEN SITE ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '32px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Découverte de l'ancien site</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                La première étape du projet a été l'analyse du site existant afin de comprendre ses limites et les attentes des utilisateurs. Les pages produits présentaient uniquement une image et le nom du matériel, sans informations techniques complémentaires, descriptions détaillées ou indications tarifaires. L'interface manquait également de hiérarchie visuelle et de structure, rendant la navigation et l'accès aux contenus moins intuitifs pour les professionnels recherchant des informations rapides et précises.
              </motion.p>
            </div>
            <div className="pd-img-row">
              <motion.div {...fadeUp(0.1)}>
                <BrowserMock src="/assets/projects/flamco/ancien-accueil.png" alt="Ancien site Flam&Co — accueil" />
              </motion.div>
              <motion.div {...fadeUp(0.15)}>
                <BrowserMock src="/assets/projects/flamco/ancien-produit.png" alt="Ancien site Flam&Co — produits" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ DÉCOUVERTE DU CAHIER DES CHARGES ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row">
              <motion.span className="pd-section-label" {...fadeUp(0)}>Découverte du cahier des charges</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                J'ai ensuite étudié l'ensemble du cahier des charges transmis par Flam &amp; Co, regroupant le catalogue complet des produits, leurs descriptions, caractéristiques et tarifs. L'objectif était de concevoir une plateforme simple et efficace, permettant aux utilisateurs d'accéder facilement aux informations recherchées tout en intégrant des fonctionnalités interactives comme les favoris, le panier ou l'espace client.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══ RECHERCHE CONCURRENTIELLE ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row">
              <motion.span className="pd-section-label" {...fadeUp(0)}>Recherche concurrentielle</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                Une phase de veille et d'analyse concurrentielle m'a permis d'étudier les codes visuels et les parcours proposés par les sites spécialisés dans l'audiovisuel et la location de matériel professionnel. Cette recherche m'a aidée à identifier les bonnes pratiques en matière d'ergonomie, de navigation produit et de présentation des informations techniques.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══ CRÉATION DES WIREFRAMES ══ */}
        <section className="pd-section" style={{ borderTop: 'none' }}>
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '32px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Création des wireframes</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                Avant la conception de l'interface finale, j'ai commencé par esquisser différentes idées sur papier afin de structurer les principales pages du site. Cette étape m'a permis d'explorer rapidement plusieurs pistes de navigation et d'organisation des contenus, notamment pour la page d'accueil, pensée autour de visuels immersifs mettant en avant l'univers de l'entreprise ainsi qu'une présentation claire de son activité.
              </motion.p>
            </div>
            <div className="pd-img-row">
              <motion.img {...fadeUp(0.05)} src="/assets/projects/flamco/wireframe-01.png" alt="Wireframe caméra" style={{ width: '100%', height: '360px', objectFit: 'contain' }} />
              <motion.img {...fadeUp(0.1)} src="/assets/projects/flamco/wireframe-02.jpg" alt="Wireframe accueil" style={{ width: '100%', height: '360px', objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* ══ SCREENS ══ */}
        <section className="pd-section pd-section--screens">
          <div className="pd-wrap">
            <div className="pd-label-row" style={{ marginBottom: '48px' }}>
              <motion.span className="pd-section-label" {...fadeUp(0)}>Conception du site</motion.span>
              <motion.p className="pd-body-text" {...fadeUp(0.05)}>
                Une fois la structure validée, j'ai conçu l'interface du site en développant une expérience plus fluide, moderne et adaptée aux besoins des professionnels du secteur audiovisuel. Chaque page a été pensée pour valoriser le catalogue produit, faciliter l'accès aux informations techniques et rendre la navigation plus intuitive.
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

              <div className="pd-scr-row pd-scr-row--1-1">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">2</span>
                    <span className="pd-scr__name">Listing produits</span>
                  </div>
                  <BrowserMock src={IMGS.camera} alt="Listing caméra" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">3</span>
                    <span className="pd-scr__name">Fiche produit</span>
                  </div>
                  <BrowserMock src={IMGS.product} alt="Produit" />
                </motion.div>
              </div>

              <div className="pd-scr-row pd-scr-row--1-1">
                <motion.div className="pd-scr" {...fadeUp(0)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">4</span>
                    <span className="pd-scr__name">Panier</span>
                  </div>
                  <BrowserMock src={IMGS.cart} alt="Panier" />
                </motion.div>
                <motion.div className="pd-scr" {...fadeUp(0.1)}>
                  <div className="pd-scr__label">
                    <span className="pd-scr__num">5</span>
                    <span className="pd-scr__name">Connexion</span>
                  </div>
                  <BrowserMock src={IMGS.login} alt="Connexion" />
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
                  {FC_COLORS.map((c) => (
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
                    <span className="pd-typo__text" style={{ fontSize: 40, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>Inter</span>
                    <span className="pd-typo__label">Titres — Bold 700</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 24, fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>Inter</span>
                    <span className="pd-typo__label">Corps — Regular 400</span>
                  </div>
                  <div className="pd-typo__sample">
                    <span className="pd-typo__text" style={{ fontSize: 32, fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#FAA03F' }}>Inter</span>
                    <span className="pd-typo__label">Accent — Bold 700</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        <ProjectNav slug="flamco" />

      </motion.div>
    </>
  )
}
