import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
