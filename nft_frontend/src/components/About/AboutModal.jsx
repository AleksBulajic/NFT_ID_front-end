import React from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";

Modal.setAppElement("#root");

const AboutModal = ({ isOpen, onRequestClose }) => {
  // Define the animation config for the modal
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
        },
        content: {
          color: "#ffffff",
          backgroundColor: "#2f1c2c",
          border: "none",
          borderRadius: "8px",
        },
      }}
    >
      {/* Wrap the modal content with the animated component */}
      <animated.div style={modalAnimation}>
        <h2 className="page-title">About NFTGems</h2>
        <p>
          NFTGems is a platform that allows you to manage your NFTs and wallet
          information in one place. You can upload your NFTs, view them in your
          personal gallery, and share them with others. Stay tuned for more
          features! To get started...
        </p>
        <button onClick={onRequestClose}>Close</button>
      </animated.div>
    </Modal>
  );
};

export default AboutModal;
