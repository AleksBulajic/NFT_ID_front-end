// Navbar.js
import React, {  useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../auth/AuthContextComponent";

const Navbar = ({ onAboutOpen }) => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();


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
  const handleAboutClick = (event) => {
    event.preventDefault(); // Prevent navigation
    onAboutOpen(); // Open the about modal
  };

  const handleClickSignout = () => {
    handleLogout();
    console.log("Successfully logged out");
    navigate("/")
  };


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button className="navbar-heading-button">
          <Link to="/home" className="navbar-heading-link">
            NFT App
          </Link>
        </button>
      </div>
      <div className="navbar-links-buttons">
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink
                to="/home"
                activestyle={{
                  color: "#333333",
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" activeclassname="active-link">
                Create
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeclassname="active-link"
                onClick={handleAboutClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" activeclassname="active-link">
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button" onClick={ handleClickSignout}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
