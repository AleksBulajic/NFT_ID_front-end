// Sidebar.jsx
import React from 'react';
import './settings.css';
const Sidebar = ({ onLinkClick }) => {
    return (
        <div className='settings-sidebar'>
            <ul>
            <li><button className='sidebar-link' onClick={() => onLinkClick('user-info')}>User Information</button></li>
                <li><button className='sidebar-link' onClick={() => onLinkClick('identity-info')}>Identity Information</button></li>
            </ul>
        </div>
    );
};

export default Sidebar;
