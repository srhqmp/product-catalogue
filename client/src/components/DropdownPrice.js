import React from 'react'

const DropdownPrice = ({ handlePriceSelect }) => {
  return (
    <div>
      <select onChange={handlePriceSelect}>
        <option value="lowest" default>
          Lowest
        </option>
        <option value="highest">Highest</option>
      </select>
    </div>
  )
}

export default DropdownPrice
