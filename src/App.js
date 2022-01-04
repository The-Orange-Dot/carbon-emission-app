import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login";
import Homepage from "./Components/homepage/Homepage";
import About from "./Components/about/About";
import UserInfo from "./Components/userInfo/UserInfo";
import Welcome from "./Components/welcome/Welcome";
import NavBar from "./Components/navBar/NavBar";
import Estimate from "./Components/Estimate";
import defaultImage from "./images/default-profile.png";

function App() {
  //Default if user isn't logged in
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    image: { defaultImage },
    flightHistory: [],
    shippingHistory: [],
    vehicleHistory: [],
  });

  //Fetches User Data
  const userAPI = "http://localhost:3001/users";
  useEffect(() => {
    let isAPISubscribed = true;
    fetch(userAPI)
      .then((r) => r.json())
      .then((userData) => {
        if (isAPISubscribed) {
          setUser(userData[1]);
          setLoggedIn(true);
        }
      });
    return () => {
      isAPISubscribed = false;
    };
  }, []);

  const handleFlightSaveClick = (results) => {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flightHistory: [...user.flightHistory, results],
      }),
    })
      .then((resp) => resp.json())
      .then((userUpdate) => setUser(userUpdate));
  };

  const handleFlightDelete = (flight) => {
    const filteredFlights = user.flightHistory.filter(
      (trip) => trip.id !== flight.id
    );

    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flightHistory: filteredFlights,
      }),
    });

    setUser({
      ...user,
      flightHistory: filteredFlights,
    });
  };

  const handleVehicleSaveClick = (vehicleResults) => {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicleHistory: [...user.vehicleHistory, vehicleResults],
      }),
    })
      .then((resp) => resp.json())
      .then((userUpdate) => setUser(userUpdate));
  };

  const handleVehicleDelete = (vehicle) => {
    const filteredVehicles = user.vehicleHistory.filter(
      (trip) => trip.id !== vehicle.id
    );

    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicleHistory: filteredVehicles,
      }),
    });

    setUser({
      ...user,
      vehicleHistory: filteredVehicles,
    });
  };

  function handleShippingSaveClick(shippingResults) {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shippingHistory: [...user.shippingHistory, shippingResults],
      }),
    })
      .then((resp) => resp.json())
      .then((userUpdate) => setUser(userUpdate));
  }

  return (
    <div className="App">
      <NavBar
        user={user}
        loggedIn={loggedIn}
        setUser={setUser}
        setLoggedIn={setLoggedIn}
      />
      <Switch>
        <Route
          path="/login"
          component={() => (
            <Login setUser={setUser} setLoggedIn={setLoggedIn} />
          )}
        />
        <Route path="/about" component={About} />
        <Route
          path="/user"
          component={() => (
            <UserInfo
              user={user}
              onFlightDelete={handleFlightDelete}
              onVehicleDelete={handleVehicleDelete}
            />
          )}
        />
        <Route
          path="/home"
          component={() => (
            <Homepage
              user={user}
              loggedIn={loggedIn}
              setUser={setUser}
              setLoggedIn={setLoggedIn}
            />
          )}
        />
        <Route
          path="/estimate"
          component={() => (
            <Estimate
              onSaveFlightClick={handleFlightSaveClick}
              onSaveVehicleClick={handleVehicleSaveClick}
              onSaveShippingClick={handleShippingSaveClick}
            />
          )}
        />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
