import React from 'react';

const TrendingTopics = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='flex justify-center bg-slate-500 w-[70vw] rounded-lg h-[10vh] items-center'>
        <div className='flex space-x-4 items-center'>
          <p className='text-white font-bold'>Trending Topics</p>
          <div className='bg-gray-600 h-6 flex items-center justify-center px-3 rounded border border-gray-400 text-white'>
            IA
          </div>
          <div className='bg-gray-600 h-6 flex items-center justify-center px-3 rounded border border-gray-400 text-white'>
            Marketing
          </div>
          <div className='bg-gray-600 h-6 flex items-center justify-center px-3 rounded border border-gray-400 text-white'>
            Produtividade
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTopics;
