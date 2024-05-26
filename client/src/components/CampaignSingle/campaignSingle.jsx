import "./campaignSingle.css";
import { FaArrowRight } from "react-icons/fa6";

const campaignSingle = () => {
  return (
    <section className="campaign-single">
      <div className="container">
        <div className="campaign-wrapper">
          <h2>New Season Sale</h2>
          <strong>40% OFF</strong>
          <span></span>
          <a href="#" className="btn btn-lg">
            SHOP NOW
            <i>
              <FaArrowRight />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default campaignSingle;
