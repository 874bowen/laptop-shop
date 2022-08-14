import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItemsComponent';


import Header from "./HeaderComponent";
import Products from './ProductsComponent';

const Main = () => {
    const showCart = useSelector(state => state.cart.showCart);
        return(
            <div className='bdy'>
                <Header />
                <Products />
                { showCart && <CartItems /> }
            </div>
        );
};

export default Main;