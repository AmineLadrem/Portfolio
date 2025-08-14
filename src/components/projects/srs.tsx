import React from 'react';
import ProjectDetail from './ProjectDetail';

const SRS: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Smart Room Service"
    description="A smart hotel room service solution with server ordering and IoT integrations."
    year="2023"
    service="IoT"
    category="Hotel Room Service"
    tool="ESP-IDF, Raspberry Pi"
    repoUrl="https://github.com/AmineLadrem/SRS/tree/master/ESP"
    screenshots={[]}

    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default SRS;


