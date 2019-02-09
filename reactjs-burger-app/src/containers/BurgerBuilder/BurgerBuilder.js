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
            salad: 0,
            cheese: 0,
            tomato: 0,
            meat: 0,
        },
        totalPrice: 14,
        purchasable: false
    };

    updatePurchaseState = (ingredients) => {
        let purchasable, ingredientSum;
        purchasable = this.state.purchasable;

        ingredientSum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: ingredientSum > 0});
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
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
    };

    render () {
        let disabledInfo = { ...this.state.ingredients };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    labels={this.state.ingredients}
                    addedIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}/>
                <div style={{ clear: 'both' }}></div>
            </Aux>
        );
    };
};

export default BurgerBuilder;