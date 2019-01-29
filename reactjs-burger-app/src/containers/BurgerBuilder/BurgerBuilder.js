import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import burgerStyle from "../../components/Burger/Burger.css";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            meat: 2,
            salad: 2
        }
    };

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    };
};

export default BurgerBuilder;