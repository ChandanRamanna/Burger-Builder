import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(idKey => {
            return (<li key={idKey}>
                        <span style = {{textTransform : 'capitalize'}}>{idKey}</span> : {props.ingredients[idKey]}
                    </li>)
        }) 

    return(
        <Aux>
            <h3> Your Order </h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
                <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
                <p>Continue to CheckOut ?</p>
                <Button btnType = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
                <Button btnType = "Success" clicked = {props.purchaseContinue}>CONTINUE</Button>
            </ul>
        </Aux>
    );
}

export default orderSummary 