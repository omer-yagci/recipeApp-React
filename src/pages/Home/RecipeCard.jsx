import React from "react";
import classes from "../Home/recipe.module.scss";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const navigate = useNavigate();
  const viewClickHandler = () => {
    navigate("/details", { state: item });
  };

  console.log(item);
  const { image, label } = item;
  return (
    <>
      <div className={classes.card}>
        <h3>{label} </h3>
        <img src={image} alt={label} />
        <button onClick={viewClickHandler} className={classes.btn}>
          View More
        </button>
      </div>
    </>
  );
};

export default RecipeCard;
