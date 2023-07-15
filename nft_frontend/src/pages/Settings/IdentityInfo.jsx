import React, { useState, useContext } from 'react';
import axios from 'axios';
import './settings.css';
import { AuthContext } from '../../auth/AuthContextComponent';

const IdentityInfo = ({ form, handleChange }) => {
  const [successAlert, setSuccessAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const [identityId, setIdentityId] = useState('');
  const { user, token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/identity/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
  
      console.log(user);
      console.log(token);
      console.log(response.data);
  
      const foundIdentity = response.data.find((data) => data.user === user.id);
  
      if (foundIdentity) {
        console.log('USER FOUND!!!!');
        console.log(foundIdentity.id);
        setIdentityId(foundIdentity.id);
  
        try {
          const filteredForm = {
            ...form,
            user: user.id,
          };
  
          // Exclude the photo field if it is empty or not selected
          if (!form.photo) {
            delete filteredForm.photo;
          }
  
          // Exclude the dateOfBirth field if it is empty or not selected
          if (!form.dateOfBirth) {
            delete filteredForm.dateOfBirth;
          }

          if (!form.eyeColor) {
            delete filteredForm.eyeColor;
          }

          if (!form.country) {
            delete filteredForm.country;
            }

          if (!form.address) {
            delete filteredForm.address;
          }
          
          if (!form.description) {
            delete filteredForm.description;
          }

          if (!form.lastName) {
            delete filteredForm.lastName;
          }

          if (!form.firstName) {
            delete filteredForm.firstName;
          }
            


  
          const response = await axios.put(
            `http://127.0.0.1:8000/api/identity/${foundIdentity.id}/`,
            filteredForm,
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
  
          setSuccessAlert('Identity information updated successfully.');
          setErrorAlert('');
        } catch (error) {
          console.error('Error updating identity information:', error);
          setErrorAlert('Error updating identity information. Please try again.');
          setSuccessAlert('');
        }
      } else {
        console.log('User not found!');
        // Handle the case when the user identity is not found
      }
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <div id="identity-info" className="id-container">
      <h2 className="form-header">ID Information</h2>
      {successAlert && <div className="success-alert">{successAlert}</div>}
      {errorAlert && <div className="error-alert">{errorAlert}</div>}
      <form className="id-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="text"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <label>
          Eye Color:
          <input
            type="text"
            name="eyeColor"
            value={form.eyeColor}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update ID Info</button>
      </form>
    </div>
  );
};

export default IdentityInfo;