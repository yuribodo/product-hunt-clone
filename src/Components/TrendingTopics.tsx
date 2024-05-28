import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TrendingTopicsProps {
  hashtags: string[];
  onSelectHashtag: (hashtag: string) => void;
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ hashtags, onSelectHashtag }) => {
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (hashtag: string) => {
    toggleHashtag(hashtag);
    onSelectHashtag(hashtag);
  };

  const toggleHashtag = (hashtag: string) => {
    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter(h => h !== hashtag));
    } else {
      setSelectedHashtags([...selectedHashtags, hashtag]);
    }
  };

  const removeHashtag = (hashtag: string) => {
    setSelectedHashtags(selectedHashtags.filter(h => h !== hashtag));
  };

  // Function to get the hashtags to display based on screen size
  const getHashtagsToDisplay = () => {
    if (isMobile) { // Mobile view
      return hashtags.slice(0, 3);
    }
    return hashtags;
  };

  return (
    <motion.div 
      className='flex justify-center items-center mt-10 px-4'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className='flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 w-full max-w-full sm:max-w-[80vw] md:max-w-4xl rounded-lg py-4 shadow-xl'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div 
          className='flex flex-col space-y-4 items-center w-full px-4 md:px-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className='text-white font-bold text-2xl mb-2'>Trending Topics</p>
          <div className='flex flex-wrap justify-center gap-4'>
            {getHashtagsToDisplay().map((hashtag, index) => (
              <motion.div 
                key={index}
                className={`bg-gray-800 h-10 flex items-center justify-center px-4 md:px-6 rounded-full border border-gray-600 text-white hover:bg-gray-700 transition-colors cursor-pointer ${selectedHashtags.includes(hashtag) ? 'bg-gray-700' : ''}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleClick(hashtag)}
              >
                <p className='text-sm md:text-base font-medium'>{hashtag}</p>
                {selectedHashtags.includes(hashtag) && (
                  <button className='ml-2' onClick={(e) => { e.stopPropagation(); removeHashtag(hashtag); }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TrendingTopics;
