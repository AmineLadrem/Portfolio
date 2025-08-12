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
  onOpenProject?: (key: string) => void;
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
  onBackToAll,
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

      {/* Related section removed as requested */}
    </section>
  );
};

export default ProjectDetail;


