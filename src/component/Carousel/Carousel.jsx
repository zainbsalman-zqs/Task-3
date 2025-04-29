import React from "react";
import "./Carousel.css";
import GoArrowRight from "../../../public/assets/img/GoArrowRight.png";
import CardCarousel from "../CardCarousel/CardCarousel";
import GoArrowLift from "../../../public/assets/img/GoArrowLift.png";

function Carousel() {
  return (
    <div className="carosel">
      <button className="btncar">
        <img src={GoArrowLift} alt="" />
      </button>
      <CardCarousel />
      <button className="btncar">
        <img src={GoArrowRight} alt="" />
      </button>

      <div className="rescardc">
        <button className="rescard">
          <img src={GoArrowLift} alt="" />
        </button>
        <button className="rescard">
          <img src={GoArrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
