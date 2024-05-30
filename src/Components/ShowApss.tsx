import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa'; // Import the icon
import { Project, Post } from '../types/types';
import axios from 'axios'

interface ShowApssProps {
  projectsdata: Project[];
}





const ShowApss: React.FC<ShowApssProps> = ({ projectsdata }) => {
  const [projects, setProjects] = useState(projectsdata);
  console.log(projects)
  const [posts, setPosts] = useState<Post[]>([]);

  {/*const addVote = (id: number, e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setProjects(projects.map(project =>
      project.id === id ? { ...project, upvotes: project.upvotes + 1 } : project
    ));
  };*/}


  async function getPosts() {
    try {
      const response = await axios.get<{ data: Post[] }>('http://192.168.100.211:8080/posts');
      setPosts(response.data.data);
      console.log(posts)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setProjects(projectsdata);
  }, [projectsdata]);

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="flex flex-col items-start p-4 mt-5 w-full">
      <h1 className="text-2xl font-bold mb-4">O Próximo Grande App</h1>

      {posts.map((project, index) => (
        <motion.div 
          key={project.id}
          className="flex flex-col sm:flex-row w-full mt-6 items-center sm:items-start p-4 sm:p-6 border rounded-lg shadow-md cursor-pointer bg-gray-800 hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="flex-shrink-0 text-blue-500 text-4xl">
            <FaProjectDiagram />
          </div>
          <Link to={`/project/${project.id}`} className="flex flex-1 flex-col sm:flex-row sm:items-center ml-4 w-full text-white">
            <div className="flex-1">
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex space-x-2 mt-2">
                <p className="cursor-pointer text-blue-400 hover:underline">#{project.hashtag}</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-center ml-auto mt-4 sm:mt-0 sm:ml-4">
            <div className="flex flex-col items-center">
              <p className="text-gray-300">Votos</p>
              <div className="flex items-center border justify-center w-[40px] h-[40px] rounded-full border-white cursor-pointer hover:w-[50px] hover:h-[50px] transition-all duration-300 bg-blue-500 text-white">
                {/*<p onClick={(e) => addVote(project.id, e)}>{project.upvotes}</p>*/}
                <p>{project.upvotes}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShowApss;
