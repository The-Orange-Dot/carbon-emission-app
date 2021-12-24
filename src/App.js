import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
