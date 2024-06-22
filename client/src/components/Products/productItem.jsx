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
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const productItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem._id === productItem._id
  );

  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;
  //indirim fiyatı
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <Link to={`product/${productItem._id}`} className="product-link">
          <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
        </Link>
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
            ${discountedPrice.toFixed(2)}
          </strong>
          <span className="old-price">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">-{productItem.price.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() => addToCart({
              ...productItem,
              price: discountedPrice,
            }
            )}
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
