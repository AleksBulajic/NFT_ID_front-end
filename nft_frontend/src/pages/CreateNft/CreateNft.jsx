import React, { useState } from 'react';
import './createnft.css';
// import SignUp from '../SignUp';
import ImageCapture from './Button.jsx';

const CreateNft = () => {
//   const [showSignUp, setShowSignUp] = useState(false);

//   const handleSignUpClick = (e) => {
//     e.preventDefault();
//     setShowSignUp(!showSignUp);
//   };

  return (
    <div className="create-nft-container">
        <>
          <h2>Create ID</h2>
          <form className="create-nft-form">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <ImageCapture />
            <textarea placeholder="Description" required></textarea>
            <input type="text" placeholder="NFT Token ID" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="Date of Birth" required />
            <input type="text" placeholder="Eye Color" required />
            <button type="submit">Create</button>
          </form>
        </>
    </div>
  );
};

export default CreateNft;
