import React from 'react'

const DropdownCategory = ({handleCategorySelect, categories}) => {
  return (
    <div className="uppercase">
      filter by type
      <select className="uppercase" onChange={handleCategorySelect}>
      <option value="all" default>all</option>
        {categories.map((name, id) => <option key={id} value={name}>{name}</option>)}
      </select> 
    </div>
  )
}

export default DropdownCategory
