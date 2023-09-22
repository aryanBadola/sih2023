import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-rect" />
      <div className="join-as-lawyer">
        <button className="btn">Join as Lawyer</button>
      </div>
      <div className="login-button">
          <button className="btn">Login</button>
        </div>
      <div className="create-account">
        <button className="btn">Create Account</button>
      </div>
      <div className="navbar-line" />
      <div className="icon">icon</div>
      <Link to="/" className="advocate">Advocates</Link>
      <Link to="/" className="chat-with-us1">Chat with Us</Link>
    </nav>
  );
};

export default NavBar;
