import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import  "./Product.css";

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    
    
    return (
        <div className="product">
            <div className="col-2">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h5>{name}</h5>
                <br/>
                <p>By:{seller}</p>
                <br/>
                <p>Stock: {stock}</p>
                <br/>
                <p>Price: $ {price}</p>
                <button className="btn" onClick={()=>{
                    props.handelAddProduct(props.product);
                }}>
                <FontAwesomeIcon icon={faBriefcase} /> 
                Add to Card</button>
            </div>
        </div>
    );
};

export default Product;