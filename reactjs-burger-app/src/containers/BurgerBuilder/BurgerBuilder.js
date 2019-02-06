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

    addIngredientHandler = (type) => {
        let oldIngredientCount, newIngredientCount, updatedIngredients, 
            oldPrice, newPrice, priceAddition;
        oldIngredientCount = this.state.ingredients[type];
        newIngredientCount = oldIngredientCount + 1;
        updatedIngredients = { 
            ...this.state.ingredients
        };
        
        priceAddition = INGREDIENTS_PRICE[type];
        oldPrice = this.state.totalPrice;
        newPrice = oldPrice + priceAddition;
        updatedIngredients[type] = newIngredientCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    };

    removeIngredientHandler = (type) => {
        let oldIngredientCount, newIngredientCount, updatedIngredients, updatedPrice,
            oldPrice, newPrice, priceDeduction;
        oldIngredientCount = this.state.ingredients[type];
        if (oldIngredientCount <= 0) {
            return false;
        }

        newIngredientCount = oldIngredientCount - 1;
        updatedIngredients = {
            ...this.state.ingredients
        };

        priceDeduction = INGREDIENTS_PRICE[type];
        oldPrice = this.state.totalPrice;
        newPrice = oldPrice - priceDeduction;
        updatedIngredients[type] = newIngredientCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    };

    render () {
        let style = {
            clear: "both"
        };
        
        return (
            <Aux>
                <p>{this.state.totalPrice}$</p>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    labels={this.state.ingredients}
                    addedIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}/>
                <div style={style}></div>
            </Aux>
        );
    };
};

export default BurgerBuilder;