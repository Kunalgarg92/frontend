import React from "react";
import Layout from "../components/Layout";
import "../styles/SignUp.css";
import user from "../images/signup.jpg";

function Signup() {
  return (
    <Layout>
      <div className="signUpDiv">
        <img src={user} alt="Signup" className="signUpImage" />
        <div className="form">
        <h3 style={{textAlign:"center",color:"orange"}}>Sign Up</h3>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter Username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter Password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
            <button type="submit" id="signUp">Signup</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
