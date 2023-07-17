import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import './settings.css';

const CustomizeTheme = () => {
  const { setThemeColor } = useContext(ThemeContext);
  const colors = ['#2f1c2c', '#0030dd', '#175604', '#804900', '#4d0202', '#760174', '#010831'];
  const [selectedColor, setSelectedColor] = useState('');
  const { themeColor } = useContext(ThemeContext);


  

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleThemeChange = () => {
    if (selectedColor) {
      setThemeColor(selectedColor);
    }
  };

  return (
    <div className="customize-container" style={{ backgroundColor: themeColor }}>
      <h1 className="title">Customize Theme</h1>
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
      <button className="settings-button" onClick={handleThemeChange}>
        Change Theme
      </button>
    </div>
  );
};

export default CustomizeTheme;
