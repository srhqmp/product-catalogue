import React, { useState, useEffect } from 'react'
import './Products.css'

import ProductList from './ProductList'
import productService from '../../services/product'

const Products = () => {
  const [products, setProducts] = useState('')

  useEffect(() => {
    productService.getAll().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className="products">
      {products &&
        products.map((item) => <ProductList key={item.id} item={item} />)}
    </div>
  )
}

export default Products
