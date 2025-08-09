import React from 'react';
import ProjectDetail from './ProjectDetail';
import lotusImg from '../../assets/Lotus.png';
import portImg from '../../assets/port.png';
import logoImg from '../../assets/logo.png';

const Lotus: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Lotus"
    description="A clean, modern template focused on clarity and fast content consumption."
    year="2024"
    service="Web Design"
    category="Framer Template"
    tool="Framer"
    heroImage={lotusImg}
    repoUrl="https://github.com/youruser/lotus"
    screenshots={[lotusImg]}
    related={[
      { key: 'containers', title: 'Tracking Containers', tag: 'Dashboard', imageSrc: portImg },
      { key: 'inotel', title: 'Inotel', tag: 'SaaS Dashboard', imageSrc: logoImg },
      { key: 'srs', title: 'Smart Room Service', tag: 'Landing Page', imageSrc: logoImg },
    ]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default Lotus;


