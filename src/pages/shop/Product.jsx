import React from 'react'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
  return (
    <div className='product'>
      <div className='description'>
      <img src={productImage} />
        <p>
            {productName}
        </p>
        <p> ${price}</p>
      </div>
      <button className='addToCartBttn'>Add To Cart</button>
    </div>
  )
}

export default Product
