import React from "react";
import CardPages from "../CardPages/CardPages";
import Parghraf from "../parghraf/Parghraf";
import Title from "../Title/Title";
import "./Navigate.css";

function Navigate() {
  return (
    <section className="Navigate">
      <div className="NavigConter">
        <Parghraf Parghrafcont="zaconter" Parghraf="" Parghraftext="Explore More" />
        <Title
          conter="conteNavinfo"
          title="Navigate through our Pages"
          size="sinati"
          text="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
          textclass="clnatx"
        />
      </div>
      <CardPages />
    </section>
  );
}

export default Navigate;
