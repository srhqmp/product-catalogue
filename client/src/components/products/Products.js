import React from 'react'
import './Products.css'

import ProductList from './ProductList'

const Products = ({ products }) => {
  return (
    <div>
      <div className="products">
        {products &&
          products.map((item) => <ProductList key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default Products
