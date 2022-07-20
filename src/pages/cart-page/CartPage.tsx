import Navbar from "../../components/navbar/Navbar";
import "./cart-page.scss";
interface ICartPage {}

const CartPage: React.FC<ICartPage> = () => {
  return (
    <div className="cart-page">
      <Navbar />
    </div>
  );
};

export default CartPage;
