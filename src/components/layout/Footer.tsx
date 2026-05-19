export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Célia Antunes
        </p>
        <div className="footer__links">
          <a
            href="https://fr.linkedin.com/in/célia-antunes-ants"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Celiants"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
