import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Context as authContext } from "../context/authContext";
import "./signUpForm.css";
import { isAuthenticated } from "../middlewares/authMiddleware";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin, state } = useContext(authContext);

  if (isAuthenticated()) {
    return <Redirect to="/" />;
  }
  //   if (state.didRedirect) {
  //     return <Redirect to="/" />;
  //   }

  const handleSubmit = (event) => {
    event.preventDefault();
    signin({
      email: email,
      password: password,
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-style-6">
        <h1>Sign In Form</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button type="submit">Sign in</button>
        <div className="text-danger font-bold error ">
          {state.errorMessage ? <div>{state.errorMessage}</div> : null}
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
