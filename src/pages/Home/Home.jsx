import React from "react";
import classes from "../Home/home.module.scss";

const Home = () => {
  return (
    <div className={classes.container}>
      <h1>Food app</h1>
      <form className={classes.form}>
        <input type="text" />
        <button> Search</button>
        <select name="menuItem" id="menu">
          <option value="">Breakfast</option>
          <option value="">Lunch</option>
          <option value="">Dinner</option>
          <option value="">Snack</option>
          <option value="">TeaTime</option>
        </select>
      </form>
    </div>
  );
};

export default Home;
