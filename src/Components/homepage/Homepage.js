import React, { useEffect, useState } from "react";
import WorldDataCard from "./WorldDataCard";
import "./Homepage.css";
import GrayColor from "../login/GrayColor";
import EmissionPage from "../EmissionPage";
import { NavLink } from "react-router-dom";

function Homepage({ user, loggedIn, setUser, setLoggedIn }) {
  const [worldData, setWorldData] = useState([]);
  const [hideNewForm, setHideNewForm] = useState(true);

  const totalFlightCarbon = user.flightHistory.reduce(
    (count, flight) => (count += flight.carbon_lb),
    0
  );

  const logoutHandler = () => {
    setUser({
      firstName: "",
      lastName: "",
      username: "Username",
      email: "",
      image:
        "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
    });
    setLoggedIn(false);
  };

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
      <div>
        <GrayColor setHideNewForm={setHideNewForm} hideNewForm={hideNewForm} />
        <EmissionPage hideNewForm={hideNewForm} />
      </div>
      <div className="homepage-container">
        <div className="user-data-container"></div>
        <div className="world-data-container">
          <div className="homepage-user-info">
            <h1>Where do you rank in the world?</h1>
            <div>
              <div className="profile-image">
                <NavLink to="/user">
                  <img
                    src={user.image}
                    alt="profile"
                    className="user-profile-img"
                  />
                </NavLink>
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                {loggedIn ? (
                  <NavLink to="/home">
                    <button onClick={logoutHandler}>Log Out</button>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <button>Log In</button>
                  </NavLink>
                )}
              </div>
              <div className="user">
                <h5>Total Carbon Footprint</h5>
                <h1>
                  {user.flightHistory.length !== 0
                    ? `${(Math.round(totalFlightCarbon * 100) / 100)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lbs`
                    : 0}
                </h1>
                <button onClick={() => setHideNewForm(false)}>
                  Add another thingy
                </button>
              </div>
            </div>
          </div>
          <div className="data">
            <h2>Average emission per country</h2>
            <WorldDataCard worldData={worldData} />
          </div>
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
