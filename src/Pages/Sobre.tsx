import { motion } from 'framer-motion';
import Navbar from "../Components/Navbar";

const Sobre = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onSearchChange={() => {}} />

      <motion.div 
        className="flex justify-center items-center h-[80vh] bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="flex flex-col justify-center items-center bg-gray-700 rounded-lg shadow-lg p-10 mx-4 w-full md:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-center text-4xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Sobre nós
          </motion.h1>
          <motion.p 
            className="text-center text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cumque dolores sequi, possimus error placeat est. Dolore veritatis officiis a corporis voluptas voluptatibus omnis quibusdam blanditiis quod culpa, esse nostrum?
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Sobre;
