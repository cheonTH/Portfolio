import React, { useState, useEffect } from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, imageSrc, link, period, stack, isInProgress, description }) => {
  const [circleColor, setCircleColor] = useState('blue');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCircleColor(isInProgress ? 'yellow' : 'blue');
  }, [isInProgress]);

  const handleOpenModal = (e) => {
    e.preventDefault(); // 링크 이동 방지
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageMove = (e) => {
    e.preventDefault();
    window.open(link, '_blank');
  };

  return (
    <div className="project-wrapper">
      <div className="project-card">
        <div className="project-title">{title}</div>
        <div className="project-image-wrapper">
          <img className="project-icon" src={imageSrc} alt={title} />
        </div>
      </div>

      <div className="project-circle">
        <div className={`circle-inner ${circleColor}`} />
      </div>

      <div className="project-info">
        <div className="project-period"><strong>{period}</strong></div>
        <div className="project-stack">{stack}</div>
      </div>

      <div className="project-buttons">
        <button onClick={handlePageMove}>페이지 이동</button>
        <button onClick={handleOpenModal}>상세보기</button>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <div className="project-period"><strong>{period}</strong></div>
            <div className="project-stack">개발 언어 : {stack}</div>
            <p>{description}</p>
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
