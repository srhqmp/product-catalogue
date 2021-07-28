import React from 'react'

const ProductList = ({ item }) => {
  return (
    <div className="card bg-white rounded-md overflow-hidden shadow mt-8 w-card h-card relative">
      <img
        className="product-image w-full h-3/4 object-cover"
        src={item.image}
        alt="product"
      />
      <div className="details m-1 p-7">
        <div className="product-name font-normal">{item.name}</div>
        <div className="product-price font-medium">{`AUD $${item.price}`}</div>
      </div>
      <div className="bg-primary text-white text-xs uppercase py-1 px-3 absolute top-0 ml-5 mt-7">
        <span>SALE</span>
      </div>
    </div>
  )
}

export default ProductList
