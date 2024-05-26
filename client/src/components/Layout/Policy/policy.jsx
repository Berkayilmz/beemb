import React from "react";
import "./policy.css";
import { BiSolidTruck } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";
import { BsCreditCard2FrontFill } from "react-icons/bs";
const policy = () => {
  return (
    <>
      <section className="policy">
        <div className="container">
          <ul className="policy-list">
            <li className="policy-item">
              <i>
                <BiSolidTruck />
              </i>
              <div className="policy-texts">
                <strong>FREE DELIVERY</strong>
                <span>From $59.89</span>
              </div>
            </li>
            <li className="policy-item">
              <i>
                <FaHeadset />
              </i>
              <div className="policy-texts">
                <strong>SUPPORT 24/7</strong>
                <span>Online 24 hours</span>
              </div>
            </li>
            <li className="policy-item">
              <i>
                <BsArrowClockwise />
              </i>
              <div className="policy-texts">
                <strong> 30 DAYS RETURN</strong>
                <span>Simply return it within 30 days</span>
              </div>
            </li>
            <li className="policy-item">
              <i>
                <BsCreditCard2FrontFill />
              </i>
              <div className="policy-texts">
                <strong> PAYMENT METHOD</strong>
                <span>Secure Payment</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default policy;
