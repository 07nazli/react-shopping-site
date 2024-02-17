import React from 'react'

const Cartitem = (props) => {
    const { id, productName, price, productImage } = props.data;

  return (
    <div className='cartItem'>
      <img  src={productImage}/>
      <div className='description'>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default Cartitem
