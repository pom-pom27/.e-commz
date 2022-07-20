import { ArrowLeftSharp, ArrowRightSharp } from "@mui/icons-material";
import { useRef } from "react";
import { sliderItems } from "../../dummyData";
import Slide from "../slide/Slide";
import "./slider.scss";
interface ISlider {}

type Directions = "left" | "right";

const Slider: React.FC<ISlider> = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideNumber = useRef(0);

  const moveSlider = (direction: Directions) => {
    if (!sliderRef) return;

    if (direction === "left") {
      slideNumber.current =
        slideNumber.current > 0 ? slideNumber.current - 1 : 2;
    } else {
      slideNumber.current =
        slideNumber.current < 2 ? slideNumber.current + 1 : 0;
    }

    sliderRef.current!.style.transform = `translateX(${
      slideNumber.current * -100
    }%)`;
  };

  return (
    <div className="slider">
      <div className="arrow-icon left-arrow" onClick={() => moveSlider("left")}>
        <ArrowLeftSharp fontSize="large" />
      </div>

      <div className="slider-wrapper" ref={sliderRef}>
        {sliderItems.map((slide) => (
          <Slide
            key={slide.id}
            title={slide.title}
            imgLink={slide.img}
            description={slide.desc}
            backgroundColor={slide.bg}
          />
        ))}
      </div>
      <div
        className="arrow-icon right-arrow"
        onClick={() => moveSlider("right")}
      >
        <ArrowRightSharp fontSize="large" />
      </div>
    </div>
  );
};

export default Slider;
