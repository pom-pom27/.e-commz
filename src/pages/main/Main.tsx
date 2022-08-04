import { Outlet } from "react-router-dom";
import Announcer from "../../components/announcer/Announcer";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./main.scss";
interface IHome {}

const Main: React.FC<IHome> = () => {
  return (
    <div>
      <Navbar />
      <Announcer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
