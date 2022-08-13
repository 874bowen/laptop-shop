import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { Button } from "reactstrap";
import { cartActions } from "../store/CartSlice";
const CartItem = ({id, name, quantity, total, price}) => {
    const dispatch = useDispatch();
    const addHandler = () => {
        dispatch(cartActions.addToCart({id, name, price}));
    }
    const removeHandler = () => {
        dispatch(cartActions.removeItem({id}));
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col-4"><p><h2>{name}</h2></p></div>
                <div className="col-2"><p>${price}</p></div>
                <div className="col-2"><p>x{quantity}</p></div>
                <div className="col-2"><article>Total ${total}</article></div>
                <div className="col-1">
                    <Button onClick={removeHandler}>-</Button></div>
                    <div className="col-1"><Button onClick={addHandler}>+</Button>
                </div>
            </div>
        </div>
    );    
};

export default CartItem