import React from 'react';
import profileImageUrl from '../assets/profile.jpg';

type AboutProps = { onSelect: (key: string) => void };

const About: React.FC<AboutProps> = ({ onSelect }) => (
  <>
    <section className="hero">
      <h1 className="hero-title">About Me</h1>
      <div className="hero-actions">
        <button
          className="hero-btn primary"
          onClick={() => onSelect('contact')}
        >
          Get In Touch
        </button>
        <button
          className="hero-btn"
          onClick={() => onSelect('services')}
        >
          View Services
        </button>
      </div>
    </section>
    <hr className="hero-separator" />

    <div className="about-container page-animate">
      <div className="about-stats">
        <div className="stat">
          <div className="stat-key">Based In</div>
          <div className="stat-value">Basel, Switzerland</div>
        </div>
        <div className="stat">
          <div className="stat-number">3</div>
          <div className="stat-label">Years of Experience</div>
        </div>
        <div className="stat">
          <div className="stat-number">150+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
      </div>

      <div className="about-grid">
      <div className="about-text">
  <h2 className="about-heading">Hello! I'm Abd-Ul-Haq Amine,</h2>
  <p>
    I’m an IoT Developer and Backend Engineer with a passion for creating efficient, responsive, 
    and reliable systems. I hold a Bachelor’s Degree in Computer Systems Engineering and Software, 
    providing me with a strong foundation for innovative problem-solving. 
  </p>
  <p>
    My expertise spans embedded systems and backend development. I have hands-on experience 
    with Arduino, ESP-IDF, Node-RED, and microcontroller programming, as well as backend 
    technologies like Laravel, MySQL, and Firebase to deliver robust, scalable solutions.
  </p>
  <p>
    Throughout my career, I’ve collaborated with diverse clients and teams to build products 
    that stand out in the market. My dedication to continuous learning—currently pursued 
    through a Master’s in Computer Science (Machine Intelligence)—ensures my work remains 
    innovative, relevant, and impactful.
  </p>
</div>

        <div className="about-photo">
          <img src={profileImageUrl} alt="Portrait" />
        </div>
      </div>
    </div>
  </>
);

export default About;