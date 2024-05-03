import campaignItem from "./campaignItem";
import "./campaigns.css";

const campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <campaignItem />
          <campaignItem />
        </div>
        <div className="campaigns-wrapper">
          <campaignItem />
          <campaignItem />
        </div>
      </div>
    </section>
  );
};

export default campaigns;