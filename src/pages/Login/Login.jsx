import React, { useState } from "react";
import classes from "../Login/login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className={classes.container}>
      <h2>Welcome</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button> Login</button>
      </form>
    </div>
  );
};

export default Login;
