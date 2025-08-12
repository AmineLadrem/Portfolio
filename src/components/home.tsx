import StackByCategory from './StackByCategory';

const Home = ({ onSelect }: { onSelect: (key: string) => void }) => (
  <>
    <section className="hero">
      <div className="status-badge">
        <span className="status-dot" /> Available for Work
      </div>
      <h1 className="hero-title">
        Hey, I'm Abd-Ul-Haq Amine.<br />
        I'm a IoT Developer and a Software Engineer.
      </h1>
      <p className="hero-subtitle">
        Highly motivated Software Developer with expertise in full-stack development and IoT solutions, currently pursuing studies in Machine Intelligence.
      </p>
      <div className="hero-actions">
        <button className="hero-btn primary" onClick={() => onSelect('contact')}>Get In Touch</button>
        <button className="hero-btn" onClick={() => onSelect('about')}>About Me</button>
      </div>
    </section>
  <div className="page-animate">
    <hr className="hero-separator" />

    {/* Selected Projects (template) */}
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Selected Projects</h2>
        <button className="hero-btn" onClick={() => onSelect('projects')}>All Projects</button>
      </div>
      <div className="projects-grid">
        {[
          { title: 'Lucis', href: '#', img: '/icon.png' },
          { title: 'Capture', href: '#', img: '/icon.png' },
          { title: 'Zenith', href: '#', img: '/icon.png' },
        ].map((p) => (
          <div key={p.title} className="project-card">
            <a
              href={p.href}
              className="project-visit"
              aria-label={`Open ${p.title}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="project-thumb">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-meta">
              <div className="project-title">{p.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* My Stack (same section as About) */}
    <section className="stack-section">
      <h2 className="section-title">My Stack</h2>
      <StackByCategory />
    </section>
     {/* empty div  */}
     <div style={{ height: '100px' }} />
  </div>
  </>
);

export default Home;
