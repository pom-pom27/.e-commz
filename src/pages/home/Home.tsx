import Announcer from "../../components/announcer/Announcer";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import "./home.scss";
interface IHome {}

const Home: React.FC<IHome> = () => {
  return (
    <div className="home">
      <Announcer />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
