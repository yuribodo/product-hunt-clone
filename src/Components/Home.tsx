import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from './Navbar';
import ReviwedProducts from './ReviwedProducts';
import ShowApss from './ShowApss';
import TrendingTopics from './TrendingTopics';
import { Post } from '../types/types';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'products' | 'apps'>('apps');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get<{ data: Post[] }>('http://192.168.100.211:8080/posts');
      setPosts(response.data.data);
      setFilteredPosts(response.data.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  useEffect(() => {
    if (selectedHashtag) {
      setFilteredPosts(posts.filter(post => post.hashtag === selectedHashtag));
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedHashtag, posts]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onSearchChange={handleSearchChange} />
      <div className="py-20 px-4">
        <TrendingTopics 
          hashtags={[...new Set(posts.map(post => post.hashtag))]} 
          onSelectHashtag={setSelectedHashtag} 
        />
      </div>
      <div className="flex flex-col md:flex-row px-4">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-8 md:mb-0">
          <div className="flex justify-center mb-4 md:hidden">
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
          <div className="md:hidden">
            {activeSection === 'products' && <ReviwedProducts />}
            {activeSection === 'apps' && <ShowApss posts={filteredPosts} />}
          </div>
          <div className="hidden md:block">
            <ShowApss posts={filteredPosts} />
          </div>
        </div>
        <motion.div 
          className="border-l border-gray-700 h-auto mx-0 md:mx-4 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <div className="w-full md:w-1/3 pl-0 md:pl-4 hidden md:block">
          <ReviwedProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
