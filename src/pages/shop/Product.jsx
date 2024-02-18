import React, { useContext } from 'react'
import Shopcontext from '../../context/Shopcontext'

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(Shopcontext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt='productImage'/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={(e) => {
        addToCart(id);
        }}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>

    </div>
  );
}

export default Product
