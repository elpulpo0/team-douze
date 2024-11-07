import React from 'react';
import './Button_back.css';

const Button_back = ({ label, onClick }) => {
  return (
    <button className="custom_font button_back" onClick={onClick}>
      <span className="button-text">{label}</span>
    </button>
  );
};

export default Button_back;
