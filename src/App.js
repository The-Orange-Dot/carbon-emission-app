import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import UserInfo from "./Components/UserInfo/UserInfo";
import NavBar from "./Components/NavBar/NavBar";
import Estimate from "./Components/Emissions/Estimate";
import defaultImage from "./images/default-profile.png";

function App() {
  //Initial state
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
    electricityHistory: [],
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

  function handleDeleteData(location, item) {
    const filteredItems = user[location].filter(
      (data) => data.id !== item.id
    );

    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        [location]: filteredItems,
      }),
    });

    setUser({
      ...user,
      [location]: filteredItems,
    });
  }

  function handleSaveData(location, item) {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        [location]: [...user[location], item],
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
              onDeleteData={handleDeleteData}
            />
          )}
        />

        <Route
          path="/estimate"
          component={() => <Estimate onSaveData={handleSaveData} />}
        />
        <Route
          path="/"
          component={() => (
            <Homepage
              user={user}
              loggedIn={loggedIn}
              setUser={setUser}
              setLoggedIn={setLoggedIn}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
