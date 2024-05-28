import React from 'react';
import { motion } from 'framer-motion';

interface TrendingTopicsProps {
  hashtags: string[];
  onSelectHashtag: (hashtag: string) => void;
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ hashtags, onSelectHashtag }) => {
  return (
    <motion.div 
      className='flex justify-center items-center mt-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className='flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 w-[80vw] rounded-lg py-4 shadow-xl'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div 
          className='flex flex-col space-y-4 items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className='text-white font-bold text-2xl mb-2'>Trending Topics</p>
          <div className='flex flex-wrap justify-center gap-4'>
            {hashtags.map((hashtag, index) => (
              <motion.div 
                key={index}
                className='bg-gray-800 h-10 flex items-center justify-center px-6 rounded-full border border-gray-600 text-white hover:bg-gray-700 transition-colors cursor-pointer'
                whileHover={{ scale: 1.1 }}
                onClick={() => onSelectHashtag(hashtag)}
              >
                <p className='text-sm font-medium'>{hashtag}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TrendingTopics;
