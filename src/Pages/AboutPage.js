import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className="profile-container">
        <h2>Profile</h2>
        <div>
            <span>이름 : 천태현</span>
        </div>
        <div>
            <span>생년월일 : 2000년05월30일</span>
        </div>
        
      </div>

      <div className="education-container">
        <h2>Education</h2>
        <div>
            <span>2019.3 ~ 2025.2 | 백석대학교 소프트웨어학과</span>
        </div>
        <div>
            <span>2016.3 ~ 2019.2 | 인천남고등학교</span>
        </div>
      </div>

      <div className="education-container">
        <h2>Education</h2>
        <div>
            <span>2025.2 ~ 2025.8 | 국비 교육 - (스마트웹콘텐츠개발) AWS클라우드를 활용한 풀스택(React, SpringBoot) 개발 과정</span>
        </div>
      </div>

      <div className="prize-container">
        <h2>Prize</h2>
        <div>
            <span>2024.06 | 2024 창업발명공모전 단체상 [(사)국제문화기술진흥원]</span>
        </div>
        <div>
            <span>2022.12 | 2022 IIBC Start-up Invention Contest (단체상) [(사)한국 인터넷 방송 통신 학회]</span>
        </div>
        
      </div>

      <div className="coding-container">
        <div className="front-container">
          <h2>Front-End</h2>
          <div className="card-grid">
            <div className="skill-card">
              <span>HTML</span>
              <img src="/image/html_icon.png" alt="HTML" />
            </div>
            <div className="skill-card">
              <span>CSS</span>
              <img src="/image/css_icon.png" alt="CSS" />
            </div>
            <div className="skill-card">
              <span>JavaScript</span>
              <img src="/image/js_icon.png" alt="JS" />
            </div>
            <div className="skill-card">
              <span>React</span>
              <img src="/logo192.png" alt="React" />
            </div>
            <div className="skill-card">
              <span>React Native</span>
              <img src="/image/React-Native-Logo.png" alt="React Native" />
            </div>
          </div>
        </div>

        <div className="back-container">
          <h2>Back-End</h2>
          <div className="card-grid">
            <div className="skill-card">
              <span>Java</span>
              <img src="/image/java_icon.png" alt="Java" />
            </div>
            <div className="skill-card">
              <span>Python</span>
              <img src="/image/python_icon.png" alt="Python" />
            </div>
            <div className="skill-card">
              <span>Spring Boot</span>
              <img src="/image/springboot_icon.png" alt="Spring Boot" />
            </div>
          </div>
        </div>

        <div className="DB-container">
          <h2>DBMS</h2>
          <div className="card-grid">
            <div className="skill-card">
              <span>Oracle</span>
              <img src="/image/oracle_icon.png" alt="Oracle" />
            </div>
            <div className="skill-card">
              <span>MySQL</span>
              <img src="/image/mysql-logo.png" alt="MySQL" />
            </div>
          </div>
        </div>

        <div className="etc-container">
          <h2>ETC</h2>
          <div className="card-grid">
            <div className="skill-card">
              <span>Android</span>
              <img src="/image/android-studio.png" alt="Android Studio" />
            </div>
            <div className="skill-card">
              <span>Raspberry Pi</span>
              <img src="/image/raspberry-pi.png" alt="Raspberry Pi" />
            </div>
            <div className="skill-card">
              <span>Arduino</span>
              <img src="/image/arduino-logo.png" alt="Arduino" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
