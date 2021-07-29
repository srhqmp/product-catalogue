import React from 'react'

import ProductList from './ProductList'

const Products = ({ products }) => {
  return (
    <div>
      <div className="products   w-full justify-items-center">
        {products &&
          products.map((item) => <ProductList key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default Products
