import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import './settings.css';
import background1 from '../../Images/background1.avif'

const CustomizeTheme = () => {
  const { setThemeColor } = useContext(ThemeContext);
  const themes = ['#2f1c2c', '#0030dd', '#175604', '#804900', '#4d0202', '#760174', '#010831', background1]; // add image paths to your theme options
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  const handleThemeChange = () => {
    if (selectedTheme) {
      setThemeColor(selectedTheme);
    }
  };

  return (
    <div className="customize-container" style={selectedTheme.includes('.avif') || selectedTheme.includes('data:image/') || selectedTheme.includes('http') ? { backgroundImage: `url(${selectedTheme})` } : { backgroundColor: selectedTheme }}>
      <h1 className="title">Customize Theme</h1>
      <div className="theme-options">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`theme-option ${selectedTheme === theme ? 'selected' : ''}`}
            style={theme.includes('data:image/') || theme.includes('http') ? { backgroundImage: `url(${theme})` } : { backgroundColor: theme }}
            onClick={() => handleThemeClick(theme)}
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