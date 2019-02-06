import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import burgerStyle from "../../components/Burger/Burger.css";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import buildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: 1,
    cheese: 2,
    tomato: 1,
    meat: 2,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            tomato: 1,
            meat: 2,
        },
        totalPrice: 14
    };

    addedIngredientHandler = (type) => {
        let oldIngredientCount, newIngredientCount, updatedIngredients, updatedPrice;
        oldIngredientCount = this.state.ingredients[type];
        newIngredientCount = oldIngredientCount + 1;
        updatedIngredients = { 
            ...this.state.ingredients
        };
        updatedIngredients[type] = newIngredientCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
    };

    render () {
        let style = {
            clear: "both"
        };
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    labels={this.state.ingredients}
                    addedIngredient={this.addedIngredientHandler}/>
                <div style={style}></div>
            </Aux>
        );
    };
};

export default BurgerBuilder;