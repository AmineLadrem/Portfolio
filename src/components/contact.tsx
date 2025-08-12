import { type FormEvent } from 'react';
import { FiMail, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact page-animate">
      <header className="contact-header">
        <h1 className="hero-title">Contact Me</h1>
        <p className="hero-subtitle">
          Feel free to reach out if you have a project idea, or any questions. You can use the form below for project inquiries.
        </p>
      </header>

      <hr className="divider" />

      <div className="contact-grid">
        <div className="contact-card">
          <h3 className="contact-card-title">Project Inquiry</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="label">Name</span>
              <input className="input" type="text" placeholder="Jane Smith" required />
            </label>

            <label className="field">
              <span className="label">Email</span>
              <input className="input" type="email" placeholder="email@gmail.com" required />
            </label>

            <label className="field">
              <span className="label">Existing website (optional)</span>
              <input className="input" type="url" placeholder="Website URL" />
            </label>

            <label className="field">
              <span className="label">Project details</span>
              <textarea className="textarea" rows={6} placeholder="Web design..."></textarea>
            </label>

            <button className="btn primary" type="submit">Send Inquiry</button>
          </form>
        </div>

        <aside className="contact-aside">
          <div className="contact-card">
            <h4 className="contact-card-title">Let's Connect</h4>
            <a className="contact-email" href="mailto:amineladrem02@gmail.com">
              <FiMail /> amineladrem02@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h4 className="contact-card-title">Follow Me</h4>
            <div className="socials">
              <a className="chip" href="https://github.com/AmineLadrem"><FiGithub /> Github</a>
              <a className="chip" href="https://www.linkedin.com/in/abd-ul-haq-amine-ladrem/"><FiLinkedin /> LinkedIn</a>
              <a className="chip" href="https://www.instagram.com/awpxr/"><FiInstagram /> Instagram</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
