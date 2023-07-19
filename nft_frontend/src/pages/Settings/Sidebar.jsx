import React, { useContext} from "react";
import ThemeContext from "./ThemeContext";
import "./settings.css";

const Sidebar = ({ onLinkClick, DeleteAccount }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="settings-sidebar" style={themeColor.includes('.avif') || themeColor.includes('data:image/') || themeColor.includes('http') ? { backgroundImage: `url(${themeColor})` } : { backgroundColor: themeColor }}>
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
        <li>
          <button
            className="sidebar-link"
            onClick={() => onLinkClick("delete-account")}
          >
            Delete Account
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
