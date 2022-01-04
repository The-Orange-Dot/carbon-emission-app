import "./About.css";
import AboutCard from "./AboutCard";
import eleni from "../../images/creators/eleni.jpg";
import hung from "../../images/creators/hung.jpg";
import filler from "../../images/default-profile.png";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-card">
          <h1>About [insert-app-name]</h1>
          <br />
          <p>
            [insert-app-name] was created to give users a fun and easy way to
            get a snapshot of their personal carbon footprint. The app takes a
            look at some of the most common carbon emitting activities and
            provides user the ability to fill in their personal details and
            receive an estimate of carbon emissions based on data provided by
            the <strong>Carbon Interface REST API</strong>. The data that powers
            the API is sourced from governments, non-profits, and leading
            researchers around the world including the <strong>EPA</strong>,{" "}
            <strong>GHG Protocol</strong>, and{" "}
            <strong>Environment Canada</strong>. The app is designed to create
            awareness by powering carbon measurement to combat climate change.
          </p>
        </div>
        <div className="creators-card">
          <AboutCard
            name="Katherine Roll"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={filler}
          />
          <AboutCard
            name="Eleni Papanicolas"
            info="For the past 16 years Eleni called various restaurants home. When the pandemic hit, and restaurants closed down, she had an unusual opportunity to use her newfound free time to learn something new. She started taking coding courses and was totally hooked on creating cool stuff from scratch. It was then that she decided that this was something she wanted to pursue full time. Eleni is currently a software engineering student at Flatiron School and she likes building things that are accessible, inclusive, responsive and dynamic."
            image={eleni}
          />
          <AboutCard
            name="Hung Le"
            info="Graduating with a degree in Fine Arts, Hung's passion had always been to create. Soon after graduating, he left the traditional creative field to live and work in Tokyo, Japan. For the past 11 years, he has continued his studies from Japan seeking opportunities to challenge himself and continue his education. With his passion to create still lingering, and the growing creative tech field continuing to grow, Hung joined FlatIron School's software engineer bootcamp to pursue full-time work as a full-stack software developer."
            image={hung}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
