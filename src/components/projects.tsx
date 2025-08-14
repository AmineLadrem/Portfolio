import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import reactLogo from '../assets/brand/react.svg';
import Containers from './projects/containers';
import Lotus from './projects/lotus';
import SRS from './projects/srs';
import Inotel from './projects/inotel';
import Quantum from './projects/quantum';
import portImg from '../assets/projects/containers/port.png';
import lotusImg from '../assets/projects/lotus/Lotus.png';
import inotelImg from '../assets/projects/inotel/inotel.png';
import srsImg from '../assets/projects/srs/SRS.png';

type ProjectItem = {
  title: string;
  tag: string;
  imageSrc: string;
  titleKey: keyof typeof detailMap | string;
};

const PROJECTS: ProjectItem[] = [
  { title: 'Tracking Containers', tag: 'IoT / Web Project', imageSrc: portImg, titleKey: 'containers' },
  { title: 'Lotus', tag: 'Mobile app / Web Dashboard', imageSrc: lotusImg, titleKey: 'lotus' },
  { title: 'Smart Room Service', tag: 'IoT Project', imageSrc: srsImg, titleKey: 'srs' },
  { title: 'Error-Free-Quantum-States---Repetition-Code', tag: 'Quantum Computing Project', imageSrc: reactLogo, titleKey: 'quantum' },
  { title: 'Inotel', tag: 'SaaS Dashboard', imageSrc: inotelImg, titleKey: 'inotel' },
];

type DetailRenderer = (props: { onBackToAll: () => void; onOpenProject: (key: string) => void }) => React.ReactElement;
const detailMap: Record<string, DetailRenderer> = {
  containers: (p) => <Containers {...p} />,
  lotus: (p) => <Lotus {...p} />,
  srs: (p) => <SRS {...p} />,
  inotel: (p) => <Inotel {...p} />,
  quantum: (p) => <Quantum {...p} />,
};

const Projects: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // Sync with hash for detail pages
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      const m = hash.match(/^#\/projects\/(.+)$/);
      if (m) {
        setActiveKey(m[1]);
      } else {
        setActiveKey(null);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  if (activeKey && detailMap[activeKey]) {
    const Detail = detailMap[activeKey];
    return <Detail onBackToAll={() => (window.location.hash = '#/projects')} onOpenProject={(k) => (window.location.hash = `#/projects/${k}`)} />;
  }

  return (
    <section className="projects-section projects-page page-animate">
      <h1 className="services-heading">Recent Projects</h1>
      <hr className="divider" />

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card" onClick={() => (window.location.hash = `#/projects/${project.titleKey}`)}>
            <div className="project-thumb">
              <img src={project.imageSrc} alt={`${project.title} preview`} />
              <div className="project-visit" aria-hidden>
                <FiArrowRight />
              </div>
            </div>
            <div className="project-meta">
              <div className="project-title">{project.title}</div>
              <div className="project-tag">{project.tag}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
