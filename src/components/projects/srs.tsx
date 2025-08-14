import React from 'react';
import ProjectDetail from './ProjectDetail';
import srsImg from '../../assets/projects/srs/architecture.png';

const SRS: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Smart Room Service"
    description="A smart hotel room service solution with server ordering and IoT integrations."
    year="2024"
    service="IoT"
    category="Hotel Room Service"
    tool="ESP-IDF, Raspberry Pi"
    repoUrl="https://github.com/AmineLadrem/SRS/tree/master/ESP"
    screenshots={[srsImg]}

    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default SRS;


