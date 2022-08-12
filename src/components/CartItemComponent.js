import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { Button, Article } from "reactstrap";
const CartItem = ({name, quantity, total, price}) => {
    const removeHandler = () => {};
    const addHandler = () => {};
    return(
        <div className="container">
            <h2>{name}</h2>
            <p>${price}</p>
            <p>x{quantity}</p>
            <Article>Total ${total}</Article>
            <Button onClick={removeHandler}>-</Button>
            <Button onClick={addHandler}>+</Button>
        </div>
    );    
};

export default CartItem