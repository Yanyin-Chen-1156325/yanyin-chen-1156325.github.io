import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import { initializeAnimations } from './utils/animations';

// Import all styles
import './styles/globals.css';
import './styles/components/layout.css';
import './styles/components/ui.css';
import './styles/components/sections.css';
import './styles/pages/pages.css';

function App() {
  useEffect(() => {
    // Initialize animations when component mounts
    initializeAnimations();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;