import "./Login.css";

const NewAccountForm = ({ hideNewForm }) => {
  return (
    <div className={hideNewForm ? "hidden" : "new-account-form-container"}>
      <h1>Register a new account!</h1>
      <div className="register-form-container">
        <form action="" className="register-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input type="submit" name="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewAccountForm;
