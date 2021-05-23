import React, { useState, useContext } from "react";
import "./signUpForm.css";
import { Context as authContext } from "../context/authContext";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../middlewares/authMiddleware";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, state } = useContext(authContext);

  // if (state.didRedirect) {
  //   return <Redirect to="/" />;
  // }
  if (isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-style-6">
      <h1>Sign Up Form</h1>

      <input
        type="text"
        placeholder="First Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Last Name(optional)"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() =>
          signup({
            name: name,
            lastname: lastname,
            email: email,
            password: password,
          })
        }
      >
        submit
      </button>
      <div className="text-danger font-bold error ">
        {state.errorMessage ? <div>{state.errorMessage}</div> : null}
      </div>
    </div>
  );
}
