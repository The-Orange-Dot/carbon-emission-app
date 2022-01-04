import "./About.css";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About [insert-app-name]</h1>
        <br />
        <p>[insert-app-name] was created to give users a fun and easy way to get a snapshot of their personal carbon footprint. 
          The app takes a look at some of the most common carbon emitting activities and provides user the ability to fill in their 
          personal details and receive an estimate of carbon emissions based on data provided by the <strong>Carbon Interface REST API</strong>. 
          The data that powers the API is sourced from governments, non-profits, and leading researchers around the world including 
          the <strong>EPA</strong>, <strong>GHG Protocol</strong>, and <strong>Environment Canada</strong>. The app is designed to create awareness by powering carbon measurement to 
          combat climate change.</p>
      </div>
      <div className="">
        <AboutCard name="Katherine Roll" 
        info=""
        />
        <AboutCard name="Eleni Papanicolas" 
          info="For the past 16 years Eleni called various restaurants home. When the pandemic hit, and restaurants closed down, she had an unusual opportunity to use her newfound free time to learn something new. She started taking coding courses and was totally hooked on creating cool stuff from scratch. It was then that she decided that this was something she wanted to pursue full time. Eleni is currently a software engineering student at Flatiron School and she likes building things that are accessible, inclusive, responsive and dynamic."
          />
        <AboutCard name="Hung Le"
        info=""
        />
      </div>
    </div>
  );
}

export default About;
