import Announcer from "../../components/announcer/Announcer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./home.scss";
interface IHome {}

const Home: React.FC<IHome> = () => {
  return (
    <div className="home">
      <Announcer />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
