import React, { useContext } from "react";
import { Context as authContext } from "../context/authContext";

const Test = () => {
  const { signup } = useContext(authContext);

  return (
    <>
      <h1>button</h1>
      <button onClick={signup}>button name</button>
    </>
  );
};

export default Test;
