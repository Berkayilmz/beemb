import React from 'react';
import { Link } from 'react-router-dom';
import './categoryItem.css';

const CategoryItem = ({ category }) => {
  return (
    <li className="category-item">
      <Link to={`/category/${category._id}`}>
        <img src={category.img} alt="" className="category-image" />
        <span className="category-title">{category.name}</span>
      </Link>
    </li>
  );
};

export default CategoryItem;
