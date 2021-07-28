import React from 'react'

import ProductList from './ProductList'

const Products = ({ products }) => {
  return (
    <div>
      <div className="products grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((item) => <ProductList key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default Products
