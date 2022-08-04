import Newsletter from "../../components/newsletter/Newsletter";
import Product from "../../components/product/Product";
import "./product-page.scss";
interface IProductPage {}

const ProductPage: React.FC<IProductPage> = () => {
  return (
    <div className="product-page">
      <Product />
      <Newsletter />
    </div>
  );
};

export default ProductPage;
