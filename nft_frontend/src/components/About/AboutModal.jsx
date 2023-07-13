// AboutModal.js
import React from 'react';
import Modal from 'react-modal';

const AboutModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="About Modal"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: { color: '#ffffff', backgroundColor: '#2f1c2c' },
      }}
    >
      <h2 className="page-title">About NFTGems</h2>
      <p>
        NFTGems is a platform that allows you to manage your NFTs and wallet information in one place. 
        You can upload your NFTs, view them in your personal gallery, and share them with others. 
        Stay tuned for more features! To get started...
      </p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AboutModal;
