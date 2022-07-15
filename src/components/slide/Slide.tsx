import "./slide.scss";
interface ISlide {
  imgLink: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const Slide: React.FC<ISlide> = ({
  title,
  imgLink,
  backgroundColor,
  description,
}) => {
  return (
    <div className="slide" style={{ backgroundColor }}>
      <div className="slider-image">
        <img src={imgLink} alt={`${title} ads`} />
      </div>

      <div className="slider-detail">
        <h1 className="slide-title">{title}</h1>
        <p className="slide-description">{description}</p>
        <button className="slide-button">SHOW NOW</button>
      </div>
    </div>
  );
};

export default Slide;
