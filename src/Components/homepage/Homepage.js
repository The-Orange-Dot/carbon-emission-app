import React, { useEffect, useState } from "react";
// import WorldDataCard from "./WorldDataCard";
import "./Homepage.css";

function Homepage({ user }) {
  const [worldData, setWorldData] = useState([]);

  const totalFlightCarbon = user.flightHistory.reduce(
    (count, flight) => (count += flight.carbon_lb),
    0
  );

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
          <h1>Where do you rank in the world?</h1>
          <img src={user.image} alt="profile" className="user-profile-img" />
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h1>
            {user.flightHistory.length !== 0
              ? `${(Math.round(totalFlightCarbon * 100) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lbs`
              : 0}
          </h1>
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
