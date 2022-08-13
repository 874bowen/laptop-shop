import { Button } from 'reactstrap';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart =  () => {
    const quantity = useSelector((state) => state.cart.totalQuantity);
    
    return(
        <div><Button outline color=''><h5>Cart: {quantity} items</h5></Button></div>
    );
}
export default Cart;