import React, { Component } from 'react';
import Cart from './CartComponent';
const Header =  () => {
    return(
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div><h2>Redux Shopping APP</h2></div>
                <Cart />
            </div>
            
        </div>
    );
}
export default Header;