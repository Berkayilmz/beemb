import CampaignItem from "./campaignItem";
import "./campaigns.css";

const campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignItem />
          <CampaignItem />
        </div>
        <div className="campaigns-wrapper">
          <CampaignItem />
          <CampaignItem />
        </div>
      </div>
    </section>
  );
};

export default campaigns;
