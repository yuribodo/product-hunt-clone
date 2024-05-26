import { useState } from 'react';
import Navbar from './Navbar';
import ReviwedProducts from './ReviwedProducts';
import ShowApss from './ShowApss';
import TrendingTopics from './TrendingTopics';
import projects from '../../projects.json';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search term:", event.target.value); // Adicionado para depuração
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Filtered projects:", filteredProjects); // Adicionado para depuração

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onSearchChange={handleSearchChange} />
      <div className="py-8">
        <TrendingTopics />
      </div>
      <div className="flex px-8">
        <div className="w-full md:w-2/3 pr-4">
          <ShowApss projectsdata={filteredProjects} />
        </div>
        <div className="border-l border-gray-700 h-auto mx-4"></div>
        <div className="w-full md:w-1/3 pl-4">
          <ReviwedProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
