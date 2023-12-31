import React, { createContext, useEffect, useState } from "react";
import { LOCALSTORAGE_KEY } from "./baseURL";

// Create an AuthContext to manage authentication state
export const AuthContext = createContext(null);

export default function AuthContextComponent({ children }) {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to store user data
  const [user, setUser] = useState({});

  // Check if a token exists in local storage and set the login state accordingly
  useState(() => {
    const token = localStorage.getItem(LOCALSTORAGE_KEY);
    setIsLoggedIn(!!token);
  });

  // Update the user data in local storage whenever the user state changes
  useState(() => {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
        setUser(JSON.parse(userLocalStorage));
    }
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    // Provide the authentication context and its values to the children components
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
