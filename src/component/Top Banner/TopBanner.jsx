import React from "react";
import "./TopBanner.css";
import { images } from "../Data/topbannerdata";
import GoArrowRight from "../../../public/assets/img/GoArrowRight.png";
import Parghraf from "../parghraf/Parghraf";
function TopBanner() {
  return (
    <>
      <div className="banner">
        {images.map((image, index) => (
          <img key={index} className={image.imagecont} src={image.imgbanner} />
        ))}

        <Parghraf
          Parghraftext="Admission is Open, Grab your seat now "
          Parghrafimg={GoArrowRight}
          Parghrafcont='conben'
          Parghraf='icon2'
          conterimgP="conbimg"
        />
      </div>
    </>
  );
}

export default TopBanner;
