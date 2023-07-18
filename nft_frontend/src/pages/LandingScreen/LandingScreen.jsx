import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./landingscreen.css";
import SignUp from "../SignUp/SignUp";
import { signin } from "../../auth/validToken.js";
import { AuthContext } from "../../auth/AuthContextComponent";

const LandingScreen = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const { setIsLoggedIn, setUser } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isloggedin", "true");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await signin(text, password);
      console.log(response);
      setUser(response.user);
      setSuccessMessage("Successfully signed in!");
      setTimeout(() => {
        handleLogin(); // Call handleLogin when the user is signed in
        navigate("/home");
      }, 1000);
      console.log(response);
    } catch (error) {
      console.error("Error during sign in: ", error);
      setError("Unable to sign in with provided credentials."); // Set error message
    }
  }

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
          {error && <p className="error">{error}</p>} {/* Display error message */}
          <form className="home-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              placeholder="Username"
              required
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            {successMessage && <p className="success">{successMessage}</p>} {/* Display success message */}
          </form>
          <span className="goTo">
            Don't have an account? Click <Link to="/signup">here</Link> to sign
            up instead.
          </span>
        </>
      )}
    </div>
  );
};

export default LandingScreen;
