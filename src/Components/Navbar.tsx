import React from 'react';
import { Link } from 'react-router-dom';
import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";

interface NavbarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange }) => {
  return (
    <div className='h-[10vh] bg-gray-600'>
      <div className='flex justify-between items-center h-full px-4'>
        <div className='flex space-x-4 text-white'>
          <input 
            type="text" 
            className='p-1 rounded-lg' 
            placeholder="Buscar..." 
            onChange={onSearchChange}
          />
          <Link to="/"><button type="button">Produtos</button></Link>
          <Link to="/categorias"><button type="button">Categorias</button></Link>
          <Link to="/sobre"><button type="button">Sobre</button></Link>         
        </div>
        <div className='flex space-x-2 p-8 text-white'>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
