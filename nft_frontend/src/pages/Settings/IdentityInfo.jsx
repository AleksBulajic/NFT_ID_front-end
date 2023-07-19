import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import "./settings.css";
import { AuthContext } from "../../auth/AuthContextComponent";
import axios from "axios";
const IdentityInfo = ({ form, handleChange }) => {
  const { themeColor } = useContext(ThemeContext);
  const [successAlert, setSuccessAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [identityId, setIdentityId] = useState("");
  const { user, token } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://project4nft-a334719477d5.herokuapp.com/identities/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("User:", user);
      console.log("Token:", token);
      console.log("Response data:", response.data);

      const foundIdentity = response.data.find((data) => data.user === user.id);

      console.log("Found identity:", foundIdentity);
      if (foundIdentity) {
        console.log("User found!");
        console.log("Identity:", foundIdentity.id);
        setIdentityId(foundIdentity.id);
        try {
          const filteredForm = {
            ...form,
            user: user.id,
          };
          [
            "date_of_birth",
            "eye_color",
            "country",
            "address",
            "description",
            "lastName",
            "firstName",
            "photo",
          ].forEach((field) => {
            if (!form[field]) {
              delete filteredForm[field];
            }
          });
          console.log("Filtered Form:", filteredForm);
          const updatedResponse = await axios.put(
            `https://project4nft-a334719477d5.herokuapp.com/api/identity/${foundIdentity.id}/`,
            filteredForm,
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          console.log("Updated Response:", updatedResponse.data);
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
      console.error("Error retrieving identities:", error);
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
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={form.last_name}
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
            type="date"
            name="date_of_birth"
            value={form.date_of_birth}
            onChange={handleChange}
          />
        </label>
        <label>
          Eye Color:
          <input
            type="text"
            name="eye_color"
            value={form.eye_color}
            onChange={handleChange}
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
