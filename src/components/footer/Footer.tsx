import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import "./footer.scss";
interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="footer">
      <div className="left-footer ">
        <h2 className="logo-footer">.E-Commz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          esse qui expedita cum sint fugiat. Non consequatur perspiciatis ipsa
          porro sint ut possimus nesciunt, eligendi sapiente, explicabo quis
          accusamus sed?
        </p>
        <div className="icons-footer">
          <div className="facebook">
            <Facebook fontSize="large" />
          </div>
          <div className="instagram">
            <Instagram fontSize="large" />
          </div>
          <div className="twitter">
            <Twitter fontSize="large" />
          </div>
          <div className="pinterest">
            <Pinterest fontSize="large" />
          </div>
        </div>
      </div>
      <div className="center-footer ">
        <h3 className="footer-title">Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Woman Fashion</li>
          <li>Man Fashion</li>
          <li>Accessories</li>
          <li>Cart</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
        </ul>
      </div>
      <div className="right-footer ">
        <h3 className="footer-title">Contact</h3>
        <div>
          <Room fontSize="inherit" /> Jl. M.H. Thamrin No.11, RT.8/RW.4,
          Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota
          Jakarta 10350
        </div>
        <div>
          <Phone fontSize="inherit" /> +1 234 56 78
        </div>
        <div>
          <MailOutline fontSize="inherit" />
          <a href="mailto:contact@ecommz.id">contact@ecommz.id</a>
        </div>
        <div className="payments">
          <img
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="payment methods"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
