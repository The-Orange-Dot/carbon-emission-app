import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";

function NavBar({ loggedIn, user, setUser, setLoggedIn }) {
  //Style for navbar links
  const linkStyle = {
    color: "black",
    backgrounColor: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div className="navbar-container">
      <div className="user-info-container">
        <NavLink to="/home">
          <h1>Logo Goes Here</h1>
        </NavLink>
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <NavLink
              style={linkStyle}
              activestyle={{ color: "blue" }}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
