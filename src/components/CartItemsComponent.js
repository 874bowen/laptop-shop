import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItemComponent";

const CartItems = () => {
    const cartItems = useSelector(state => state.cart.itemsList);
    return(
        <div className="container">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <CartItem 
                            id={item.id}
                            quantity={item.quantity} 
                            price={item.price}  
                            name={item.name}
                            total={item.totalPrice} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;