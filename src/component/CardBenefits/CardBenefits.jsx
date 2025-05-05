import React from "react";
import "./CardBenefits.css";
import Title from "../Title/Title";
import cardData from '../Data/CardBenefits';

function CardBenefits({ data = cardData, containerClass = '' }) {
  return (
    <div className={`Cardconter ${containerClass}`}>
      {data.map((card, index) => (
        <Title
          key={index}
          imgs={card.imgs}
          conterimg={card.conterimg}
          conter={card.conter}
          title={card.title}
          size={card.size}
          text={card.text}
          textclass={card.textclass}
        />
      ))}
    </div>
  );
}

export default CardBenefits;
