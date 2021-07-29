import React from "react";

const DropdownPrice = ({ handlePriceSelect }) => {
  return (
    <div className="uppercase mr-3">
      <span className="text-sm">Filter by price</span>
      <select
        className="price-select"
        onChange={handlePriceSelect}
      >
        <option value="lowest" default>
          Lowest
        </option>
        <option value="highest">Highest</option>
      </select>
    </div>
  );
};

export default DropdownPrice;
