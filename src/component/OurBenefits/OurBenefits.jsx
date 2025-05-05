import React from "react";
import CardBenefits from "../CardBenefits/CardBenefits";
import "./OurBenefits.css";
import TitlePargraf from "../Title&Pargraf/Title&Pargraf";

export default function OurBenefits() {
  return (
    <section className="Benefits">
     <TitlePargraf  /> 
        <CardBenefits />
    </section>
  );
}
