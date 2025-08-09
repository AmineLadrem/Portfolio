import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import reactLogo from '../assets/react.svg';
import Containers from './projects/containers';
import Lotus from './projects/lotus';
import SRS from './projects/srs';
import Inotel from './projects/inotel';
import Quantum from './projects/quantum';
import portImg from '../assets/port.png';
import lotusImg from '../assets/Lotus.png';
import logoImg from '../assets/logo.png';

type ProjectItem = {
  title: string;
  tag: string;
  imageSrc: string;
  titleKey: keyof typeof detailMap | string;
};

const PROJECTS: ProjectItem[] = [
  { title: 'Tracking Containers', tag: 'Framer Template', imageSrc: portImg, titleKey: 'containers' },
  { title: 'Lotus', tag: 'Framer Template', imageSrc: lotusImg, titleKey: 'lotus' },
  { title: 'Smart Room Service', tag: 'Landing Page', imageSrc: logoImg, titleKey: 'srs' },
  { title: 'Error-Free-Quantum-States---Repetition-Code', tag: 'Directory Website', imageSrc: reactLogo, titleKey: 'quantum' },
  { title: 'Inotel', tag: 'SaaS Dashboard', imageSrc: logoImg, titleKey: 'inotel' },
  { title: 'Atlas', tag: 'Marketing Site', imageSrc: reactLogo, titleKey: 'lotus' },
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

  if (activeKey && detailMap[activeKey]) {
    const Detail = detailMap[activeKey];
    return <Detail onBackToAll={() => setActiveKey(null)} onOpenProject={setActiveKey} />;
  }

  return (
    <section className="projects-section projects-page page-animate">
      <h1 className="services-heading">Recent Projects</h1>
      <hr className="divider" />

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card" onClick={() => setActiveKey(project.titleKey)}>
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
