import React from 'react';
import { List } from 'reactstrap';
import Product from './PraoductComponent';
import abcd from '../assets/laptops/abcd.jpg';
import b from '../assets/laptops/b.jpg';
import c from '../assets/laptops/c.jpg';
import d from '../assets/laptops/d.jpg';
import e from '../assets/laptops/e.jpg';
import f from '../assets/laptops/f.jpg';
import g from '../assets/laptops/g.jpg';
import h from '../assets/laptops/h.jpg';
import i from '../assets/laptops/i.jpg';
import j from '../assets/laptops/j.jpg';
import k from '../assets/laptops/k.jpg';

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "MacBook",
        imgURL: abcd,
        price: 25,
    },
    {
        id: 2,
        name: "HP Envy",
        imgURL: b,
        price: 85,
    },
    {
        id: 3,
        name: "Lenovo Thinkpad",
        imgURL: f,
        price: 39,
    },
    {
        id: 4,
        name: "HP Pavillion",
        imgURL: d,
        price: 40,
    },
    {
        id: 5,
        name: "LG FullHD",
        imgURL: i,
        price: 66,
    },
    {
        id: 6,
        name: "Dell Latitude",
        imgURL: h,
        price: 50,
    }
]

const Products = () => {
    return(
        <div className='mt-3 row'>
            {DUMMY_PRODUCTS.map((product, index) => (
                <div className='col-12 col-sm-6 col-md-4'>
                <List key={index}>
                    <Product
                     id={product.id}
                     name={product.name}
                     imgURL={product.imgURL}
                     price={product.price}/>
                </List>
                </div>
            ))}
        </div> 
    );
}

export default Products;