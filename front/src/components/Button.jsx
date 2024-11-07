import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => {
  return (
    <button className="custom_font" onClick={onClick}>
      <span className="button-text">{label}</span>
    </button>
  );
};

export default Button;
