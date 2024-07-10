// import React from "react";
// import Layout from "../components/Layout";
// import "../styles/SignUp.css";
// import user from "../images/signup.jpg";

// function Signup() {
//   return (
//     <Layout>
//       <div className="signUpDiv">
//         <img src={user} alt="Signup" className="signUpImage" />
//         <div className="form">
//           <h3 style={{ textAlign: "center", color: "orange" }}>Sign Up</h3>
//           <form>
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Enter Username"
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter Email"
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter Password"
//             />
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               id="confirmPassword"
//               placeholder="Confirm Password"
//             />
//             <button type="submit" id="signUp">
//               Signup
//             </button>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Signup;

// frontend/src/pages/Signup.js

import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/SignUp.css";
import user from "../images/signup.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Signup failed. Please try again."
        );
      }

      const data = await response.json();
      console.log(data); // Handle success or redirect
    } catch (error) {
      console.error("Signup Error:", error);
      setError(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="signUpDiv">
        <img src={user} alt="Signup" className="signUpImage" />
        <div className="form">
          <h3 style={{ textAlign: "center", color: "orange" }}>Sign Up</h3>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" id="signUp">
              Sign Up
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
