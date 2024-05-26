import React from 'react';
import image from '../../assets/Captura de tela 2024-05-24 174604.png';
import projects from '../../projects.json';

const ShowApss = () => {
  const projectsdata = projects;

  return (
    <div className="flex flex-col items-start p-10 mt-5">
      <h1 className="text-xl font-bold">O Próximo Grande App</h1>

      {projectsdata.map((project) => (
        <div key={project.id} className="flex w-full ml-3 mt-6 items-start p-6 border rounded-lg shadow-md">
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
          <div className="flex items-center border w-[40px] justify-center rounded border-black">
            <p>{project.upvotes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowApss;
