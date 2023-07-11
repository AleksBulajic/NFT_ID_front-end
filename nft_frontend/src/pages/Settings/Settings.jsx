// import React from 'react'
// import './settings.css'
// import '../../App.css'

// const Settings= () => {
//   return (
//     <div className = "page-container">
//         <h1 className = "page-title">Settings </h1>
//     </div>
//   )
// }

// export default Settings;

// Settings.js
import React, { useState } from 'react';
import AboutModal from './AboutModal';

const Settings = () => {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const handleAboutClick = () => {
    setAboutModalOpen(true);
  };

  const handleAboutModalClose = () => {
    setAboutModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleAboutClick} style={{ background: 'none', border: 'none', color: '#ffffff' }}>
        About
      </button>
      <AboutModal isOpen={isAboutModalOpen} onRequestClose={handleAboutModalClose} />
    </div>
  );
};

export default Settings;
