import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login";
import Homepage from "./Components/Homepage";
import About from "./Components/about/About";
import UserInfo from "./Components/userInfo/UserInfo";
import Welcome from "./Components/welcome/Welcome";
import NavBar from "./Components/navBar/NavBar";

function App() {
  //Default if user isn't logged in
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "Username",
    email: "",
    image:
      "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",
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
          <UserInfo />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
