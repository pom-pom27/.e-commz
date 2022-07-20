import { Send } from "@mui/icons-material";
import "./newsletter.scss";
interface INewsletter {}

const Newsletter: React.FC<INewsletter> = () => {
  return (
    <div className="newsletter">
      <h2 className="title">Newsletter</h2>
      <div className="subtitle">
        Get timely updates from your favorite products
      </div>
      <div className="search">
        <input type="text" placeholder="Your email" />
        <button className="send-button">
          <Send fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
