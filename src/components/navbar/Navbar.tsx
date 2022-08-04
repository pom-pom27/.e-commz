import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <span className="logo">.E-Commz</span>
        </Link>
      </div>
      <div className="navbar-item right">
        <Link className="link" to="login">
          REGISTER
        </Link>

        <Link className="link signin" to="register">
          SIGN IN
        </Link>
        <Link to="cart">
          <IconButton className="icon-button" aria-label="cart">
            <Badge badgeContent={4} className="badge" color="primary">
              <ShoppingCartOutlined className="icon" />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
