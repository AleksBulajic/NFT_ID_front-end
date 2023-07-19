import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./landingscreen.css";
import SignUp from "../SignUp/SignUp";
import { signin } from "../../auth/validToken.js";
import { AuthContext } from "../../auth/AuthContextComponent";
import { useSpring, animated } from "react-spring";

const LandingScreen = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isloggedin", "true");
  };
  const titleAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    reset: true,
    reverse: showWelcomeMessage,
    onRest: () => {
      if (showWelcomeMessage) {
        handleLogin();
        navigate("/home");
      }
    },
    delay: 3000,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await signin(text, password);
      setShowWelcomeMessage(true);
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
      showWelcomeMessage ? (
      <animated.h1 style={titleAnimation} className="home-title">
        Hello and Welcome!
      </animated.h1>
      ) :{" "}
      {showSignUp ? (
        <SignUp handleSignUpClick={handleSignUpClick} />
      ) : (
        <>
          <img src="./logo2.png" alt="Logo" className="logo" />
          <h2>Sign In</h2>
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message */}
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
            <button type="submit" className="singn-in">
              Sign In
            </button>
            {successMessage && <p className="success">{successMessage}</p>}{" "}
            {/* Display success message */}
          </form>
          <span className="goTo">
            Don't have an account? Click{" "}
            <Link to="/signup" className="here">
              here
            </Link>{" "}
            to sign up instead.
          </span>
        </>
      )}
    </div>
  );
};

export default LandingScreen;
