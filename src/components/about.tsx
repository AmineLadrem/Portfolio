import React from 'react';
import StackByCategory from './StackByCategory';
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
          <div className="stat-number">IoT • AI • Web</div>
          <div className="stat-label">Specialized Solutions</div>
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

      <section className="experience-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="exp-list">
          <div className="exp-item">
            <div className="exp-meta">Home by Kasbah, Algeria | Jul 2023 - Jul 2024</div>
            <div className="exp-role">IoT Developer</div>
            <div className="exp-subrole">Sonatrach – Smart Room Management System</div>
            <ul className="exp-bullets">
              <li>Developed and deployed smart room service with remotely configurable smart locks (BLE, Wi‑Fi).</li>
              <li>Utilized ESP32‑C6 and ESP‑IDF to implement RFID functionalities.</li>
              <li>Built a web dashboard for access management using Node‑RED, MariaDB, and HTML/CSS/JS.</li>
            </ul>

            <div className="exp-subrole">Metro d'Alger – Tripod Access Control System</div>
            <ul className="exp-bullets">
              <li>Implemented secure communication between remote servers and tripod gates.</li>
              <li>Delivered Python services with SSH/SFTP data exchange and a monitoring web UI.</li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="exp-meta">Port of Algiers, Algeria | Jan 2023 - Jun 2023</div>
            <div className="exp-role">Intern – Full‑Stack Developer</div>
            <p className="exp-desc">
              Developed a mobile/web app for real‑time container tracking using Flutter, Laravel, MySQL and Firebase.
            </p>
          </div>
        </div>
      </section>

      <section className="stack-section">
        <h2 className="section-title">My Stack</h2>
        {}
        <StackByCategory />
      </section>

      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          <div className="edu-item">
            <div className="edu-degree">MSc Computer Science (Machine Intelligence)</div>
            <div className="edu-meta">University of Basel, Switzerland | Sep 2024 – Present</div>
          </div>
          <div className="edu-item">
            <div className="edu-degree">BSc Computer Systems Engineering and Software</div>
            <div className="edu-meta">USTHB, Algeria | Oct 2020 – Jun 2023</div>
          </div>
          <div className="edu-item">
            <div className="edu-degree">Mathematics Baccalaureate</div>
            <div className="edu-meta">Bouzghaï Rabah High School | Sep 2017 – Sep 2020</div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default About;