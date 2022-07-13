import React from "react";
import classes from "../Home/home.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import fecthGif from "../../assets/loading.gif";

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [foodData]);

  // import key and id
  const APP_KEY = "f8357d5c64951a7fbf25700380c7c3e5";
  const APP_ID = "7589303c";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  // Handler Events

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const selectHandler = (event) => {
    setMeal(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    getDataFromAPI();
    setQuery("");
  };

  // Fetch data from API

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(url);

      console.log(data);
      setFoodData(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  //  Loagind Check

  if (loading) {
    return (
      <div className={classes["gif-container"]}>
        <img className={classes.gif} src={fecthGif} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <div className={classes.container}>
          <h1>Food app</h1>
          <form className={classes.form} onSubmit={SubmitHandler}>
            <input type="text" onChange={inputHandler} value={query} />
            <button> Search</button>
            <select
              name="menuItem"
              id="menu"
              onChange={selectHandler}
              defaultValue={"breakfast"}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="teatime">TeaTime</option>
            </select>
          </form>
        </div>
        <div className={classes["card-container"]}>
          {foodData?.map((item, index) => {
            return <RecipeCard key={index} item={item.recipe} />;
          })}
        </div>
      </>
    );
  }
};

export default Home;
