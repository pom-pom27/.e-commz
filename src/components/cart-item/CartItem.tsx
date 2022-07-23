import "./cart-item.scss";
interface ICartItem {}

const CartItem: React.FC<ICartItem> = () => {
  return (
    <div className="cart-item">
      <img
        src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
        alt="your cart item"
      />
      <div className="detail-cart-item">
        <div className="detail-cart-left">
          <div className="product-name">
            <b>Product:</b> <span>JESSIE THUNDER SHOES</span>
          </div>
          <div className="id-product">
            <b>ID:</b> <span>123129923</span>
          </div>
          <div
            style={{ backgroundColor: "black" }}
            className="product-color"
          ></div>
          <div className="size-product">
            <b>Size:</b> <span>37.5</span>
          </div>
        </div>
        <div className="detail-cart-right">
          <div className="cart-item-quantity">
            <button>-</button>
            <span className="number-quantity">2</span>
            <button>+</button>
          </div>
          <div className="cart-item-price">$ 30</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
