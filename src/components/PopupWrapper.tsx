"use client";

import React, { useEffect, useState } from 'react';
import Popup from './Popup';

interface PopupWrapperProps {
  title: string;
  message: string;
}

const PopupWrapper: React.FC<PopupWrapperProps> = ({ title, message, redirectPath }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.classList.add('popup-active');
    return () => {
      document.body.classList.remove('popup-active');
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    if (redirectPath) {
      // If a path was provided, redirect there
      window.location.replace(redirectPath);
    } else {
      // Otherwise, just remove the error params from the URL
      const url = new URL(window.location.href);
      url.searchParams.delete('error');
      url.searchParams.delete('error_description');
      window.history.replaceState({}, '', url.toString());
    }
  };

  if (!isOpen) return null;

  return <Popup title={title} message={message} onClose={handleClose} />;
};

export default PopupWrapper;