import React, { useState, useEffect } from 'react'
import './App.css'
import ReactPaginate from 'react-paginate'
import Products from './components/products/Products'
import productService from './services/product'
import Search from './components/Search'
import DropdownPrice from './components/DropdownPrice'

function App() {
  const [offset, setOffset] = useState(1)
  const [products, setProducts] = useState('')
  const [perPage] = useState(6)
  const [pageCount, setPageCount] = useState(0)
  const [search, setSearch] = useState('')
  const [price, setPrice] = useState('lowest')

  const getData = async () => {
    const data = await productService.getAll()

    const sortedDataByPrice = data.sort((a, b) => {
      if (price === 'lowest') {
        return a.price - b.price
      }
      return b.price - a.price
    })

    const filteredData = sortedDataByPrice.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase())
    })

    const indexOfLast = offset * perPage
    const indexOfFirst = indexOfLast - perPage
    // console.log(indexOfFirst, indexOfLast)
    const slice = filteredData.slice(indexOfFirst, indexOfLast)
    console.log(slice)
    setProducts(slice)
    setPageCount(Math.ceil(filteredData.length / perPage))
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, search, price])

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage + 1)
  }

  const handleSearch = (e) => {
    const input = e.target.value
    setSearch(input)
  }

  const handlePriceSelect = (e) => {
    const selected = e.target.value
    console.log(selected)
    setPrice(selected)
  }

  return (
    <div className="App">
      <DropdownPrice handlePriceSelect={handlePriceSelect} />
      <Search handleSearch={handleSearch} />
      <Products products={products} />
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

export default App
