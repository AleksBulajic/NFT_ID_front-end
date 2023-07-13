// Sidebar.jsx
import React from "react";
import "./settings.css";
const Sidebar = ({ onLinkClick }) => {
  return (
    <div className="settings-sidebar">
      <h2 className="sidebar-header">Settings</h2>
      <ul>
        <li>
          <button
            className="sidebar-link"
            onClick={() => onLinkClick("user-info")}
          >
            User Information
          </button>
        </li>
        <li>
          <button
            className="sidebar-link"
            onClick={() => onLinkClick("identity-info")}
          >
            Identity Information
          </button>
        </li>
        <li>
          <button
            className="sidebar-link"
            onClick={() => onLinkClick("customize-theme")}
          >
            Customize Theme
          </button>
        </li>
        <li>
          <button
            className="sidebar-link"
            onClick={() => onLinkClick("q-and-a")}
          >
            Q & A
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
