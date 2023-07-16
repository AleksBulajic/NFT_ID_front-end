import React, { useState } from 'react';
import './settings.css';

const CustomizeTheme = ({ onThemeChange }) => {
  const colors = ['#2f1c2c', 'blue', 'green', 'yellow', 'red', 'pink', 'orange'];
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleThemeChange = () => {
    if (selectedColor) {
      onThemeChange(selectedColor);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Customize Theme</h1>
      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
      <button className="change-theme-button" onClick={handleThemeChange}>
        Change Theme
      </button>
    </div>
  );
};

export default CustomizeTheme;
