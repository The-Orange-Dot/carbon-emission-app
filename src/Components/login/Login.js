import { useState } from "react";
import "./Login.css";
import NewAccountForm from "./NewAccountForm";
import GrayColor from "./GrayColor";
import { Link } from "react-router-dom";

function Login() {
  const [hideNewForm, setHideNewForm] = useState(true);

  return (
    <div className="App-header">
      <div className="login-page">
        <h1>Login Page</h1>

        <div className="login-container">
          <form action="" className="form-container">
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
