import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
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
    axiosWithAuth()
      .post("login", state.credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.error(err.res));
  };
  return (
    <div>
      <h1>Bubble.Color</h1>
      <p>Bringing you the bubbles with the colors</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            placeholder="Lambda"
            value={state.credentials.username}
            onChange={handleChanges}
          />
          Username
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={state.credentials.password}
            onChange={handleChanges}
          />
          Password
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
