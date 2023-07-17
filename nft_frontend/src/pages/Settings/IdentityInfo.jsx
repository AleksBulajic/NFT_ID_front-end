// IdentityInfo.jsx
import React, { useContext} from 'react';
import ThemeContext from './ThemeContext';
import './settings.css';

const IdentityInfo = ({ form, handleChange, handleSubmit }) => {
    const { themeColor } = useContext(ThemeContext);
    return (
        <div id='identity-info' className='id-container' style={{ backgroundColor: themeColor }}>
            <h2 className ="form-header">Update ID Information</h2>
            <form className="id-form" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Photo:
                    <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="text"
                        name="dateOfBirth"
                        value={form.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Eye Color:
                    <input
                        type="text"
                        name="eyeColor"
                        value={form.eyeColor}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className="settings-button" type="submit">Update ID Info</button>
            </form>
        </div>
   
    );
};

export default IdentityInfo;
