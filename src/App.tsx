import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { ClerkProvider } from '@clerk/clerk-react'
import NotFound from './Components/NotFound';
import Categorias from './Pages/Categorias';
import Produtos from './Pages/Produtos';
import Sobre from './Pages/Sobre';




const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const App: React.FC = () => {
  return (
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/produtos' element={<Produtos/>}/>
          <Route path='/sobre' element={<Categorias/>}/>
          <Route path='/categorias' element={<Sobre/>}/>
        </Routes>
      </div>
      </ClerkProvider>
    </Router>
  );
};

export default App;
