import "./About.css";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="about-container">
        <div className="about-card">
          <h1>About</h1>
          <p>description of app</p>
        </div>
        <div classname="developer-container"> 
          <AboutCard name="Katherine Roll"/>
          <AboutCard name="Eleni"/>
          <AboutCard name="Hung"/>
        </div>
    </div>
  );
}

export default About;
