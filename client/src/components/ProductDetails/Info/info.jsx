import "./info.css";
import { BiGlobe } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../../context/cartProvider";
const info = ({ singleProduct }) => {

  const quantityRef = useRef();
  const {addToCart, cartItems} = useContext(CartContext)
  const [activeSize, setActiveSize] = useState('');
  const originalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;
  //indirim fiyatı
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;

  const filteredCart = cartItems.find((cartItem)=>{
    cartItem._id === singleProduct._id
  })

  const handleSizeClick = (size) => {
    setActiveSize(size);
};
console.log(singleProduct)
  return (
    <div className="product-info">
      <h1 className="product-title">{singleProduct.name}</h1>
      <div className="product-review">
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
            <GoStarFill />
            </i>
          </li>
        </ul>
        <span>{singleProduct.reviews.length} reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">${originalPrice}</s>
        <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
      </div>
      <p className="product-description"
        dangerouslySetInnerHTML={{ __html: singleProduct.description }}
      ></p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            <div className="colors-wrapper">
              {singleProduct.colors.map((color,index) => (
                <div className="color-wrapper" key={index}>
                  <label style={{
                    backgroundColor: `#${color}`,
                    border: '1px solid #ccc',
                  }}>
                    <input type="radio" name="product-color" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
                            {singleProduct.sizes.map((size, index) => (
                                <span
                                    key={index}
                                    className={`size ${activeSize === size ? 'active' : ''}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size.toUpperCase()}
                                </span>
                            ))}
                        </div>
          </div>
          <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" ref={quantityRef} />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
              disabled={filteredCart}
              onClick={()=>addToCart({
                ...singleProduct,
                price: discountedPrice,
                quantity: parseInt(quantityRef.current.value)
              })}
            >
              Add to cart
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i>
                <BiGlobe />
              </i>
              <span>Size Guide</span>
            </a>
            <a href="#">
              <i>
                <BiHeart />
              </i>
              <span>Add to Wislist</span>
            </a>
            <a href="#">
              <i>
                <BiShare />
              </i>
              <span>Share this Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories:</span>
          <strong>{singleProduct.category}</strong>
        </div>
        <div className="product-tags">
          <span>Tags:</span>
          <a href="#">black</a>,<a href="#">white</a>
        </div>
      </div>
    </div>
  );
};

export default info;
