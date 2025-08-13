import React from 'react';
import ProjectDetail from './ProjectDetail';
import portImg from '../../assets/port.png';
import Containers1 from '../../assets/container1.png';
import Containers2 from '../../assets/container2.png';
import Containers3 from '../../assets/container3.png';
import Containers4 from '../../assets/container4.png';
import Containers5 from '../../assets/container5.png';
import Containers6 from '../../assets/container6.png';
import Containers7 from '../../assets/container7.png';

const Containers: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => {
  return (
    <ProjectDetail
      title="Tracking Containers"
      description="End-to-end system for tracking shipping containers in real time with dashboards and alerts."
      year="2023"
      service="Mobile Dev, Web Dev, IoT "
      category="IoT, Dashboard"
      tool="Flutter, Laravel, Firebase, MySQL, Arduino"
      repoUrl="https://github.com/AmineLadrem/Tracking-Containers"
      screenshots={[Containers1, Containers2, Containers3, Containers4, Containers5, Containers6, Containers7]}
      onBackToAll={onBackToAll}
      onOpenProject={onOpenProject}
    />
  );
};

export default Containers;


