import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar({ loggedIn }) {
  const linkStyle = {
    color: "black",
    backgrounColor: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div className="navbar-container">
      <div className="user-info-container">
        <NavLink to="/user">
          <img
            className="user-image"
            src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
            alt="default profile"
          />
        </NavLink>
        <div className="username-login">
          <p>UserName</p>
          {loggedIn ? (
            <NavLink to="/">
              <button>Log Out</button>
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
              to="/user"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
              User-info
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
