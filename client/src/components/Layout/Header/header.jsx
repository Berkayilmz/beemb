import React from "react";
import "./header.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../context/cartProvider";
import { BiListUl } from "react-icons/bi";
import { BiSolidChevronDown } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);

  const { pathname } = useLocation();

  const handleSubmit = () => {
    setIsSearchShow(true);
  };

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL
            DELIVERY - OFF 50%!
            <a href="shop.html">SHOP NOW</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i>
                <BiListUl />
              </i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                LOGO
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      Home
                      <i>
                        <BiSolidChevronDown />
                      </i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Home Clean</a>
                        </li>
                        <li>
                          <a href="#">Home Collection</a>
                        </li>
                        <li>
                          <a href="#">Home Minimal</a>
                        </li>
                        <li>
                          <a href="#">Home Modern</a>
                        </li>
                        <li>
                          <a href="#">Home Parallax</a>
                        </li>
                        <li>
                          <a href="#">Home Strong</a>
                        </li>
                        <li>
                          <a href="#">Home Style</a>
                        </li>
                        <li>
                          <a href="#">Home Unique</a>
                        </li>
                        <li>
                          <a href="#">Home RTL</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${pathname === "/shop" && "active"
                        }`}
                    >
                      Shop
                      <i>
                        <BiSolidChevronDown />
                      </i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Shop Style
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Shop Standard</a>
                              </li>
                              <li>
                                <a href="#">Shop Full</a>
                              </li>
                              <li>
                                <a href="#">Shop Only Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop Image Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop Sub Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop List</a>
                              </li>
                              <li>
                                <a href="#">Hover Style 1</a>
                              </li>
                              <li>
                                <a href="#">Hover Style 2</a>
                              </li>
                              <li>
                                <a href="#">Hover Style 3</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Filter Layout
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Sidebar</a>
                              </li>
                              <li>
                                <a href="#">Filter Side Out</a>
                              </li>
                              <li>
                                <a href="#">Filter Dropdown</a>
                              </li>
                              <li>
                                <a href="#">Filter Drawer</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Shop Loader
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Shop Pagination</a>
                              </li>
                              <li>
                                <a href="#">Shop Infinity</a>
                              </li>
                              <li>
                                <a href="#">Shop Load More</a>
                              </li>
                              <li>
                                <a href="#">Cart Modal</a>
                              </li>
                              <li>
                                <a href="#">Cart Drawer</a>
                              </li>
                              <li>
                                <a href="#">Cart Page</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="/img/mega-menu.jpg" alt="" />
                          </a>
                          <h3 className="megamenu-single-title">
                            JOIN THE LAYERING GANG
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            Suspendisse faucibus nunc et pellentesque
                          </h4>
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${pathname === "/contact" && "active"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <i>
                <BiXCircle id="close-sidebar" />
              </i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i>
                    <IoPersonOutline />
                  </i>
                </Link>
                <button className="search-button" onClick={handleSubmit}>
                  <i>
                    <IoIosSearch />
                  </i>
                </button>
                <a href="#">
                  <i>
                    <IoMdHeartEmpty />
                  </i>
                </a>
                <div className="header-cart">
                <Link to={"/cart"} className="header-cart-link">
                    <i>
                      <BsCart2 />
                    </i>

                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
