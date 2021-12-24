import NavBar from "./navBar/NavBar";
import About from "./about/About";
import Welcome from "./Welcome";
import UserInfo from "./UserInfo";

function Homepage() {
  return (
    <div>
      <NavBar />
      <About />
      <UserInfo />
      <Welcome />
    </div>
  );
}

export default Homepage;
