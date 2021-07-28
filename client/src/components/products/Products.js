import React, { useState, useEffect } from 'react'
import './Products.css'


import ProductList from './ProductList'
import productService from '../../services/product'

const Products = () => {
  const [offset, setOffset] = useState(1)
  const [products, setProducts] = useState('')
  const [perPage] = useState(6)
  const [pageCount, setPageCount] = useState(0)

  const getData = async () => {
    const data = await productService.getAll()
    const indexOfLast = offset * perPage
    const indexOfFirst = indexOfLast - perPage
    console.log(indexOfFirst, indexOfLast)
    const slice = data.slice(indexOfFirst, indexOfLast)
    console.log(slice)
    setProducts(slice)
    setPageCount(Math.ceil(data.length / perPage))
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage + 1)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  return (
    <div>
      <div className="products">
        {products &&
          products.map((item) => <ProductList key={item.id} item={item} />)}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        className="pagination"
      />
    </div>
  )
}

export default Products
