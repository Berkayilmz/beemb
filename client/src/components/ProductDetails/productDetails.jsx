import Breadcrumb from "./Breadcrumb/breadcrumb";
import "./productDetails.css";
import Gallery from "./Gallery/gallery";
import Info from "./Info/info";
import Tabs from "./Tabs/tabs";

const productDetails = ({singleProduct}) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct}/>
              <Info singleProduct={singleProduct}/>
            </main>
          </div>
          <Tabs singleProduct={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default productDetails;
