// import React from "react";
// import Layout from "../components/Layout";
// import "../styles/Login.css";
// import user from "../images/user.png";

// function Login() {
//   return (
//     <Layout>
//       <div className="formDiv">
//         <img src={user} alt="Login" className="userImage" />
//         <h3 style={{ textAlign: "center", color: "orange" }}>Login</h3>
//         <div className="form">
//           <form>
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Enter Username"
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter Password"
//             />
//             <button type="submit" id="login">
//               Login
//             </button>
//             <input type="checkbox" name="remember" id="remember" />
//             Remember me
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Login;


// frontend/src/pages/Login.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Login.css';
import user from '../images/user.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      localStorage.setItem('token', data.token); // Store token in localStorage
      setError('');
      // Redirect to dashboard or handle success
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="formDiv">
        <img src={user} alt="Login" className="userImage" />
        <h3 style={{ textAlign: 'center', color: 'orange' }}>Login</h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="login">
              Login
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
