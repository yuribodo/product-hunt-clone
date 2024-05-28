import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ReviwedProducts from './ReviwedProducts';
import ShowApss from './ShowApss';
import TrendingTopics from './TrendingTopics';
import projects from '../../projects.json';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'products' | 'apps'>('apps');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchTerm]);

  useEffect(() => {
    if (selectedHashtag) {
      setFilteredProjects(projects.filter(project => project.hashtag === selectedHashtag));
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedHashtag]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onSearchChange={handleSearchChange} />
      <div className="py-20 px-4">
        <TrendingTopics 
          hashtags={[...new Set(projects.map(project => project.hashtag))]} 
          onSelectHashtag={setSelectedHashtag} 
        />
      </div>
      <div className="flex flex-col md:flex-row px-4">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-8 md:mb-0">
          <div className="flex justify-center mb-4">
            <button
                className={`px-4 py-2 border-b-2 ${activeSection === 'apps' ? 'border-blue-500' : 'border-transparent'} focus:outline-none`}
                onClick={() => setActiveSection('apps')}
            >
                Aplicações em Destaque
            </button>
            <button
              className={`mr-4 px-4 py-2 border-b-2 ${activeSection === 'products' ? 'border-blue-500' : 'border-transparent'} focus:outline-none`}
              onClick={() => setActiveSection('products')}
            >
              Produtos Revisados
            </button>
            
          </div>
          {activeSection === 'products' && <ReviwedProducts />}
          {activeSection === 'apps' && <ShowApss projectsdata={filteredProjects} />}
        </div>
        <motion.div 
          className="border-l border-gray-700 h-auto mx-0 md:mx-4 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <div className="w-full md:w-1/3 pl-0 md:pl-4">
          <ReviwedProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
