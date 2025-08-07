import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  
  const roles = [
    'Full Stack Developer',
    'Frontend Specialist',
    'Backend Engineer',
    'Mobile App Developer'
  ];

  useEffect(() => {
    const typeEffect = () => {
      const currentRole = roles[currentIndex];
      
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              안녕하세요, <span className="highlight">천태현</span>입니다
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              혁신적인 웹 솔루션과 사용자 경험을 만들어내는 개발자입니다.
              <br />
              창의적인 아이디어와 기술적 전문성을 결합하여 가치 있는 프로덕트를 개발합니다.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/projects')}>
                프로젝트 보기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                연락하기
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="floating-elements">
                <div className="tech-badge react">React</div>
                <div className="tech-badge spring">Spring</div>
                <div className="tech-badge python">Python</div>
                <div className="tech-badge js">JavaScript</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">완료 프로젝트</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">기술 스택</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">수상 경력</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">개발 경력 (년)</div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="link-card" onClick={() => navigate('/about')}>
          <div className="link-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>About Me</h3>
          <p>저의 경력과 기술 스택을 확인해보세요</p>
        </div>
        
        <div className="link-card" onClick={() => navigate('/projects')}>
          <div className="link-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>My Projects</h3>
          <p>다양한 프로젝트와 성과를 살펴보세요</p>
        </div>
        
        <div className="link-card" onClick={() => navigate('/contact')}>
          <div className="link-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Contact Me</h3>
          <p>프로젝트 문의나 협업 제안을 보내주세요</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;