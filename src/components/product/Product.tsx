import "./product.scss";
interface IProduct {}

const colors = ["black", "darkblue", "gray"];

const Product: React.FC<IProduct> = () => {
  return (
    <div className="product">
      <div className="product-side">
        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product" />
      </div>
      <div className="product-side product-side-right">
        <h1>Denim Jumsuit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas
          id voluptas doloremque blanditiis earum qui eligendi voluptatum
          placeat distinctio vitae impedit error exercitationem laudantium
          voluptates enim soluta sequi quisquam?
        </p>
        <h2>$ 20</h2>
        <div className="product-variants">
          <span>Color</span>
          <div className="colors">
            {colors.map((color, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: color }}
                className="color"
              ></div>
            ))}
          </div>
          <span>Size</span>
          <select name="size" id="size">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="action">
          <div className="quantity">
            <div className="decrement">-</div>
            <div className="number">1</div>
            <div className="increment">+</div>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
