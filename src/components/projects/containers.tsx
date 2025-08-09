import React from 'react';
import ProjectDetail from './ProjectDetail';
import portImg from '../../assets/port.png';
import lotusImg from '../../assets/Lotus.png';
import logoImg from '../../assets/logo.png';

const Containers: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => {
  return (
    <ProjectDetail
      title="Tracking Containers"
      description="End-to-end system for tracking shipping containers in real time with dashboards and alerts."
      year="2024"
      service="Web Dev"
      category="IoT / Dashboard"
      tool="React"
      heroImage={portImg}
      related={[
        { key: 'lotus', title: 'Lotus', tag: 'Framer Template', imageSrc: lotusImg },
        { key: 'srs', title: 'Smart Room Service', tag: 'Landing Page', imageSrc: logoImg },
        { key: 'inotel', title: 'Inotel', tag: 'SaaS Dashboard', imageSrc: logoImg },
      ]}
      onBackToAll={onBackToAll}
      onOpenProject={onOpenProject}
    />
  );
};

export default Containers;


