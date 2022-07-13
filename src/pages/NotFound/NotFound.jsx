import React from "react";
import notFoundImage from "../../assets/notFound.png";
import { useNavigate } from "react-router-dom";
import classes from "../NotFound/notfound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h1>Something went Wrong!</h1>
      <img src={notFoundImage} alt="notFoundImage" />
      <div>
        <button onClick={() => navigate("/")}>Login</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
