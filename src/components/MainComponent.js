import React, { Component } from 'react';


import Header from "./HeaderComponent";
import Products from './ProductsComponent';

class Main extends Component {
    render(){
        return(
            <div className='bdy'><Header /><Products /></div>
        );
    };
}

export default Main;