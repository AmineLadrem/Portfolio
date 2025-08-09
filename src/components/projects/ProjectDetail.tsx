import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

export type RelatedProject = {
  key: string;
  title: string;
  tag: string;
  imageSrc: string;
};

type ProjectDetailProps = {
  title: string;
  description: string;
  year: string;
  service: string;
  category: string;
  tool: string;
  heroImage?: string;
  repoUrl?: string;
  screenshots?: string[];
  related?: RelatedProject[];
  onBackToAll: () => void;
  onOpenProject: (key: string) => void;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  description,
  year,
  service,
  category,
  tool,
  heroImage,
  repoUrl,
  screenshots = [],
  related = [],
  onBackToAll,
  onOpenProject,
}) => {
  return (
    <section className="project-detail page-animate">
      <div className="detail-top">
        <button className="hero-btn back-btn" onClick={onBackToAll} aria-label="Back to all projects">
        <FiArrowLeft /> All projects
        </button>
      </div>
      <div className="detail-title-row">
        <h1 className="services-heading" style={{ margin: 0 }}>{title}</h1>
        {repoUrl && (
          <a className="hero-btn repo-btn" href={repoUrl} target="_blank" rel="noreferrer">
            View Repo
          </a>
        )}
      </div>
      <div style={{ height: 8 }} />
      <p className="project-detail-desc">{description}</p>

      <div className="project-info-panel">
        <div className="project-info-item">
          <div className="project-info-label">Year</div>
          <div className="project-info-value">{year}</div>
        </div>
        <div className="project-info-item">
          <div className="project-info-label">Service</div>
          <div className="project-info-value">{service}</div>
        </div>
        <div className="project-info-item">
          <div className="project-info-label">Category</div>
          <div className="project-info-value">{category}</div>
        </div>
        <div className="project-info-item">
          <div className="project-info-label">Tool</div>
          <div className="project-info-value">{tool}</div>
        </div>
      </div>

      {heroImage && (
        <div className="project-hero-image">
          <img src={heroImage} alt={`${title} hero`} />
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="screenshot-grid">
          {screenshots.map((src, idx) => (
            <div key={idx} className="screenshot-item">
              <img src={src} alt={`${title} screenshot ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}

      <div className="projects-header" style={{ marginTop: 32 }}>
        <h2 className="section-title">View More Projects</h2>
      </div>
      <div className="projects-grid">
        {related.map((p) => (
          <div
            key={p.key}
            className="project-card"
            onClick={() => onOpenProject(p.key)}
            role="button"
          >
            <a className="project-visit" aria-label={`Open ${p.title}`}>
              {/* icon is decorative; using CSS from App.css */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="project-thumb">
              <img src={p.imageSrc} alt={p.title} />
            </div>
            <div className="project-meta">
              <div className="project-title">{p.title}</div>
              <div className="project-tag">{p.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetail;


