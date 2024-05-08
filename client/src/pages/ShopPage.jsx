import { Fragment } from "react";
import Header from '../components/Layout/Header/header';
import Categories from "../components/Categories/categories";
import Products from "../components/Products/products";
import CampainSingle from "../components/CampaignSingle/campaignSingle"
import Footer from "../components/Layout/Footer/footer"

const ShopPage = () => {
  return (
    <Fragment>
      <Header />
      <Categories />
      <Products />
      <CampainSingle />
      <Products />
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
