import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./landingscreen.css";
import SignUp from "../SignUp/SignUp";
import { signin } from "../../auth/validToken.js";
import { AuthContext } from "../../auth/AuthContextComponent";

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const {setIsLoggedIn, setUser} = useContext(AuthContext);


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await signin(text, password);
      console.log(response);
      setIsLoggedIn(true);
      setUser(response.user);
      navigate("/home");
      console.log(response);
    } catch (error) {
      console.error("Error during sign in: ", error);
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

export default SignIn;
