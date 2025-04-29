import React from "react";
import "./CardPages.css";
import Title from "../Title/Title";
import Parghraf from "../parghraf/Parghraf";
import GoArrowRight from "../../../public/assets/img/GoArrowRight.png";
import { cardpagesData } from "../Data/CardPagesdata";
export default function CardPages() {
  return (
    <div className="CardPags">
      {cardpagesData.map((card, index) => (
        <div className="CardPages">
          <Title
            key={index}
            conterimgAfter={card.conterimgAfter}
            imgAfter={card.imgAfter}
            conter={card.conter}
            title={card.title}
            size={card.size}
            text={card.text}
            textclass={card.textclass}
          />

          <button className="btnpgs">
            <Parghraf
              Parghrafcont="Parcontpgs"
              Parghraftext="Learn More "
              Parghraf="ParghrafPag"
              conterimgP="conterimgPag"
              Parghrafimg={GoArrowRight}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
