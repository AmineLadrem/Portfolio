import React from 'react';
import ProjectDetail from './ProjectDetail';
import Inotel1 from '../../assets/projects/inotel/inotel1.png';
import Inotel2 from '../../assets/projects/inotel/inotel2.png';
import Inotel3 from '../../assets/projects/inotel/inotel3.png';
import Inotel4 from '../../assets/projects/inotel/inotel4.png';
const Inotel: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Inotel"
    description="SaaS platform for hotel connectivity and device management."
    year="2024"
    service="Backend / Web Dev"
    category="SaaS Dashboard"
    tool="React, Node.js, Node-RED, MySQL"
    repoUrl="https://github.com/AmineLadrem/InnoByte-Inotel"
    screenshots={[Inotel1, Inotel2, Inotel3, Inotel4]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default Inotel;


