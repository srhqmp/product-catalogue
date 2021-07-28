import React from 'react'

const DropdownCategory = ({handleCategorySelect, categories}) => {
  return (
    <div className="uppercase ml-3">
      <span className="text-sm">filter by type</span>
      <select className="uppercase ml-2 border-2 border-gray-300 bg-white px-3 py-1 pr-5 focus:outline-none" onChange={handleCategorySelect}>
      <option value="all" default>all</option>
        {categories.map((name, id) => <option key={id} value={name}>{name}</option>)}
      </select> 
    </div>
  )
}

export default DropdownCategory
