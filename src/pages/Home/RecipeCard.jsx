import React from "react";
import classes from "../Home/recipe.module.scss";

const RecipeCard = ({ item }) => {
  console.log(item);
  const { image, label } = item;
  return (
    <>
      <div className={classes.card}>
        <h3>{label} </h3>
        <img src={image} alt={label} />
        <button className={classes.btn}>View More</button>
      </div>
    </>
  );
};

export default RecipeCard;
