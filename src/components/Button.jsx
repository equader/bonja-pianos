import React from 'react';
import './css/button.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
