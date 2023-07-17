import axios from "axios";

// Define the key for the token in local storage
export const LOCALSTORAGE_KEY = "token";

// Create a re-usable axios instance with the base URL
const baseURL = "https://project4nft-a334719477d5.herokuapp.com/";
const base = axios.create({
  baseURL,
});

// Interceptors are axios functionality that allows you to intercept requests and responses
// Here we're setting the token in local storage to the Authorization header
base.interceptors.request.use((config) => {
  // Get the token from local storage
  const token = localStorage.getItem(LOCALSTORAGE_KEY);
  
  // Set the Authorization header with the token
  config.headers.Authorization = token;
  
  // Return the modified config object
  return config;
});

export default base;
