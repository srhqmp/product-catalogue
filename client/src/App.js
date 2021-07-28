import React, { useState, useEffect } from 'react'
import './styles/output.css'
import ReactPaginate from 'react-paginate'
import Products from './components/products/Products'
import productService from './services/product'
import Search from './components/Search'
import DropdownPrice from './components/DropdownPrice'
import DropdownCategory from './components/DropdownCategory'
import Footer from './components/Footer'

const getCategories = (data) => {
  let uniqueValues = []
  data.map(
    ({ category }) =>
      (uniqueValues = [...new Set(uniqueValues.concat(category))])
  )
  return uniqueValues
}

function App() {
  const [offset, setOffset] = useState(1)
  const [products, setProducts] = useState('')
  const [perPage] = useState(6)
  const [pageCount, setPageCount] = useState(0)
  const [search, setSearch] = useState('')
  const [price, setPrice] = useState('lowest')
  const [categories, setCategories] = useState([])
  const [type, setType] = useState('all')

  const getData = async () => {
    const data = await productService.getAll()
    setCategories(getCategories(data))

    const sortedDataByPrice = data.sort((a, b) => {
      if (price === 'lowest') {
        return a.price - b.price
      }
      return b.price - a.price
    })

    const filteredDataByCategory =
      type === 'all'
        ? sortedDataByPrice
        : sortedDataByPrice.filter(({ category }) => {
            console.log(type)
            return category.includes(type)
          })

    console.log('category:', filteredDataByCategory)

    const filteredData = filteredDataByCategory.filter(({ name }) => {
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
  }, [offset, search, price, type])

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

  const handleCategorySelect = (e) => {
    const selected = e.target.value
    console.log(selected)
    setType(selected)
  }

  return (
    <div className="App">
      <div className="banner">
        <h2 className="banner-text">
          The perfect outfit for summer
        </h2>
      </div>
      <Search handleSearch={handleSearch} />
      <div className="flex justify-between">
        <h3 className="text-2xl">Featured Products</h3>
        <div className="flex align-middle">
          <DropdownCategory
            handleCategorySelect={handleCategorySelect}
            categories={categories}
          />
          <DropdownPrice handlePriceSelect={handlePriceSelect} />
        </div>
      </div>

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
      <Footer />
    </div>
  )
}

export default App
