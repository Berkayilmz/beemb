import React from "react";
import "./productItem.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/cartProvider";
import { GoStarFill } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsBasket2Fill } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { BsFillShareFill } from "react-icons/bs";

const productItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem.id === productItem.id
  );
  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img src={productItem.img.singleImage} alt="" className="img1" />
          <img src={productItem.img.thumbs[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {productItem.name}
        </a>
        <ul className="product-star">
          <li>
            <i>
              <GoStarFill />
            </i>
          </li>
          <li>
            <i>
              <GoStarFill />
            </i>
          </li>
          <li>
            <i>
              <GoStarFill />
            </i>
          </li>
          <li>
            <i>
              <GoStarFill />
            </i>
          </li>
          <li>
            <i>
              <FaRegStarHalfStroke />
            </i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">
            ${productItem.price.newPrice.toFixed(2)}
          </strong>
          <span className="old-price">
            ${productItem.price.oldPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">-{productItem.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCart(productItem)}
            disabled={filteredCart}
          >
            <i>
              <BsBasket2Fill />
            </i>
          </button>
          <button>
            <i>
              <GoHeartFill />
            </i>
          </button>
          <a href="#" className="product-link">
            <i>
              <AiFillEye />
            </i>
          </a>
          <a href="#">
            <i>
              <BsFillShareFill />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default productItem;

productItem.propTypes = {
  productItem: PropTypes.object,
  setCartItems: PropTypes.func,
};
