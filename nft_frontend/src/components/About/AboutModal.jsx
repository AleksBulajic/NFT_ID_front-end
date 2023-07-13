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
        You can upload your NFTs, view them in your personal gallery, and share them with others. By using Web3 technologies NFTGems allows users to have there own personalized Decentralized ID thus assuring that our Users can stay in control of who has access to their information.
      </p>
      <h3>Key Features: </h3>
      <ul>
      <li>AI Chatbox: Chat with our AI FinTech Guru for instant advice and support.</li>
      <li>Create NFT: Use your camera or upload a file to create a new NFT.</li>
      <li>User Settings: Manage your user and DID information.</li>
      <li>Decentralized ID (DID): A self-sovereign, blockchain-based identity system that enables individuals to control and manage their digital identities independent of centralized authorities.</li>
      </ul>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AboutModal;
