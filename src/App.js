import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login";
import Homepage from "./Components/Homepage";
import About from "./Components/about/About";
import UserInfo from "./Components/userInfo/UserInfo";
import Welcome from "./Components/welcome/Welcome";
import NavBar from "./Components/navBar/NavBar";
import FlightEstimate from "./Components/FlightEstimate";

function App() {
  //Default if user isn't logged in
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    username: "Username",
    email: "",
    image:
      "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
    flightHistory: []
  });

  //Fetches User Data
  const userAPI = "http://localhost:3001/users";
  useEffect(() => {
    fetch(userAPI)
      .then((r) => r.json())
      .then((userData) => {
        setUser(userData[0]);
        setLoggedIn(true);
      });
  }, []);

  function handleFlightSaveClick(results) {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        flightHistory: [...user.flightHistory, results]
      })
    })
    .then(resp => resp.json())
    .then(userUpdate => setUser(userUpdate))
  }

  function handleFlightDelete(flight) {

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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user">
          <UserInfo user={user} onFlightDelete={handleFlightDelete}/>
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/flightestimate">
          <FlightEstimate onSaveDataClick={handleFlightSaveClick}/>
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
