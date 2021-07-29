import React from 'react'

const ProductList = ({ item }) => {
  return (
    <div className="card md:w-10/12">
      <img
        className="product-image"
        src={item.image}
        alt="product"
      />
      <div className="details">
        <div className="font-normal">{item.name}</div>
        <div className="font-medium">{`AUD $${item.price}`}</div>
      </div>
      <div className="badge">
        <span>SALE</span>
      </div>
    </div>
  )
}

export default ProductList
