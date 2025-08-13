import React from 'react';
import ProjectDetail from './ProjectDetail';
import quantumImg from '../../assets/projects/quantum/quantum-ss-1.png';

const Quantum: React.FC<{ onBackToAll: () => void; onOpenProject: (key: string) => void; }> = ({ onBackToAll, onOpenProject }) => (
  <ProjectDetail
    title="Error-Free-Quantum-States—Repetition Code"
    description="Research project exploring error correction for quantum states using repetition code."
    year="2025"
    service="AI / Research"
    category="Quantum Computing"
    tool="Python / Qiskit"
    repoUrl="https://github.com/AmineLadrem/Error-Free-Quantum-States---Repetition-Code/blob/main/abdulhaq-amine-ladrem-quantum-final-project.ipynb"
    screenshots={[quantumImg]}
    onBackToAll={onBackToAll}
    onOpenProject={onOpenProject}
  />
);

export default Quantum;


