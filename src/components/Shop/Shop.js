import React from 'react';
import {useState} from 'react';
import fakeData  from '../../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstData10 = fakeData.slice(0,10);
    const [products, setproducts] = useState(firstData10);
    const [cart, setcart] = useState([]);

    const handelProduct = (product)=>{
      let newCart = [...cart, product];
      setcart(newCart);
    }
    // console.log(products);
    return (
      <div className="shop-container">
          <div className="product-container">
            
               {products.map(product=><Product key={product.key} product={product} handelAddProduct={handelProduct}/>)}
            
          </div>
          <div className="card-container">
               <Cart addedproduct = {cart}/>

          </div>

      </div>
    );
};

export default Shop;