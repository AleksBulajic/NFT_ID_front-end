// IdentityInfo.jsx
import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import "./settings.css";
import { AuthContext } from "../../auth/AuthContextComponent";
import axios from "axios";

const IdentityInfo = ({ form, handleChange,  }) => {
  const { themeColor } = useContext(ThemeContext);
  const [successAlert, setSuccessAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [identityId, setIdentityId] = useState("");
  const { user, token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`https://project4nft-a334719477d5.herokuapp.com/identities/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log(user);
      console.log(token);
      console.log(response.data);

      const foundIdentity = response.data.find((data) => data.user === user.id);

      if (foundIdentity) {
        console.log("USER FOUND!!!!");
        console.log(foundIdentity.id);
        setIdentityId(foundIdentity.id);

        try {
          const filteredForm = {
            ...form,
            user: user.id,
          };

          ["photo", "date_of_birth", "eye_color", "country", "address", "description", "lastName", "firstName"].forEach(field => {
            if (!form[field]) {
              delete filteredForm[field];
            }
          });

          // Exclude the photo field if it is empty or not selected
          

          const updatedResponse = await axios.put(
            `https://project4nft-a334719477d5.herokuapp.com/identity/${foundIdentity.id}/`,
            filteredForm,
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );

          setSuccessAlert("Identity information updated successfully.");
          setErrorAlert("");
        } catch (error) {
          console.error("Error updating identity information:", error);
          setErrorAlert(
            "Error updating identity information. Please try again."
          );
          setSuccessAlert("");
        }
      } else {
        console.log("User not found!");
        // Handle the case when the user identity is not found
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      id="identity-info"
      className="id-container"
      style={{ backgroundColor: themeColor }}
    >
      <h2 className="form-header">Update ID Information</h2>
      {successAlert && <div className="success-alert">{successAlert}</div>}
      {errorAlert && <div className="error-alert">{errorAlert}</div>}
      <form className="id-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={form.last_name}
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
            name="date_of_birth"
            value={form.date_of_birth}
            onChange={handleChange}
            required
          />f
        </label>
        <label>
          Eye Color:
          <input
            type="text"
            name="eye_color"
            value={form.eye_color}
            onChange={handleChange}
            required
          />
        </label>
        <button className="settings-button" type="submit">
          Update ID Info
        </button>
      </form>
    </div>
  );
};

export default IdentityInfo;
