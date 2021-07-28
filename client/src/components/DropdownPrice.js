import React from 'react'

const DropdownPrice = ({ handlePriceSelect }) => {
  return (
    <div className="uppercase">
      Filter by price
      <select className="uppercase" onChange={handlePriceSelect}>
        <option value="lowest" default>
          Lowest
        </option>
        <option value="highest">Highest</option>
      </select>
    </div>
  )
}

export default DropdownPrice
