// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/signup/', {
//         username,
//         email,
//         password,
//       });

//       // Handle successful sign-up response here
//       console.log(response.data);

//       // Redirect the user to a different page or perform other actions
//     } catch (error) {
//       // Handle sign-up error here
//       console.error('Sign-up failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
