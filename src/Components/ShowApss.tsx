import React, { useState } from 'react';
import image from '../../assets/Captura de tela 2024-05-24 174604.png';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  upvotes: number;
  createdAt: string;
  updatedAt: string;
}

interface ShowApssProps {
  projectsdata: Project[];
}

const ShowApss: React.FC<ShowApssProps> = ({ projectsdata }) => {
  // Initialize the state with the upvotes from the projectsdata
  const [projects, setProjects] = useState(projectsdata);

  // Function to handle upvoting
  const addVote = (id: number) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, upvotes: project.upvotes + 1 } : project
    ));
  };

  return (
    <div className="flex flex-col items-start p-10 mt-5">
      <h1 className="text-xl font-bold">O Próximo Grande App</h1>

      {projects.map((project) => (
        <motion.div 
          key={project.id} 
          className="flex w-full ml-3 mt-6 items-start p-6 border rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.8)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div>
            <img src={image} alt="logo" className="w-16 h-16 object-cover" />
          </div>
          <div className="ml-4 flex-1">
            <h1 className="text-lg font-semibold">{project.title}</h1>
            <p>{project.description}</p>
            <div className="flex space-x-2">
              <p>Ia</p>
              <p>API</p>
            </div>
          </div>
          <div>
            <p>Votos</p>
            <div className="flex items-center border justify-center w-[40px] rounded border-black cursor-pointer">
              <p  onClick={() => addVote(project.id)}>{project.upvotes}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShowApss;
