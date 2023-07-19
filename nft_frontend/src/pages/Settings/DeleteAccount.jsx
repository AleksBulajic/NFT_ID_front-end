import React, { useContext } from "react";
import axios from "axios";
import './settings.css';
import { AuthContext } from "../../auth/AuthContextComponent";
import ThemeContext from "./ThemeContext";


const DeleteAccount = () => {
  const { user } = useContext(AuthContext);
  const { themeColor } = useContext(ThemeContext);
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  
  
  

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed) {

      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.delete(
          `https://project4nft-a334719477d5.herokuapp.com/api/users/${user.id}/`,
          {
            headers: {
              Authorization: `Token ${token}`
            },
          }
        ); 
        console.log(response.data);

        const deleteButton = () => {
          setIsLoggedIn(false);
          localStorage.setItem("isloggedin", "false");
        };


        localStorage.removeItem('user')
        localStorage.removeItem('token');
        window.location.href = '/';
        deleteButton()
      } catch (error) {
        console.error('Deletion failed:', error.response ? error.response.data : error.message);
      }
    } 
  };

  return (
    <div className ="delete-account" style={{ backgroundColor: themeColor }}>
      <h2>Delete Account</h2>
      <button className="settings-button" onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default DeleteAccount;
