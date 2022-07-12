import React from "react";
import classes from "../Home/home.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import About from "../About/About";

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [foodData, setFoodData] = useState([]);

  const APP_KEY = "f8357d5c64951a7fbf25700380c7c3e5";
  const APP_ID = "7589303c";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const selectHandler = (event) => {
    setMeal(event.target.value);
  };
  const clickHandler = () => {
    getDataFromAPI();
  };

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      console.log(data.hits);
      setFoodData(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, []);
  return (
    <div className={classes.container}>
      <h1>Food app</h1>
      <form className={classes.form}>
        <input type="text" onChange={inputHandler} value={query} />
        <button onClick={clickHandler}> Search</button>
        <select name="menuItem" id="menu" onChange={selectHandler}>
          <option value="">Breakfast</option>
          <option value="">Lunch</option>
          <option value="">Dinner</option>
          <option value="">Snack</option>
          <option value="">TeaTime</option>
        </select>
      </form>
      <RecipeCard foodData={foodData} />
    </div>
  );
};

export default Home;
