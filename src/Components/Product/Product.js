import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
               <img src={img} alt=""/>
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon!</small></p>
                <button onClick={()=>props.hudlerAddProduct(props.product)} className='cart-button'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;