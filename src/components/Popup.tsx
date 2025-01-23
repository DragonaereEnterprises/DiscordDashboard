"use client";

import React, { useEffect } from 'react';

interface PopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, message, onClose }) => {
  useEffect(() => {
    document.body.classList.add('popup-active');
    return () => {
      document.body.classList.remove('popup-active');
    };
  }, []);

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;