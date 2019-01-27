import React from 'react';
import burgerStyle from "./Burger.css";
// import AUX from '../../hoc/aux'

const burger = (props) => {
    return (
        <div className={burgerStyle.burger}>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientBreadTop}`}></div>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientSalad}`}></div>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientCheese}`}></div>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientTomato}`}></div>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientEgg}`}></div>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientMeat}`}></div>
            <div className={`${burgerStyle.ingredient} ${burgerStyle.ingredientBreadBottom}`}></div>
        </div>
    );
};

export default burger;