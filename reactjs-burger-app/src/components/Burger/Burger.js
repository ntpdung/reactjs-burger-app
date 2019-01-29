import React from 'react';
import burgerStyle from "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    var tranformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    return (
        <div className={burgerStyle.burger}>
            <BurgerIngredient type='bread-top' />
            {tranformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;