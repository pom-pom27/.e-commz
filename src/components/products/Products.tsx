import { popularProducts } from "../../dummyData";
import ProductItem from "../product-item/ProductItem";
import "./products.scss";
interface IProducts {}

const Products: React.FC<IProducts> = () => {
  return (
    <div className="products">
      {popularProducts.map((product) => (
        <ProductItem key={product.id} img={product.img} />
      ))}
    </div>
  );
};

export default Products;
