import React from 'react'

const DropdownPrice = ({ handlePriceSelect }) => {
  return (
    <div className="uppercase mr-3">
      <span className="text-sm">Filter by price</span>
      <select className="uppercase ml-2 border-2 border-gray-300 bg-white px-3 py-1 pr-5 focus:outline-none" onChange={handlePriceSelect}>
        <option value="lowest" default>
          Lowest
        </option>
        <option value="highest">Highest</option>
      </select>
    </div>
  )
}

export default DropdownPrice
