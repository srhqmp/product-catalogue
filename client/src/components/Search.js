import React from 'react'

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input className="product-search"
        onChange={handleSearch}
        placeholder="Search for items or brand"
      />
    </div>
  )
}

export default Search
