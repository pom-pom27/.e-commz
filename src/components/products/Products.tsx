import { popularProducts } from "../../dummyData";
import ProductItem from "../product-item/ProductItem";
import "./products.scss";
interface IProducts {
  withTitle?: string;
}

const Products: React.FC<IProducts> = ({ withTitle }) => {
  return (
    <div className="products">
      {withTitle && <h2 className="products-title">{withTitle}</h2>}
      {popularProducts.map((product) => (
        <ProductItem key={product.id} img={product.img} />
      ))}
    </div>
  );
};

export default Products;
