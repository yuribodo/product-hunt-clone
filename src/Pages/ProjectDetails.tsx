import React, { useEffect, useState } from 'react';
import image from '../../assets/Captura de tela 2024-05-24 174604.png';
import Navbar from "../Components/Navbar";
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Project } from '../types';


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
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {/* Adicione outras informações do projeto conforme necessário */}
      </div>
    </div>
  );
};

export default ProjectDetails;
