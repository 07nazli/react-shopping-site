import React, { useContext } from 'react'
import PRODUCTS from '../../Products'
import Shopcontext from '../../context/Shopcontext'
import Cartitem from './Cartitem';
import './Cart.css'


const Cart = () => {
  const { cartItems } = useContext(Shopcontext);
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
        })}
      </div>
    </div>
  )
}

export default Cart