import React, { Component } from 'react';
import CartItems from './CartItemsComponent';


import Header from "./HeaderComponent";
import Products from './ProductsComponent';

class Main extends Component {
    render(){
        return(
            <div className='bdy'><Header /><Products /> <CartItems /></div>
        );
    };
}

export default Main;