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

  //Logout Button (temporary signout)
  const logoutHandler = () => {
    setUser({
      firstName: "",
      lastName: "",
      username: "Username",
      email: "",
      image:
        "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
    });
    setLoggedIn(false);
  };

  return (
    <div className="navbar-container">
      <div className="user-info-container">
        <NavLink to="/user">
          <img
            className="user-image"
            //Figure out how to match username when they log in
            src={user.image}
            alt="default profile"
          />
        </NavLink>
        <div className="username-login">
          <p>
            <strong>{user.username}</strong>
          </p>
          {loggedIn ? (
            <NavLink to="/home">
              <button onClick={logoutHandler}>Log Out</button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button>Log In</button>
            </NavLink>
          )}
        </div>
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
          <li>
            <NavLink
              style={linkStyle}
              activestyle={{ color: "blue" }}
              to="/flightestimate"
            >
              Flight Estimate
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
