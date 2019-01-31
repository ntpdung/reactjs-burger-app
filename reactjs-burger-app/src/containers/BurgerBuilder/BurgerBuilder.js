import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import burgerStyle from "../../components/Burger/Burger.css";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import buildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 3
        }
    };

    render () {
        let buildControls = Object.keys(this.state.ingredients).map((ingredient) => {
            return <BuildControls label={ingredient} />
        });
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                { buildControls }
            </Aux>
        );
    };
};

export default BurgerBuilder;