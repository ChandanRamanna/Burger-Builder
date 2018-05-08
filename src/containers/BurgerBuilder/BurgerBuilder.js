import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 1.3,
    meat: 0.7
}

class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = { ... }
    // }

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalCost: 4,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState (ingredients) {
       
        const sum = Object.keys(ingredients)
            .map(idKey => {
                return ingredients[idKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            } ,0);
        this.setState ({purchasable: sum>0});
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalCost;
        const newPrice = oldPrice + priceAddition;
        this.setState ({totalCost: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalCost;
        const newPrice = oldPrice - priceDeduction;
        this.setState ({totalCost: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchasingHandler = () => {
        this.setState ({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState ({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert ('You Continue');
    }

    render () {
        const disabledIngredients = {
            ...this.state.ingredients
        }
        for (let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0
        }
        //{salad: true, meat: false ...}

        return (
            <Aux> 
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}> 
                    <OrderSummary 
                    ingredients = {this.state.ingredients}
                    price = {this.state.totalCost}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinue = {this.purchaseContinueHandler} 
                    />        
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls ingredientsAdded = {this.addIngredientsHandler}
                               ingredientsRemoved = {this.removeIngredientsHandler}
                               disabled = {disabledIngredients}
                               purchasable = {this.state.purchasable}
                               ordered = {this.purchasingHandler}
                               price = {this.state.totalCost}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;