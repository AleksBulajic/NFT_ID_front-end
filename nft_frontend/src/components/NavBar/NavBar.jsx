// Navbar.js
import React, {  useContext,  useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../auth/AuthContextComponent";
import  ThemeContext from '../../pages/Settings/ThemeContext';
import {
  ConnectWallet,
  getCurrentWalletConnected,
} from "../../utils/walletConnection";


const Navbar = ({ onAboutOpen, wallet }) => {
  // const [walletAddress, setWallet] = useState("");
  const [walletStatus, setWalletStatus] = useState("");
  const { handleLogout } = useContext(AuthContext);
  const { themeColor } = useContext(ThemeContext);
  const navigate = useNavigate();


  const handleConnectWallet = async () => {
    const walletResponse = await ConnectWallet(); 
    setWalletStatus(walletResponse.status);
    wallet.setWalletAddress(walletResponse.address);
  };


  const connectWallet = async () => {
    const walletRespons = await ConnectWallet();
    setWalletStatus(walletRespons.status);
    wallet.setWalletAddress(walletRespons.address);
  };

  useEffect(() => {
    const checkConnectWallet = async () => {
      const walletRespons = await getCurrentWalletConnected();
      setWalletStatus(walletRespons.status);
      wallet.setWalletAddress(walletRespons.address);
    };
    checkConnectWallet();
  }, []);

  const handleAboutClick = (event) => {
    event.preventDefault(); // Prevent navigation
    onAboutOpen(); // Open the about modal
  };

  const handleClickSignout = () => {
    handleLogout();
    console.log("Successfully logged out");
    navigate("/")
     // Disconnect MetaMask wallet
  if (window.ethereum && window.ethereum.disconnect) {
    window.ethereum.disconnect();
  };
}


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
          <div id="container">
        <button id="walletButton" onClick={handleConnectWallet}>
          {wallet.walletAddress.length > 0 ? (
            <>
              Connected: {wallet.walletAddress.substring(0, 6)}...
              {wallet.walletAddress.substring(38)}
            </>
          ) : (
            <span>🦊</span>
          )}
        </button>
        </div>
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
            <li>
              {/* <NavLink to="/nft" activeclassname="active-link" > 
            MintNFT
              </NavLink> */}
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
