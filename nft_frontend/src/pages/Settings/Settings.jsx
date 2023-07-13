import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';
import IdentityInfo from './IdentityInfo';
import CustomizeTheme from './CustomizeTheme';
import QandA from './QandA';
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
    const [currentSection, setCurrentSection] = useState('user-info');

    // Handler for when a sidebar link is clicked
    const handleSidebarLinkClick = (section) => {
        setCurrentSection(section);
    };
    return (
        <div className='settings-container'>
            <Sidebar onLinkClick={handleSidebarLinkClick} />
            <div className='settings-content'>
                {currentSection === 'user-info' && 
                    <UserInfo
                        form={userForm}
                        handleChange={handleUserFormChange}
                        handleSubmit={handleUserFormSubmit}
                    />}
                {currentSection === 'identity-info' && 
                    <IdentityInfo
                        form={idForm}
                        handleChange={handleIdFormChange}
                        handleSubmit={handleIdFormSubmit}
                    />}
                    {currentSection === 'customize-theme' && <CustomizeTheme/>}
                {currentSection === 'q-and-a' && <QandA />}

            </div>
        </div>
    );
};

export default Settings;
