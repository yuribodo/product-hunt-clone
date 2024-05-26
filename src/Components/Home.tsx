import { useState } from 'react';
import Navbar from './Navbar';
import ReviwedProducts from './ReviwedProducts';
import ShowApss from './ShowApss';
import TrendingTopics from './TrendingTopics';
import projects from '../../projects.json'

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <div>
          <Navbar onSearchChange={handleSearchChange}/>
        </div>
        <div>
          <TrendingTopics />
        </div>
        <div className='flex'>
          <div className='w-[70%]'>
            <ShowApss projectsdata={filteredProjects}/>
          </div>
          <div className='border-r border-gray-400'></div>
          <div className='w-[30%]'>
            <ReviwedProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
