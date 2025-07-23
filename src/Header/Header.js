import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActive('home');
    else if (path === '/about') setActive('about');
    else if (path === '/projects') setActive('projects');
    else if (path === '/contact') setActive('contact');
  }, [location.pathname]);

  const handleClick = (mode, path) => {
    setActive(mode);
    navigate(path);
  };

  return (
    <div className="header">
      <div className="menu-container">
        <div
          className={`menu-item ${active === 'home' ? 'active' : ''}`}
          onClick={() => handleClick('home', '/')}
        >
          Home
        </div>
        <div
          className={`menu-item ${active === 'about' ? 'active' : ''}`}
          onClick={() => handleClick('about', '/about')}
        >
          About Me
        </div>
        <div
          className={`menu-item ${active === 'projects' ? 'active' : ''}`}
          onClick={() => handleClick('projects', '/projects')}
        >
          My Projects
        </div>
        <div
          className={`menu-item ${active === 'contact' ? 'active' : ''}`}
          onClick={() => handleClick('contact', '/contact')}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Header;
