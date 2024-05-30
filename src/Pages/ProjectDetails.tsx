import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar";
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Post } from '../types/types';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID do post da URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://192.168.100.211:8080/posts/${id}`);
        setPost(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao carregar o projeto');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div>
      <Navbar />
      <motion.div
        className="h-screen flex justify-center items-center bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-3xl w-full p-10 rounded-lg shadow-lg bg-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {post.title}
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {post.description}
          </motion.p>
          <motion.p
            className="text-gray-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Upvotes: {post.upvotes}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PostDetails;
