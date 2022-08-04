import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/cart-page/CartPage";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import ProductList from "./pages/product-list/ProductList";
import ProductPage from "./pages/product-page/ProductPage";
import Register from "./pages/register/Register";
interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;
