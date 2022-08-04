import Button from "../../components/button/Button";
import CartItem from "../../components/cart-item/CartItem";
import "./cart-page.scss";
interface ICartPage {}

const CartPage: React.FC<ICartPage> = () => {
  return (
    <div className="cart-page">
      <h1>YOUR BAG</h1>
      <div className="cart-header">
        <div className="left-cart-header">
          <Button title="CONTINUE SHOPPING" />
        </div>
        <div className="center-cart-header">
          <a className="shopping-bag" href="#">
            Shooping Bag(2)
          </a>
          <a href="#">Your Wishlist(0)</a>
        </div>
        <div className="right-cart-header"></div>
      </div>
      <div className="cart-body">
        <div className="cart-list">
          <CartItem />
        </div>

        <div className="order-detail">
          <h2 className="order-title">ORDER SUMMARY</h2>
          <div className="order-row">
            <div>Subtotal</div>
            <div>$ 80</div>
          </div>
          <div className="order-row">
            <div>Estimated Shipping</div>
            <div>$ 80</div>
          </div>
          <div className="order-row">
            <div>Shipping Discount</div>
            <div>$ 80</div>
          </div>
          <div className="order-row order-row-total">
            <div className="order-total">Total</div>
            <div className="order-total">$ 80</div>
          </div>
          <button className="order-button">CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
