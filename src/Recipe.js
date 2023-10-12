import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li key={title + Math.random()}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)} Calories</p>
    </div>
  );
};

export default Recipe;
