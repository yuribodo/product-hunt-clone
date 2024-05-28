import React from 'react';
import Navbar from "../Components/Navbar";
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Project } from '../types/types';

interface ProjectDetailsProps {
  projects: Project[]; // Assume que a lista de projetos é passada como uma propriedade
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects }) => {
  const { id } = useParams(); // Obtém o ID do projeto da URL
  const project = projects.find(project => project.id === Number(id)); // Encontra o projeto correspondente

  // Se o projeto não for encontrado, exiba uma mensagem de erro
  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div>
      <Navbar />
      <motion.div
        className="h-screen flex justify-center items-center bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-3xl w-full p-10 rounded-lg shadow-lg bg-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {project.description}
          </motion.p>
          <motion.p
            className="text-gray-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            URL: {project.url}
          </motion.p>
          <motion.p
            className="text-gray-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Upvotes: {project.upvotes}
          </motion.p>
          <motion.p
            className="text-gray-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Criado em: {project.createdAt}
          </motion.p>
          <motion.p
            className="text-gray-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Atualizado em: {project.updatedAt}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
