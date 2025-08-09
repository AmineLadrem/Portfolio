import React from 'react';
import ProjectDetail from './ProjectDetail';
import logoImg from '../../assets/logo.png';
import lotusImg from '../../assets/Lotus.png';
import portImg from '../../assets/port.png';

const Inotel: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Inotel"
    description="SaaS platform for hotel connectivity and device management."
    year="2024"
    service="Backend / Web Dev"
    category="SaaS Dashboard"
    tool="React, Node.js"
    heroImage={logoImg}
    related={[
      { key: 'containers', title: 'Tracking Containers', tag: 'Dashboard', imageSrc: portImg },
      { key: 'lotus', title: 'Lotus', tag: 'Framer Template', imageSrc: lotusImg },
    ]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default Inotel;


