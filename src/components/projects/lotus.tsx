import React from 'react';
import ProjectDetail from './ProjectDetail';
import Lotus2 from '../../assets/Lotus2.png';
import Lotus1 from '../../assets/Lotus1.png';
import Lotus3 from '../../assets/Lotus3.png';
import Lotus4 from '../../assets/Lotus4.png';
import Lotus5 from '../../assets/Lotus5.png';
import Lotus6 from '../../assets/Lotus6.png';
import Lotus7 from '../../assets/Lotus7.png';

const Lotus: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Lotus"
    description="Lotus is a medication management platform that allows users to manage their medications and track their health."
    year="2024"
    service="Mobile app / Web Dashboard"
    category="Medication Management Platform"
    tool="Node.js, Express, PostgreSQL, Next.js, Tailwind CSS, ShadcnUi, Flutter, Google Gemini AI"
    repoUrl="https://github.com/AmineLadrem/InnoByte-Inotel"
    screenshots={[Lotus2, Lotus1, Lotus3, Lotus4, Lotus5, Lotus6, Lotus7]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default Lotus;


