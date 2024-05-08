import React, { Fragment } from "react";
import "./categories.css";
import CategoryItem from "./categoryItem";

const categories = () => {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="section-title">
            <h2>All Categories</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <ul className="category-list">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </ul>
        </div>
      </section>
    </>
  );
};

export default categories;
export const ShopPage = () => {
  return (
    <Fragment>
      <Headers />
      <Categories />
    </Fragment>
  );
};
