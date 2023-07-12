
import React, { useState } from 'react';
import './settings.css';

const Settings = () => {
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [idForm, setIdForm] = useState({
    firstName: '',
    lastName: '',
    photo: '',
    description: '',
    address: '',
    country: '',
    dateOfBirth: '',
    eyeColor: '',
  });

  const handleUserFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleIdFormChange = (e) => {
    setIdForm({
      ...idForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement user information update logic
    console.log('User form submitted:', userForm);
  };

  const handleIdFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement "ID" information update logic
    console.log('ID form submitted:', idForm);
  };

  return (
    <div>
      <div className='user-container'>
        <h2>User Information</h2>
        <form className="user-form" onSubmit={handleUserFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userForm.username}
              onChange={handleUserFormChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userForm.email}
              onChange={handleUserFormChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userForm.password}
              onChange={handleUserFormChange}
              required
            />
          </label>
          <button type="submit">Update User Info</button>
        </form>
      </div>
      
      <div className='id-container'>
        <h2>ID Information</h2>
        <form className="id-form" onSubmit={handleIdFormSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={idForm.firstName}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={idForm.lastName}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Photo:
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={idForm.description}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={idForm.address}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={idForm.country}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="text"
              name="dateOfBirth"
              value={idForm.dateOfBirth}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <label>
            Eye Color:
            <input
              type="text"
              name="eyeColor"
              value={idForm.eyeColor}
              onChange={handleIdFormChange}
              required
            />
          </label>
          <button type="submit">Update ID Info</button>
        </form>
      </div>
    </div>
  );
};
  

export default Settings;

