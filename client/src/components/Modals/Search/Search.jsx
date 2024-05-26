import React from "react";
import "./Search.css";
import { IoIosSearch } from "react-icons/io";
import { BsXCircle } from "react-icons/bs";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  const handleSubmit = () => {
    setIsSearchShow(false);
  };

  return (
    <>
      <div className={`modal-search ${isSearchShow ? "show" : ""}`}>
        <div className="modal-wrapper">
          <h3 className="modal-title">Search for products</h3>
          <p className="modal-text">
            Start typing to see products you are looking for.
          </p>
          <form className="search-form">
            <input type="text" placeholder="Search a product" />
            <button>
              <i>
                <IoIosSearch style={{ color: "white" }} />
              </i>
            </button>
          </form>
          <div className="search-results">
            <div className="search-heading">
              <h3>RESULTS FROM PRODUCT</h3>
            </div>
            <div className="results">
              <a href="#" className="result-item">
                <img
                  src="img/products/product1/1.png"
                  className="search-thumb"
                  alt=""
                />
                <div className="search-info">
                  <h4>Analogue Resin Strap</h4>
                  <span className="search-sku">SKU: PD0016</span>
                  <span className="search-price">$108.00</span>
                </div>
              </a>
              <a href="#" className="result-item">
                <img
                  src="img/products/product2/1.png"
                  className="search-thumb"
                  alt=""
                />
                <div className="search-info">
                  <h4>Analogue Resin Strap</h4>
                  <span className="search-sku">SKU: PD0016</span>
                  <span className="search-price">$108.00</span>
                </div>
              </a>
            </div>
          </div>
          <i
            className="bi bi-x-circle"
            id="close-search"
            onClick={handleSubmit}
          >
            <BsXCircle />
          </i>
        </div>
        <div className="modal-overlay" onClick={handleSubmit}></div>
      </div>
    </>
  );
};

export default Search;
