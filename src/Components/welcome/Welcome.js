import "./Welcome.css";
import { NavLink } from "react-router-dom";

function Welcome() {
  const linkStyle = {
    color: "black",
    backgrounColor: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div className="App-header">
      <NavLink exact to="/home" style={linkStyle}>
        <div className="welcome-container">
          <h1 className="welcome-text">Welcome to our emissions app!!</h1>
        </div>
      </NavLink>
    </div>
  );
}

export default Welcome;
