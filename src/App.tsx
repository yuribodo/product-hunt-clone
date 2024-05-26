import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { ClerkProvider } from '@clerk/clerk-react'
import NotFound from './Components/NotFound';



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
        </Routes>
      </div>
      </ClerkProvider>
    </Router>
  );
};

export default App;
