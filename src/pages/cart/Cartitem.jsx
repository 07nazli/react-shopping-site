import React, { useContext } from 'react'
import Shopcontext from '../../context/Shopcontext'

const Cartitem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(Shopcontext);

  return (
    <div className='cartItem'>
      <img  src={productImage} alt='productImage'/>
      <div className='description'>
        <p>{productName}</p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
