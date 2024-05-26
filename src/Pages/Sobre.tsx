import { useState } from "react";
import Navbar from "../Components/Navbar";
import projects from '../../projects.json';

const Sobre = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div>
        <Navbar onSearchChange={handleSearchChange} />
      </div>

      <div className="flex justify-center items-center h-[80vh] bg-gray-800">
        <div className="flex flex-col justify-center items-center bg-gray-700 rounded-lg shadow-lg p-10 mx-4 w-full md:w-1/2">
          <h1 className="text-center text-4xl font-bold mb-6">Sobre nós</h1>
          <p className="text-center text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque dolores sequi, possimus error placeat est. Dolore veritatis officiis a corporis voluptas voluptatibus omnis quibusdam blanditiis quod culpa, esse nostrum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
