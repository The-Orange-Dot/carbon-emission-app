import React, { useEffect, useState } from "react";
// import WorldDataCard from "./WorldDataCard";
import "./Homepage.css";

function Homepage() {
  const [worldData, setWorldData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/countryAverageCapita")
      .then((r) => r.json())
      .then((data) => setWorldData(data));
  }, []);

  const iframeStyle = {
    width: "50%",
    height: "600px",
    border: "0px none",
  };

  return (
    <div>
      <div className="homepage-container">
        <div className="user-data-container"></div>
        <div className="world-data-container">
          <h2>Where do you rank in the world?</h2>

          {/* <WorldDataCard worldData={worldData} /> */}
        </div>
        <iframe
          src="https://ourworldindata.org/grapher/per-capita-co2-aviation-adjusted"
          loading="lazy"
          style={iframeStyle}
          title="ourWorldInData"
        ></iframe>
      </div>
    </div>
  );
}

export default Homepage;
