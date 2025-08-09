import React from 'react';
import ProjectDetail from './ProjectDetail';
import reactLogo from '../../assets/react.svg';
import lotusImg from '../../assets/Lotus.png';
import portImg from '../../assets/port.png';

const Quantum: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Error-Free-Quantum-States—Repetition Code"
    description="Research project exploring error correction for quantum states using repetition code."
    year="2022"
    service="AI / Research"
    category="Directory Website"
    tool="React"
    heroImage={reactLogo}
    repoUrl="https://github.com/youruser/quantum-repetition-code"
    screenshots={[reactLogo]}
    related={[
      { key: 'containers', title: 'Tracking Containers', tag: 'Dashboard', imageSrc: portImg },
      { key: 'lotus', title: 'Lotus', tag: 'Framer Template', imageSrc: lotusImg },
    ]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default Quantum;


