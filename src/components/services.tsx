import React from 'react';
import '../css/services.css';
import { FiWifi, FiCpu, FiServer, FiDatabase, FiMonitor, FiTool, FiAperture } from 'react-icons/fi';

const Services: React.FC = () => {
  return (
    <section className="services-section page-animate">
      <h1 className="services-heading">My Expertise</h1>
      <hr className="divider" />

      <div className="services-grid">
        <article className="service-card">
          <div className="service-title-row">
            <h3 className="service-title">IoT Projects</h3>
            <div className="service-title-icons"><FiWifi /><FiCpu /></div>
          </div>
          <p className="service-description">
            End-to-end Internet of Things solutions: sensor selection, firmware, connectivity,
            cloud integration, dashboards, and deployment.
          </p>
          <div className="service-actions">
            <a className="btn" href="#contact" aria-label="Get in touch about IoT projects">
              Get In Touch
            </a>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title-row">
            <h3 className="service-title">Backend / Server Development</h3>
            <div className="service-title-icons"><FiServer /><FiDatabase /></div>
          </div>
          <p className="service-description">
            APIs, microservices, databases, authentication, background jobs, and DevOps —
            designed for reliability, scalability, and performance.
          </p>
          <div className="service-actions">
            <a className="btn" href="#contact" aria-label="Get in touch about backend development">
              Get In Touch
            </a>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title-row">
            <h3 className="service-title">Web Development</h3>
            <div className="service-title-icons"><FiMonitor /><FiTool /></div>
          </div>
          <p className="service-description">
            Modern, responsive websites and web apps with great UX, performance, and SEO.
          </p>
          <div className="service-actions">
            <a className="btn" href="#contact" aria-label="Get in touch about web development">
              Get In Touch
            </a>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title-row">
            <h3 className="service-title">AI Development</h3>
            <div className="service-title-icons"><FiCpu /><FiAperture /></div>
          </div>
          <p className="service-description">
            Machine learning pipelines, LLM integration, embeddings, vector search, and
            intelligent automation tailored to your product.
          </p>
          <div className="service-actions">
            <a className="btn" href="#contact" aria-label="Get in touch about AI development">
              Get In Touch
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
