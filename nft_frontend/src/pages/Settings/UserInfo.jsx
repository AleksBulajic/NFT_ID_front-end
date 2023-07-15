import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./settings.css";
import { AuthContext } from "../../auth/AuthContextComponent";

const UserInfo = () => {
  const { user } = useContext(AuthContext);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [walletAddress, setWalletAddress] = useState(
    user.userprofile?.metamask_wallet_address || "" // Use conditional chaining to handle undefined user.userprofile
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const requestData = {
        username,
        email,
        userprofile: {
          metamask_wallet_address: walletAddress,
        },
      };
      console.log("Request Data:", requestData);

      const response = await axios.put(
        `http://127.0.0.1:8000/users/${user.id}/`,
        requestData,
        {
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response Data:", response.data);
      // Handle successful update
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div id="user-info" className="user-container">
      <h2 className="form-header">Update User Information</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <label className="user-form-label">
          Username:
          <input
            className="user-form-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="user-form-label">
          Email:
          <input
            className="user-form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="user-form-label">
          Wallet Address:
          <input
            className="user-form-input"
            type="text"
            placeholder="Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
        </label>
        <button className="user-form-button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
