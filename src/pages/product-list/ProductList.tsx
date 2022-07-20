import Announcer from "../../components/announcer/Announcer";
import FilterList from "../../components/filter-list/FilterList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import "./product-list.scss";
interface IProductList {}

const ProductList: React.FC<IProductList> = () => {
  return (
    <div className="product-list">
      <Navbar />
      <Announcer />
      <FilterList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
