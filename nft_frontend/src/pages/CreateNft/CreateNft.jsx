import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./createnft.css";
import ImageCapture from "./Button.jsx";
import { AuthContext } from "../../auth/AuthContextComponent";
import ThemeContext from "../Settings/ThemeContext";
const CreateNft = () => {
  const { user } = useContext(AuthContext);
  const { themeColor } = useContext(ThemeContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [photo, setPhoto] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
  
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("description", description);
    formData.append("nft_token_id", tokenId);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("dateOfBirth", dob);
    formData.append("eyeColor", eyeColor);
    formData.append("photo", photo);
    formData.append("user", user.id);
  

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/identities/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-nft-container" style={{ backgroundColor: themeColor }}>
      <h2>Create ID</h2>
      <form className="create-nft-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <ImageCapture onSetPhoto={setPhoto} />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="NFT Token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Eye Color"
          value={eyeColor}
          onChange={(e) => setEyeColor(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateNft;
