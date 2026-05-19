import { motion } from "framer-motion";
import { useLocation, useNavigationType } from "react-router-dom";

const skills = [
  "UI Design",
  "Figma",
  "Prototypage",
  "Wireframing",
  "Responsive Design",
];

export default function Hero() {
  const navType = useNavigationType()
  const location = useLocation()
  const isReturning = navType === 'POP' || !!(location.state as { back?: boolean } | null)?.back || !!location.hash

  return (
    <section id="apropos" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__grid">
          <motion.div
            className="hero__content"
            initial={isReturning ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="hero__eyebrow">Designer UX/UI · Rouen</span>

            <h1 className="hero__title" id="hero-title">
              <span className="hero__title-line">Célia</span>
              <span className="hero__title-line" style={{ color: "#62769E" }}>Antunes</span>
            </h1>

            <p className="hero__body">
              Développeuse reconvertie au design, j'ai trouvé ma voie chez Sewlau : créer des interfaces qui ont du sens. Aujourd'hui en Mastère UX à la Normandie Web School, je conçois des expériences centrées utilisateur qui résolvent de vrais problèmes.
            </p>

            <div className="hero__skills">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  className="skill-chip"
                  initial={isReturning ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero__portrait-wrap"
            initial={isReturning ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <img
              src="/assets/celia-portrait.png"
              alt="Portrait de Célia Antunes"
              className="hero__portrait"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
