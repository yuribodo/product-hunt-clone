import React from 'react';

interface NavbarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange }) => {
  return (
    <div className='h-[10vh] bg-gray-600'>
      <div className='flex justify-between items-center h-full px-4'>
        <div className='flex space-x-4'>
          <input 
            type="text" 
            className='p-1 rounded-lg' 
            placeholder="Buscar..." 
            onChange={onSearchChange}
          />
          <button type="button">Produtos</button>
          <button type="button">Categorias</button>
          <button type="button">Sobre</button>
        </div>
        <div className='flex space-x-2'>
          <button type="button">Login</button>
          <button type="button">Registro</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
