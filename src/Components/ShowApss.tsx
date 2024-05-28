import React, { useEffect, useState } from 'react';
import image from '../../assets/Captura de tela 2024-05-24 174604.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types/types';


interface ShowApssProps {
  projectsdata: Project[];
}

const ShowApss: React.FC<ShowApssProps> = ({ projectsdata }) => {
  // Initialize the state with the upvotes from the projectsdata
  const [projects, setProjects] = useState(projectsdata);
  

  // Function to handle upvoting
  const addVote = (id: number, e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation(); // Impede a propagação do evento de clique
    setProjects(projects.map(project =>
      project.id === id ? { ...project, upvotes: project.upvotes + 1 } : project
    ));
  };

  

  useEffect(() => {
    setProjects(projectsdata);
  }, [projectsdata]);

  

  return (
    <div className="flex flex-col items-start p-10 mt-5">
      <h1 className="text-xl font-bold">O Próximo Grande App</h1>

      {projects.map((project) => (
        
          <motion.div 
            className="flex w-full ml-3 mt-6 items-start p-6 border rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.8)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            
            <div>
              <img src={image} alt="logo" className="w-16 h-16 object-cover" />
            </div>
            <Link key={project.id} to={`/project/${project.id}`} className='w-[50vw]'>
            <div className="ml-4 flex-1">
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex space-x-2">
                <p className="cursor-pointer text-blue-500 hover:underline">#{project.hashtag}</p>
              </div>
            </div>
            </Link>
            <div>
              <p>Votos</p>
              <div className="flex items-center border justify-center w-[40px] rounded border-white cursor-pointer hover:w-[50px]">
                <p  onClick={(e) => addVote(project.id, e)}>{project.upvotes}</p>
              </div>
            </div>
          </motion.div>
        
      ))}
    </div>
  );
};

export default ShowApss;
