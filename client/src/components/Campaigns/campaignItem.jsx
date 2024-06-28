import "./campaignItem.css";
import { BiRightArrowAlt } from "react-icons/bi";

const campaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Fashion Month <br />
        Ready in Capital <br />
        Shop
      </h3>
      <p className="campaign-desc">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
      </p>
      <a href="shop" className="btn btn-primary">
        View All
        <i>
          <BiRightArrowAlt />
        </i>
      </a>
    </div>
  );
};

export default campaignItem;
