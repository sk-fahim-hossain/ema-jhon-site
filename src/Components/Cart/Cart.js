import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    const total = cart.reduce((total,prd) => total + prd.price ,0)

    const formatNumber = nm => {
        const precision = nm.toFixed(2);
        return Number(precision);
    }
    const tax = total / 15;

    return (
        <div>
            <h4>order summury</h4>
            <h5>Items ordered:{cart.length}</h5>
            <p><small>Tax:{formatNumber(tax)}$</small></p>
            <p>Total:{formatNumber(total + tax)}$</p>
        </div>
    );
};

export default Cart;