import React, { useState, useEffect } from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, imageSrc, link, period, stack, isInProgress, description, onOpenModal }) => {
  const [circleColor, setCircleColor] = useState('blue');

  useEffect(() => {
    setCircleColor(isInProgress ? 'yellow' : 'blue');
  }, [isInProgress]);

  const handlePageMove = (e) => {
    e.preventDefault();
    if (link) window.open(link, '_blank');
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
        {link && <button onClick={handlePageMove}>페이지 이동</button>}
        {onOpenModal && <button onClick={onOpenModal}>상세보기</button>}
      </div>
    </div>
  );
};

export default ProjectItem;
