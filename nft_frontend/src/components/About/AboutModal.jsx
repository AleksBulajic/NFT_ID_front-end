import React, { useContext } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import ThemeContext from "../../pages/Settings/ThemeContext";
import "../../pages/Settings/settings.css"

Modal.setAppElement("#root");

const AboutModal = ({ isOpen, onRequestClose }) => {
  const { themeColor } = useContext(ThemeContext);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-50%)",
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="About Modal"
      style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10000,
          },
          content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#ffffff",
            backgroundColor: themeColor,
            border: "none",
            borderRadius: "8px",
            width: "600px",
            padding: "20px",
            margin: "0 auto",
        },
      }}
    >
      <animated.div style={modalAnimation}>
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
      <button className = "settings-button" onClick={onRequestClose}>Close</button>
      </animated.div>
    </Modal>
  );
};

export default AboutModal;
