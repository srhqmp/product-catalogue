import React, { useState, useEffect } from "react";
import "./styles/output.css";
import "./App.css";
import ReactPaginate from "react-paginate";
import Products from "./components/products/Products";
// import productService from "./services/product";
import Search from "./components/Search";
import DropdownPrice from "./components/DropdownPrice";
import DropdownCategory from "./components/DropdownCategory";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { data } from "./data";

const getCategories = (arr) => {
  let uniqueValues = [];
  arr.map(
    ({ category }) =>
      (uniqueValues = [...new Set(uniqueValues.concat(category))])
  );
  return uniqueValues;
};

function App() {
  const [offset, setOffset] = useState(1);
  const [products, setProducts] = useState("");
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("lowest");
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("all");

  const getData = async () => {
    setCategories(getCategories(data.products));

    const sortedDataByPrice = data.products.sort((a, b) => {
      if (price === "lowest") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });

    const filteredDataByCategory =
      type === "all"
        ? sortedDataByPrice
        : sortedDataByPrice.filter(({ category }) => {
            return category.includes(type);
          });


    const filteredData = filteredDataByCategory.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });

    const indexOfLast = offset * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const slice = filteredData.slice(indexOfFirst, indexOfLast);
    setProducts(slice);
    setPageCount(Math.ceil(filteredData.length / perPage));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, search, price, type]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  const handlePriceSelect = (e) => {
    const selected = e.target.value;
    setPrice(selected);
  };

  const handleCategorySelect = (e) => {
    const selected = e.target.value;
    setType(selected);
  };

  return (
    <div className="App pt-11 pb-6 lg:px-16">
      <Banner />
      <div className="md:w-9/12 mx-auto">
        <Search handleSearch={handleSearch} />
        <div className="grid grid-cols-1 ml-3 lg:flex lg:justify-between lg:mx-7 mt-8">
          <h3 className="text-4xl font">Featured Products</h3>
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
