import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });
  const handleChanges = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Bubble.Color</h1>
      <p>Bringing you the bubbles with the colors</p>
      <form>
        <label>
          <input
            type="text"
            name="username"
            placeholder="Lambda School"
            value={handleChanges}
          />
          Username
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="i<3Lambd4"
            value={handleChanges}
          />
          Password
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
