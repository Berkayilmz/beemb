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
import { IoExitOutline } from "react-icons/io5";

const header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"))
  const { pathname } = useLocation();

  const redirectToAdmin = () => {
    window.location.href = '/admin';
    setTimeout(() => {
      window.location.reload();
  }, 250);
};


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
                BEEMB
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
                      
                    </Link>
                    
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${pathname === "/shop" && "active"
                        }`}
                    >
                      Shop
                      
                    </Link>
                    
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

            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link
                  to={
                    user
                      ? user.role === 'admin'
                        ? '/admin' 
                        : `/users/${user.id}`
                      : '/auth'
                  }
                  className="header-account"
                  onClick={user && user.role === 'admin' ? redirectToAdmin : null}
                  >
                    
                  <i>
                    <IoPersonOutline />
                  </i>
                </Link>


                <button className="search-button" onClick={handleSubmit}>
                  <i>
                    <IoIosSearch />
                  </i>
                </button>
                {/* <a href="#">
                  <i>
                    <IoMdHeartEmpty />
                  </i>
                </a> */}
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
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"><IoExitOutline /></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
