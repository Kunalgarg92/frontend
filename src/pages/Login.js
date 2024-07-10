import React from "react";
import Layout from "../components/Layout";
import "../styles/Login.css";
import user from "../images/user.png";

function Login() {
  return (
    <Layout>
      <div className="formDiv">
        <img src={user} alt="Login" className="userImage" />
        <h3 style={{textAlign:"center",color:"orange"}}>Login</h3>
        <div className="form">
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter Username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter Password" />
            <button type="submit" id="login">Login</button>
            <input type="checkbox" name="remember" id="remember" />Remember me
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
