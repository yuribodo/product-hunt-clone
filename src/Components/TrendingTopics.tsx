import { motion } from 'framer-motion';

const TrendingTopics = () => {
  return (
    <motion.div 
      className='flex justify-center items-center mt-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className='flex justify-center bg-gradient-to-r from-purple-500 to-blue-500 w-[70vw] rounded-lg h-[10vh] items-center shadow-xl'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div 
          className='flex space-x-4 items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className='text-white font-bold text-xl'>Trending Topics</p>
          <motion.div 
            className='bg-gray-700 h-8 flex items-center justify-center px-4 rounded-full border border-gray-500 text-white hover:bg-gray-600 transition-colors cursor-pointer'
            whileHover={{ scale: 1.1 }}
          >
            IA
          </motion.div>
          <motion.div 
            className='bg-gray-700 h-8 flex items-center justify-center px-4 rounded-full border border-gray-500 text-white hover:bg-gray-600 transition-colors cursor-pointer'
            whileHover={{ scale: 1.1 }}
          >
            Marketing
          </motion.div>
          <motion.div 
            className='bg-gray-700 h-8 flex items-center justify-center px-4 rounded-full border border-gray-500 text-white hover:bg-gray-600 transition-colors cursor-pointer'
            whileHover={{ scale: 1.1 }}
          >
            Produtividade
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TrendingTopics;
