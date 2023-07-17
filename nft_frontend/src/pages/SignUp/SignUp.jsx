import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { signup } from "../../auth/validToken";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setLoading] = useState(false);
  const [setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        username,
        email,
        password,
      };
      console.log(data);
      const response = await signup(username, email, password);
      console.log(response);

      setMessage("Successfully created a new account! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Registration failed:", error);
      setLoading(false);
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="signin-text">
        Already have an account? Click <Link to="/">here</Link> to sign in.
      </div>
    </div>
  );
};

export default SignUp;
