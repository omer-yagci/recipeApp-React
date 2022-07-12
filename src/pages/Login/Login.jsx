import React, { useState } from "react";
import classes from "../Login/login.module.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.length <= 0 || password.length <= 0) {
      toast.warn(
        "Required fields cannot be left blank",
        { toastId: "asdasdasdasd" },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      navigate("/home");
    }
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
        {username.length <= 0 || password.length <= 0 ? (
          <button type="submit" style={{ color: "red" }}>
            Login
          </button>
        ) : (
          <button type="submit"> Login</button>
        )}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
