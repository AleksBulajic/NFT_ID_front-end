import React, { useState, useContext } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';
import IdentityInfo from './IdentityInfo';
import CustomizeTheme from './CustomizeTheme';
import QandA from './QandA';
import './settings.css';
import { AuthContext } from '../../auth/AuthContextComponent';

const Settings = () => {
  const { user } = useContext(AuthContext);


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

  const [successAlert, setSuccessAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');

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

    // Make API request to update user information using Axios
    axios
      .put(`/api/users/${user.id}`, userForm)
      .then((response) => {
        console.log('User information updated:', response.data);
        setSuccessAlert('User information updated successfully.');
        setErrorAlert('');
      })
      .catch((error) => {
        console.error('Error updating user information:', error);
        setErrorAlert('Error updating user information. Please try again.');
        setSuccessAlert('');
      });
  };

  const handleIdFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement "ID" information update logic
    console.log('ID form submitted:', idForm);

    // Make API request to update identity information using Axios
    axios
      .put('/api/identity', idForm)
      .then((response) => {
        console.log('Identity information updated:', response.data);
        setSuccessAlert('Identity information updated successfully.');
        setErrorAlert('');
      })
      .catch((error) => {
        console.error('Error updating identity information:', error);
        setErrorAlert('Error updating identity information. Please try again.');
        setSuccessAlert('');
      });
  };

  const [currentSection, setCurrentSection] = useState('user-info');

  // Handler for when a sidebar link is clicked
  const handleSidebarLinkClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="settings-container">
      <Sidebar onLinkClick={handleSidebarLinkClick} />
      <div className="settings-content">
        {successAlert && <div className="success-alert">{successAlert}</div>}
        {errorAlert && <div className="error-alert">{errorAlert}</div>}
        {currentSection === 'user-info' && (
          <UserInfo
            form={userForm}
            handleChange={handleUserFormChange}
            handleSubmit={handleUserFormSubmit}
          />
        )}
        {currentSection === 'identity-info' && (
          <IdentityInfo
            form={idForm}
            handleChange={handleIdFormChange}
            handleSubmit={handleIdFormSubmit}
          />
        )}
        {currentSection === 'customize-theme' && <CustomizeTheme />}
        {currentSection === 'q-and-a' && <QandA />}
      </div>
    </div>
  );
};

export default Settings;
