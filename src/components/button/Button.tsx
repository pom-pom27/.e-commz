import "./button.scss";
interface IButton {
  title: string;
  onclick?: () => void;
}

const Button: React.FC<IButton> = ({ title, onclick }) => {
  return (
    <button onClick={onclick} className="button">
      {title}
    </button>
  );
};

export default Button;
