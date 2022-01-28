import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../images/treeLogo.png";

function NavBar({ loggedIn }) {
  //Style for navbar links
  const linkStyle = {
    color: "white",
    backgrounColor: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div className="navbar-container">
      <div className="user-info-container">
        <NavLink to="/carbon-emission-app/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <h1 id="name-of-app" style={{ color: "white" }}>
          My Carbon Footprint
        </h1>
      </div>

      <div className="nav-buttons">
        <ul>
          <li>
            <NavLink
              style={linkStyle}
              activestyle={{ color: "blue" }}
              to="/carbon-emission-app/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/carbon-emission-app/about"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/carbon-emission-app/estimate"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              Estimates
            </NavLink>
          </li>
          <li>
            <NavLink
              to={
                loggedIn
                  ? "/carbon-emission-app/user"
                  : "/carbon-emission-app/login"
              }
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              My Info
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
