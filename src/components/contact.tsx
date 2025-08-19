import { FiMail, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section className="contact page-animate minimalist-contact">
      <header className="contact-header">
        <h1 className="hero-title">Contact Me</h1>
        <p className="hero-subtitle">I’d love to hear from you — choose your favorite way to connect.</p>
      </header>

      <hr className="divider" />

      <div className="contact-center">
        <a
          href="mailto:contact.amineladrem@gmail.com"
          className="cta-email"
          aria-label="Send me an email"
        >
          <FiMail />
          <span>Send me an Email</span>
        </a>

        <div className="social-icons" aria-label="Follow me on social media">
          <a className="icon-btn github" href="https://github.com/AmineLadrem" aria-label="GitHub" target="_blank" rel="noreferrer noopener">
            <FiGithub />
          </a>
          <a className="icon-btn linkedin" href="https://www.linkedin.com/in/abd-ul-haq-amine-ladrem/" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">
            <FiLinkedin />
          </a>
          <a className="icon-btn instagram" href="https://www.instagram.com/awpxr/" aria-label="Instagram" target="_blank" rel="noreferrer noopener">
            <FiInstagram />
          </a>
        </div>

        <p className="contact-tagline">Let’s Build Something Together 🚀</p>
      </div>
    </section>
  );
};

export default Contact;
