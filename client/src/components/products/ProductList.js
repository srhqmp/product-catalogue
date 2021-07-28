import React from 'react'

const ProductList = ({ item }) => {
  return (
    <div className="card">
      <img className="product-image" src={item.image} alt="product" />
      <div className="details">
        <div className="product-name">{item.name}</div>
        <div className="product-price">{`AUD $${item.price}`}</div>
      </div>
    </div>
  )
} 

export default ProductList
