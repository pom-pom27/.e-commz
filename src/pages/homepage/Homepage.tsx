import Categories from "../../components/categories/Categories";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import styles from "./homepage.module.scss";
interface IHomepage {}

const Homepage = ({}: IHomepage) => {
  return (
    <div className={styles.homepage}>
      <Slider />
      <Categories />
      <Products withTitle="Popular" />
      <Newsletter />
    </div>
  );
};

export default Homepage;
