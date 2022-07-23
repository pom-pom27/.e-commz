import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import "./navbar.scss";
interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item left">
        <a href="#">EN</a>
        <div className="search">
          <input type="text" placeholder="Search product" />
          <Search className="icon search-icon" />
        </div>
      </div>
      <div className="navbar-item center">
        <span className="logo">.E-Commz</span>
      </div>
      <div className="navbar-item right">
        <a href="#" className="link">
          REGISTER
        </a>
        <a href="#" className="link signin">
          SIGN IN
        </a>
        <IconButton className="icon-button" aria-label="cart">
          <Badge badgeContent={4} className="badge" color="primary">
            <ShoppingCartOutlined className="icon" />
          </Badge>
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
