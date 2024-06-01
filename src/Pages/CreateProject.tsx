import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import axios from 'axios';


const CreateProject: React.FC = () => {
  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const postData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      hashtag: formData.get('hashtag') as string,
      upvotes: 0, // Assuming a new post starts with 0 upvotes
      authorId: 1, // Setting authorId to 1 by default
    };

    try {
      const response = await axios.post('http://192.168.100.211:8080/posts', postData);
      console.log('Post created successfully:', response.data);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white min-h-screen"
      >
        <Navbar onSearchChange={() => {}} />
        <SignedOut>
          <motion.div
            className="flex justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">You need to be logged in to create a project.</h1>
              <SignInButton />
            </div>
          </motion.div>
        </SignedOut>
        <SignedIn>
          <div className="pt-20 pb-8">
            <motion.div
              className="flex justify-center items-center px-4 md:px-8 lg:px-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-800 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Show a New Project</h1>
                <div className="mb-6">
                  <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    className="w-full p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="block text-lg font-semibold mb-2">Description</label>
                  <textarea 
                    id="description" 
                    name="description" 
                    rows={5} 
                    className="w-full p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label htmlFor="hashtag" className="block text-lg font-semibold mb-2">Hashtag</label>
                  <input 
                    type="text" 
                    id="hashtag" 
                    name="hashtag" 
                    className="w-full p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </SignedIn>
      </motion.div>
    </div>
  );
};

export default CreateProject;
