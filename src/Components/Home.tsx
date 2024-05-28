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
        <motion.div 
          className="w-full md:w-2/3 pr-0 md:pr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShowApss projectsdata={filteredProjects} />
        </motion.div>
        <motion.div 
          className="border-l border-gray-700 h-auto mx-0 md:mx-4 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="w-full md:w-1/3 pl-0 md:pl-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ReviwedProducts />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
