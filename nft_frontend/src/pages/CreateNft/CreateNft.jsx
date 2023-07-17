import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./createnft.css";
import ImageCapture from "./Button.jsx";
import { AuthContext } from "../../auth/AuthContextComponent";

import { contract, mintNFT } from "../../web3/NFTinterface";

const CreateNft = ({ walletAddress }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
    // addSmartContractListener()
  }, [user]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  // const [tokenId, setTokenId] = useState("");
  // const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [photo, setPhoto] = useState(null);

  // TO DO await the transction to be over before saving ID
  // function addSmartContractListener() {
  //   contract.on('Transfer', (from, to, tokenId) => {
  //   console.log(from,to,tokenId, "this is the Event");
  //   })
  // }
  async function mint() {
    const nft = await mintNFT(walletAddress, photo);
    console.log(nft);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("description", description);
    formData.append("address", walletAddress);
    formData.append("country", country);
    formData.append("date_of_birth", dob);
    formData.append("eye_color", eyeColor);
    formData.append("photo", photo);
    formData.append("user", user.id);

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `https://project4nft-a334719477d5.herokuapp.com/identities/`,
        formData,

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      mint();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-nft-container">
      <h2>Create ID</h2>
      <form className="create-nft-form" onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        /> */}
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
        {/* <ImageCapture onSetPhoto={setPhoto} /> */}
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        {/* <input
          type="text"
          placeholder="NFT Token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          required
        /> */}
        <input
          type="text"
          placeholder="Address"
          value={walletAddress}
          // onChange={(e) => setAddress(e.target.value)}
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
