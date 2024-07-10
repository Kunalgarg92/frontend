import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import hat from "../images/hat.png"
function Header() {
  return (
    <div className="navbar">
        <div className="navBarUpper"><Link className="Name" to="/">
       KAP'D <img src={hat} />
      </Link></div>
      <div className="navBarLower">
        <Link to="/" id="link-text">
          Home
        </Link>
        <Link to="/signup" id="link-text">
          SignUp
        </Link>
        <Link to="/courses" id="link-text">
          Courses
        </Link>
        <Link to="/login" id="link-text">
          Login
        </Link>
        <Link to="/view" id="link-text">
          View
        </Link>
      </div>
    </div>
  );
}

export default Header;
