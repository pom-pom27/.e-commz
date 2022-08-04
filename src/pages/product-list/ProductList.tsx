import FilterList from "../../components/filter-list/FilterList";
import Newsletter from "../../components/newsletter/Newsletter";
import "./product-list.scss";
interface IProductList {}

const ProductList: React.FC<IProductList> = () => {
  return (
    <div className="product-list">
      <FilterList />
      <Newsletter />
    </div>
  );
};

export default ProductList;
