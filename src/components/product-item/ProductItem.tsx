import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./product-item.scss";
interface IProductItem {
  img: string;
}

const ProductItem: React.FC<IProductItem> = ({ img }) => {
  return (
    <div className="product-item">
      <div className="product-wrapper">
        <div className="circle" />
        <img src={img} alt="" />
        <div className="hover-effect" />
        <div className="info-product">
          <div className="icon-product">
            <ShoppingCartOutlined fontSize="inherit" />
          </div>
          <div className="icon-product">
            <FavoriteBorderOutlined fontSize="inherit" />
          </div>
          <div className="icon-product">
            <SearchOutlined fontSize="inherit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
