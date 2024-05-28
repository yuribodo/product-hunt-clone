import React, { useState, useEffect } from 'react';
import image from '../../assets/Captura de tela 2024-05-24 174604.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types/types';

interface ShowApssProps {
  projectsdata: Project[];
}

const ShowApss: React.FC<ShowApssProps> = ({ projectsdata }) => {
  const [projects, setProjects] = useState(projectsdata);

  const addVote = (id: number, e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setProjects(projects.map(project =>
      project.id === id ? { ...project, upvotes: project.upvotes + 1 } : project
    ));
  };

  useEffect(() => {
    setProjects(projectsdata);
  }, [projectsdata]);

  return (
    <div className="flex flex-col items-start p-4 mt-5 w-full">
      <h1 className="text-xl font-bold">O Próximo Grande App</h1>

      {projects.map((project) => (
        <motion.div 
          key={project.id}
          className="flex flex-col sm:flex-row w-full mt-6 items-start p-4 sm:p-6 border rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.8)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex-shrink-0">
            <img src={image} alt="logo" className="w-16 h-16 object-cover" />
          </div>
          <Link to={`/project/${project.id}`} className="flex flex-1 flex-col sm:flex-row sm:items-center ml-4 w-full">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex space-x-2">
                <p className="cursor-pointer text-blue-500 hover:underline">#{project.hashtag}</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-center mt-4 sm:mt-0">
            <div className="flex flex-col items-center">
              <p>Votos</p>
              <div className="flex items-center border justify-center w-[40px] rounded border-white cursor-pointer hover:w-[50px]">
                <p onClick={(e) => addVote(project.id, e)}>{project.upvotes}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShowApss;
