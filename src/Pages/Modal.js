// Modal.js
import React from 'react';
import './ProjectItem.css';

const Modal = ({ isOpen, onClose, title, period, stack, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="project-period"><strong>{period}</strong></div>
        <div className="project-stack">개발 언어 : {stack}</div>
        <p>{description}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
