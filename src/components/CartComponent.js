import { Button } from 'reactstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlice';

const Cart =  () => {
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const showCart = () => {
        dispatch(cartActions.showCart());
    }
    return(
        <div><Button outline color='' onClick={ showCart }><h5>Cart: {quantity} items</h5></Button></div>
    );
}
export default Cart;