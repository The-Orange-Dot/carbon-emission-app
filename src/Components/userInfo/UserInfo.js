import NavBar from "../navBar/NavBar";
import "./UserInfo.css";

function UserInfo() {
  return (
    <div>
      <NavBar />
      <div className="user-page-container">
        <h1>User Info Page</h1>
        <p>a tab in NavBar?</p>
        <p>
          lists user info (name etc.) and history of emissions requests and
          summary of emissions use
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
