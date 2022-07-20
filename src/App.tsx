import "./App.css";
import Footer from "./components/footer/Footer";
import CartPage from "./pages/cart-page/CartPage";
interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <div>
      <CartPage />

      <Footer />
    </div>
  );
};

export default App;
