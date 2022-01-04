import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../images/treeLogo.png";

function NavBar() {
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
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <h1 style={{ color: "white" }}>App Name Here?</h1>
      </div>

      <div className="nav-buttons">
        <ul>
          <li>
            <NavLink style={linkStyle} activestyle={{ color: "blue" }} to="/">
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
          <li>
            <NavLink
              to="/estimate"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              Estimates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              My History
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
