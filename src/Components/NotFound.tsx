import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 - Página Não Encontrada</h1>
      <p className="mt-4">Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;