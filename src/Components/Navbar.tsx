import React from 'react';
import { Link } from 'react-router-dom';
import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { motion } from 'framer-motion';

interface NavbarProps {
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange }) => {
  return (
    <motion.div 
      className='h-[10vh] bg-gray-800 shadow-lg'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex justify-between items-center h-full px-6'>
        <motion.div 
          className='flex space-x-6 text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input 
            type="text" 
            className='p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500' 
            placeholder="Buscar..." 
            onChange={onSearchChange}
          />
          <Link to="/" className='hover:text-blue-500 transition-colors'>
            <motion.button 
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Produtos
            </motion.button>
          </Link>
          <Link to="/createproject" className='hover:text-blue-500 transition-colors'>
            <motion.button 
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Mostrar project
            </motion.button>
          </Link>
          <Link to="/sobre" className='hover:text-blue-500 transition-colors'>
            <motion.button 
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sobre
            </motion.button>
          </Link>         
        </motion.div>
        <motion.div 
          className='flex space-x-4 p-4 text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <SignedOut>
            <motion.div 
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <SignInButton />
              <SignUpButton />
            </motion.div>
          </SignedOut>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
