// Navbar.js
import React, {  useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../auth/AuthContextComponent";
import  ThemeContext from '../../pages/Settings/ThemeContext';

const Navbar = ({ onAboutOpen }) => {
  const { handleLogout } = useContext(AuthContext);
  const { themeColor } = useContext(ThemeContext);
  const navigate = useNavigate();

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
    <nav className="navbar" style={{ backgroundColor: themeColor }}>
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
