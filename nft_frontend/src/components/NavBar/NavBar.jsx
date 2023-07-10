// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const handleContactClick = () => {
    const emailUrl = "mailto:devin.rodriguez.p8@gmail.com";
    const emailWindow = window.open(emailUrl, "_blank");

    if (emailWindow) {
      emailWindow.opener = null;
      // Add a close event to handle manual closing
      const closeEmailWindow = () => {
        emailWindow.close();
      };

      // Listen for clicks outside the email window to close it
      window.addEventListener("click", closeEmailWindow);

      // Optional: Add a close button inside the email window to close it
      // emailWindow.document.write('<button onclick="window.close()">Close</button>');

      // Optional: Listen for the beforeunload event to remove the event listener when the email window is closed
      emailWindow.addEventListener("beforeunload", () => {
        window.removeEventListener("click", closeEmailWindow);
      });
    } else {
      // Unable to open the email client
      // Handle this case, e.g., display an error message
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>DR</h2>
      </div>
      <div className="navbar-links-buttons">
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/chatbox">Chatbox</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button" onClick={handleContactClick}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
