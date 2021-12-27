import NavBar from "./navBar/NavBar";
import Welcome from "./Welcome";

function Homepage() {
  return (
    <div>
      <NavBar />
      <div className="homepage-container">
        <Welcome />
      </div>
    </div>
  );
}

export default Homepage;
