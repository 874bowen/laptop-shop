import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from 'reactstrap';
import { cartActions } from "../store/CartSlice";

const Product = ({ id, name, imgURL, price }) => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(cartActions.increment());
    }
    return(
        <Card className="">
            <img src={imgURL} alt={name} />
            <div className="row">
            <div className="d-flex justify-content-between">
            <div><h2>{name}</h2></div>
            <h2 className="text-danger">$ {price}</h2>
            </div>
            </div>
            <p className="text-center"><Button outline color="primary" width="50" onClick={increment}>Add to Cart</Button></p>
        </Card>
    );
}
export default Product;