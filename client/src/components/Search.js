import React from 'react'

const Search = ({ handleSearch }) => {
  return (
    <div className="product-search ml-6 lg:ml-0 lg:mr-2 pt-10">
      <input
        className="search-input"
        onChange={handleSearch}
        placeholder="Search for items or brand"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-searchIcon w-searchIcon relative right-9 top-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#464646"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default Search
