import React from "react";
import { Card, Button } from 'reactstrap';

const Product = ({ id, name, imgURL, price }) => {
    return(
        <Card className="">
            <img src={imgURL} alt={name} />
            <div className="row">
            <div className="d-flex justify-content-between">
            <div><h2>{name}</h2></div>
            <h2 className="text-danger">$ {price}</h2>
            </div>
            </div>
            <p className="text-center"><Button outline color="primary" width="50">Add to Cart</Button></p>
        </Card>
    );
}
export default Product;