import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login";
import Homepage from "./Components/Homepage";
import About from "./Components/about/About";
import UserInfo from "./Components/userInfo/UserInfo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/user">
          <UserInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
