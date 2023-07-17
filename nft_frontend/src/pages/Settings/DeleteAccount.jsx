import React, { useContext } from "react";
import axios from "axios";
import './settings.css';
import { AuthContext } from "../../auth/AuthContextComponent";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed) {
      // Retrieve token from local storage
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

        // Log the user out after successful deletion
        localStorage.removeItem('user')
        localStorage.removeItem('token');
        window.location.href = '/'; // replace with your login page path
        
      } catch (error) {
        console.error('Deletion failed:', error.response ? error.response.data : error.message);
      }
    } 
  };

  return (
    <div className="delete-account">
      <h2>Delete Account</h2>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default DeleteAccount;
