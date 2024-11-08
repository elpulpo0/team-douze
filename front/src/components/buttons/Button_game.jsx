import React from 'react';
import './Button_game.css';

const Button_game = ({ label, onClick }) => {
  return (
    <button className="custom_font button_game" onClick={onClick}>
      <span className="button-text">{label}</span>
    </button>
  );
};

export default Button_game;
