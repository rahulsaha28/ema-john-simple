import React from 'react';

const Cart = (props) => {
    const cart = props.addedproduct;
    const totalPrice = cart.reduce((sum, eachCart)=>sum += eachCart.price, 0).toFixed(2);
    console.log(totalPrice);
    return (
        <div>
            <h3>Added item: {cart.length}</h3>
            <h2>Total Price:  ${totalPrice}</h2>
            {totalPrice>100? <h3>Shipping Cost: $500</h3>: <h3>Shipping Cost: ${totalPrice}</h3> }
        </div>
    );
};

export default Cart;