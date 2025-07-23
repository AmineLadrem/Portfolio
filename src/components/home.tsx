import React from 'react';

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
        <button className="hero-btn">About Me</button>
      </div>
    </section>
    <hr className="hero-separator" />
  </>
);

export default Home;
