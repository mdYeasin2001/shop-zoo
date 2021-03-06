import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <div className="col sticky-top">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title text-center">Order Summary</h5>
                    <p>Total Item: {cart.length}</p>
                    <p>Total: {total}</p>
                </div>
                <div className="card-footer">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Cart;