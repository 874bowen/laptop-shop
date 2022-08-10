import { Button } from 'reactstrap';
import React, { Component } from 'react';

const Cart =  () => {
    const quantity = 5;
    return(
        <div><Button outline color=''><h5>Cart: {quantity} items</h5></Button></div>
    );
}
export default Cart;