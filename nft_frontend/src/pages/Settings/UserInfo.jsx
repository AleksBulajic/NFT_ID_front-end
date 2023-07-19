import React, { useContext} from "react";
import ThemeContext from "./ThemeContext";
import './settings.css';

const UserInfo = ({ form, handleChange, handleSubmit }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div id="user-info" className="user-container" style={themeColor.includes('.avif') || themeColor.includes('data:image/') || themeColor.includes('http') ? { backgroundImage: `url(${themeColor})` } : { backgroundColor: themeColor }}>
      <h2 className ="form-header">Update User Information</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <button className="settings-button" type="submit">Update User Info</button>
      </form>
    </div>
  );
};

export default UserInfo;


