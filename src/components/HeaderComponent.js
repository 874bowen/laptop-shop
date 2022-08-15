import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { authActions } from '../store/AuthSlice';
import { cartActions } from '../store/CartSlice';
import Cart from './CartComponent';
const Header =  () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(authActions.logout());
    }
    return(
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div><h2>Redux Shopping APP</h2></div>
                <Cart />
                <Button onClick={logout}>Logout</Button>
            </div>
            
        </div>
    );
}
export default Header;