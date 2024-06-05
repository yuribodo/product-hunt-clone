import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Components/Home';
import { ClerkProvider } from '@clerk/clerk-react'
import NotFound from './Components/NotFound';
import Produtos from './Pages/Produtos';
import Sobre from './Pages/Sobre';
import ProjectDetails from './Pages/ProjectDetails';
import projects from '../projects.json'; // Importe sua lista de projetos
import CreateProject from './Pages/CreateProject';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const App: React.FC = () => {
  return (
    <Router>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <div className=" mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/produtos' element={<Produtos/>}/>
            <Route path='/createproject' element={<CreateProject/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
        </ClerkProvider>
    </Router>
  );
};

export default App;
