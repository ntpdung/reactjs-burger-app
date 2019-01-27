import React from 'react';
import burgerStyle from "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    return (
        <div className={burgerStyle.burger}>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='tomato' />
            {/* <BurgerIngredient type='egg' /> */}
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;