import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import classes from "../Details/details.module.scss";

const Details = () => {
  const location = useLocation();

  const item = location.state;
  const { ingredients } = item;
  console.log(ingredients);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{item.label} </h1>
      <div className={classes["image-container"]}>
        <img className={classes.image} src={item.image} alt={item.label} />
      </div>
      <section>
        <ul>
          <h3>Nutriens</h3>
          <li>
            {item.digest[5].label} :
            <span> {item.digest[5].total.toFixed(1)}g</span>
          </li>
          <li>
            {item.digest[1].label} :
            <span> {item.digest[1].total.toFixed(1)}g</span>
          </li>
          <li>
            {item.digest[3].label} :
            <span> {item.digest[3].total.toFixed(1)}mg</span>
          </li>
          <li>
            {item.totalDaily.ENERC_KCAL.label} :
            <span> {item.totalDaily.ENERC_KCAL.quantity.toFixed(1)} kcal</span>
          </li>
          <li>Calories :{item.calories.toFixed(0)}</li>
          <li>
            {item.digest[0].label} :
            <span> {item.digest[0].total.toFixed(1)} </span>
          </li>
          <li>
            {item.digest[2].label} :
            <span> {item.digest[2].total.toFixed(1)} </span>
          </li>
        </ul>
      </section>
      <article>
        {ingredients.map((element) => {
          return <p>{element.text}</p>;
        })}
      </article>
    </div>
  );
};

export default Details;
