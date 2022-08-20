import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import CartItems from './CartItemsComponent';
import FeedbackForm from './formComponent';


import Header from "./HeaderComponent";
import Products from './ProductsComponent';

const Main = () => {
    const showCart = useSelector(state => state.cart.showCart);
    let total = 0;
    const itemsList = useSelector(state => state.cart.itemsList);
    itemsList.forEach(element => {
        total += element.totalPrice;
    });
        return(
            <div className='bdy'>
                <Header />
                <Products />
                { showCart && <CartItems /> }
                <div className='container text-right'>
                    <h3>Total: ${total}</h3>
                    <Button>Place Order</Button>
                </div>
                <FeedbackForm />
            </div>
        );
};

export default Main;