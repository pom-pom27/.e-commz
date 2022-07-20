import Announcer from "../../components/announcer/Announcer";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import "./product-page.scss";
interface IProductPage {}

const ProductPage: React.FC<IProductPage> = () => {
  return (
    <div className="product-page">
      <Navbar />
      <Announcer />
      <Product />
      <Footer />
    </div>
  );
};

export default ProductPage;
