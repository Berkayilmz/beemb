import { Fragment } from "react";
import Header from "../components/Layout/Header/header";
import ProductDetails from "../components/ProductDetails/productDetails";
import Footer from "../components/Layout/Footer/footer";

const ProductDetailsPage = () => {
  return (
    <Fragment>
      <Header />
      <ProductDetails />
      <Footer />
    </Fragment>
  );
};

export default ProductDetailsPage;