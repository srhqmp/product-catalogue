import React from "react";

const DropdownCategory = ({ handleCategorySelect, categories }) => {
  return (
    <div className="uppercase md:ml-7">
      <span className="text-sm">filter by type</span>
      <select className="category-select" onChange={handleCategorySelect}>
        <option value="all" default>
          all
        </option>
        {categories.map((name, id) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownCategory;
