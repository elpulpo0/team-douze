import React from 'react';
import './Button_custom.css';

const Button_custom = ({ label, onClick }) => {
  return (
    <button className="custom_font button_custom" onClick={onClick}>
      <span className="button-text">{label}</span>
    </button>
  );
};

export default Button_custom;
