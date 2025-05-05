import React from "react";
import TitlePargraf from "../Title&Pargraf/Title&Pargraf";
import ImgHero from "../ImgHero/ImgHero";
import "./Hero1.css";
function Hero1() {
  return (
    <section className="hero1">
    <div className="hero1cont">
    <ImgHero/>
      <TitlePargraf
       containerClass = "zaherocont"
        textclass = "texthero"
        size= "sihero"
        parghrafText="Overview"
        titleConter="hero1titlcont"
        title="Welcome to Little Learners Academy"
        text="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
    </div>
    </section>
  );
}

export default Hero1;
