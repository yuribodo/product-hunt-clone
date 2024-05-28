import { motion } from 'framer-motion';
import { FaStar, FaRocket, FaHeadphones } from 'react-icons/fa';

const ReviwedProducts = () => {
  const starCount = 5;

  const renderStars = () => {
    return Array(starCount).fill(0).map((_, index) => (
      <FaStar key={index} className="text-yellow-400" />
    ));
  };

  const products = [
    {
      name: "HyperDrive",
      description: "Um disco rígido de última geração com velocidade de leitura e gravação ultrarrápida.",
      icon: FaRocket,
    },
    {
      name: "QuantumHeadset",
      description: "Fones de ouvido com cancelamento de ruído ativo e qualidade de som superior.",
      icon: FaHeadphones,
    },
    {
      name: "NebulaSmartwatch",
      description: "Relógio inteligente com monitoramento de saúde e integração com IA.",
      icon: FaRocket,
    },
    {
      name: "FuturePhone",
      description: "Smartphone com tecnologia de ponta e recursos de inteligência artificial avançados.",
      icon: FaRocket,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center font-bold py-4">Produtos Revisados por nós</h1>

      {products.slice(0, 3).map((product, index) => (
        <motion.div 
          key={index} 
          className='flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-b border-gray-700 w-full'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="flex flex-col space-y-2 flex-1">
            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p className='text-gray-400'>{product.description}</p>
            <div className='flex space-x-1'>{renderStars()}</div>
          </div>
          <product.icon className="text-4xl text-blue-500" />
        </motion.div>
      ))}

      <h1 className="text-center font-bold text-2xl py-4">Em breve</h1>

      <motion.div 
        className='flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-b border-gray-700 w-full'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col space-y-2 flex-1">
          <h2 className='text-lg font-semibold'>{products[3].name}</h2>
          <p className='text-gray-400'>{products[3].description}</p>
          <div className='flex space-x-1'>{renderStars()}</div>
        </div>
          <FaHeadphones className="text-4xl text-blue-500" />
      </motion.div>
    </div>
  );
};

export default ReviwedProducts;
