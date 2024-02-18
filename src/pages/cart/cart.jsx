import React, { useContext } from 'react'
import PRODUCTS from '../../Products'
import Shopcontext from '../../context/Shopcontext'
import Cartitem from './Cartitem';
import './Cart.css'

import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(Shopcontext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((Product) => {
          if(cartItems[Product.id] !== 0 ) {
            return <Cartitem key={Product.id} data={Product}/>
          }
          return null;
        })}
      </div>

      <div className='checkout'>

        <p> Subtotal:  ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout  </button>
      </div>
    </div>
  )
}

export default Cart