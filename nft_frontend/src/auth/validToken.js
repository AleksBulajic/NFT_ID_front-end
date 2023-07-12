import base from "./baseURL";

export const LOCALSTORAGE_KEY = "token";

export async function signin(username, password) {
  // Make a request to sign in the user and retrieve a token
  const response = await base.post("login/", {
    username,
    password,
  });

  // Put the token in local storage for 30 minutes (duration set on the server)
  localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);

  return response.data;
}

export async function signup(username, password) {
  // Make a request to sign up a user
  const response = await base.post("register/", {
    username,
    password,
  });

  return response.data;
}

export async function isTokenValid() {
  try {
    // Make a request to check if the token is valid
    const response = await base.get('test-token/');
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    // Handle error if token validation fails
    console.error('Token validation failed:', error);
    throw error;
  }
}
