import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import { useLocation } from 'react-router-dom'
import './home.css'

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="home-container">
      {showSignUp ? (
        <SignUp handleSignUpClick={handleSignUpClick} />
      ) : (
        <>
          <h2>Sign In</h2>
          <form className="home-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
          <span className="goTo">
            Don't have an account? Click{' '}
            <a href="/signup" onClick={handleSignUpClick}>
              here
            </a>{' '}
            to sign up instead.
          </span>
        </>
      )}
    </div>
  );
};

export default SignIn;
