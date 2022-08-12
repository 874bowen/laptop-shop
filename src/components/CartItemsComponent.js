import React from "react";
import CartItem from "./CartItemComponent";

const CartItems = () => {
    return(
        <div className="container">
            <h2>Your Cart</h2>
            <ul>
                <li>
                    <CartItem id={1} price={2500} name={"MacBook"} />
                </li>
            </ul>
        </div>
    );
};

export default CartItems;