import React from 'react'

const ProductList = ({ item }) => {
  return (
    <div className="card">
      <img className="product-image" src={item.image} alt="product" />
      <div className="details">
        <div className="product-name font-normal">{item.name}</div>
        <div className="product-price font-medium">{`AUD $${item.price}`}</div>
      </div>
    </div>
  )
} 

export default ProductList
