import { useState } from "react";
import "./Login.css";
import NewAccountForm from "./NewAccountForm";
import GrayColor from "./GrayColor";
import { Link, useHistory } from "react-router-dom";

function Login({ setUser, setLoggedIn }) {
  const [hideNewForm, setHideNewForm] = useState(true);
  const history = useHistory();
  const [failedLogin, setFailedLogin] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    fetch("http://localhost:3001/users")
      .then((r) => r.json())
      .then((userData) => {
        const loginUser = userData.find(
          (username) =>
            username.username.toLowerCase() === event.target[0].value &&
            username.password === event.target[1].value
        );
        if (loginUser) {
          setUser(loginUser);
          setLoggedIn(true);
          setFailedLogin(false);
          history.push("/home");
        } else {
          setUser(userData[0]);
          setLoggedIn(false);
          setFailedLogin(true);
          history.push("/login");
        }
      });
  };

  return (
    <div className="App-header">
      <div className="login-page">
        <h1>Login Page</h1>
        {failedLogin ? (
          <p className="failed-login-notification">
            Invalid Username or Password
          </p>
        ) : null}
        <div className="login-container">
          <form
            action=""
            className="form-container"
            onSubmit={(e) => loginHandler(e)}
          >
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="passsword" placeholder="Password" />
            <input type="submit" name="submit" value="Login" />
          </form>
          <button onClick={() => setHideNewForm(false)}>
            Register new accout
          </button>
          <Link to="/home">
            <button>Go back</button>
          </Link>
        </div>
      </div>
      <NewAccountForm hideNewForm={hideNewForm} />
      <GrayColor setHideNewForm={setHideNewForm} hideNewForm={hideNewForm} />
    </div>
  );
}

export default Login;
