import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./styles/output.css";
import "./App.css";
import Products from "./components/products/Products";
import Search from "./components/Search";
import DropdownPrice from "./components/DropdownPrice";
import DropdownCategory from "./components/DropdownCategory";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import { data } from "./data";

const getCategories = (arr) => {
  let uniqueValues = [];
  arr.map(
    ({ category }) =>
      (uniqueValues = [...new Set(uniqueValues.concat(category))])
  );
  return uniqueValues;
};

const sortDataByPrice = (data, price) =>
  data.sort((a, b) =>
    price === "lowest" ? a.price - b.price : b.price - a.price
  );

const filterDataByCategory = (data, type) =>
  type === "all"
    ? data
    : data.filter(({ category }) => category.includes(type));

const filterDataByName = (data, nameToSearch) =>
  data.filter(({ name }) =>
    name.toLowerCase().includes(nameToSearch.toLowerCase())
  );

function App() {
  const [products, setProducts] = useState("");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("lowest");
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("all");
  const [offset, setOffset] = useState(1);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  const getData = () => {
    setCategories(getCategories(data.products));

    let filteredData = sortDataByPrice(data.products, price);
    filteredData = filterDataByCategory(filteredData, type);
    filteredData = filterDataByName(filteredData, search);

    const indexOfLast = offset * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const slice = filteredData.slice(indexOfFirst, indexOfLast);

    setProducts(slice);
    setPageCount(Math.ceil(filteredData.length / perPage));
  };

  useEffect(() => {
    getData();
  }, [offset, search, price, type]);

  const handlePageClick = ({ selected }) => setOffset(selected + 1);
  const handleSearch = ({ target }) => setSearch(target.value);
  const handlePriceSelect = ({ target }) => setPrice(target.value);
  const handleCategorySelect = ({ target }) => setType(target.value);

  return (
    <div className="App">
      <Banner />
      <div className="container mx-auto">
        <Search handleSearch={handleSearch} />
        <div className="featured-products">
          <h3 className="text-4xl font mb-4">Featured Products</h3>
          <div className="flex align-middle">
            <DropdownPrice handlePriceSelect={handlePriceSelect} />
            <DropdownCategory
              handleCategorySelect={handleCategorySelect}
              categories={categories}
            />
          </div>
        </div>

        <Products products={products} />
        <div className="pagination-container relative">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            className="pagination text-primary"
            pageLabelBuilder={(page) => `0${page}`}
            nextLinkClassName="next"
            previousLinkClassName="previous"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
