import React from "react";
import CardPages from "../CardPages/CardPages";
import Parghraf from "../parghraf/Parghraf";
import Title from "../Title/Title";
import "./Navigate.css";
import TitlePargraf from "../Title&Pargraf/Title&Pargraf";

function Navigate() {
  return (
    <section className="Navigate">

      <TitlePargraf
      Parghraftext="Explore More"
                title="Navigate through our Pages"

                text="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"

      />
      <CardPages />
    </section>
  );
}

export default Navigate;
