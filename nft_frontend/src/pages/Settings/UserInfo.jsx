import React from "react";
import './settings.css';

const UserInfo = ({ form, handleChange, handleSubmit }) => {
  return (
    <div id="user-info" className="user-container">
      <h2 className ="form-header">User Information</h2>
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
        <button type="submit">Update User Info</button>
      </form>
    </div>
  );
};

export default UserInfo;


