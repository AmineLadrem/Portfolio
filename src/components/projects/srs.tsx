import React from 'react';
import ProjectDetail from './ProjectDetail';
import logoImg from '../../assets/logo.png';
import lotusImg from '../../assets/Lotus.png';
import portImg from '../../assets/port.png';

const SRS: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Smart Room Service"
    description="A smart hotel room service solution with mobile ordering and IoT integrations."
    year="2023"
    service="Web Dev"
    category="Landing Page"
    tool="React"
    heroImage={logoImg}
    repoUrl="https://github.com/youruser/smart-room-service"
    screenshots={[logoImg]}
    related={[
      { key: 'containers', title: 'Tracking Containers', tag: 'Dashboard', imageSrc: portImg },
      { key: 'lotus', title: 'Lotus', tag: 'Framer Template', imageSrc: lotusImg },
    ]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default SRS;


