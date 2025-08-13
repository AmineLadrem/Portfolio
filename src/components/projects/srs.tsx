import React from 'react';
import ProjectDetail from './ProjectDetail';

const SRS: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Smart Room Service"
    description="A smart hotel room service solution with mobile ordering and IoT integrations."
    year="2023"
    service="Web Dev"
    category="Landing Page"
    tool="React"
    repoUrl="https://github.com/youruser/smart-room-service"
    screenshots={[]}

    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default SRS;


