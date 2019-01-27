import React, { Component } from 'react';
import burgerIngredientStyle from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case 'bread-top':
                ingredient = 
                    <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientBreadTop}`}>
                        <span className={burgerIngredientStyle.seeds1}></span>
                        <span className={burgerIngredientStyle.seeds2}></span>
                        <span className={burgerIngredientStyle.seeds3}></span>
                    </div>;
                break;
            case 'salad':
                ingredient = <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientSalad}`}></div>;
                break;
            case 'cheese':
                ingredient = <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientCheese}`}></div>;
                break;
            case 'tomato':
                ingredient = <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientTomato}`}></div>;
                break;
            // case 'egg':
            //     ingredient = <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientEgg}`}></div>;
            //     break;
            case 'meat':
                ingredient = <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientMeat}`}></div>;
                break;
            case 'bread-bottom':
                ingredient = <div className={`${burgerIngredientStyle.ingredient} ${burgerIngredientStyle.ingredientBreadBottom}`}></div>;
                break;
            default:
                ingredient = null;
                break;
        }

        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;