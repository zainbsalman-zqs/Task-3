import React from "react";
import "./CardBenefits.css";
import {cardData} from'../Data/CardBenefits' 
import Title from "../Title/Title";
function CardBenefits() {
 
   const firstRow = cardData.slice(0, 3);
  const secondRow = cardData.slice(3, 6);

  return (
    <div className="Cardconter" >
      <div className="firstRow" >
        {firstRow.map((card, index) => (
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
      <div className="secondRow"  style={{ }}>
        {secondRow.map((card, index) => (
          <Title
            key={index + 3}
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
    </div>
  );
}

export default CardBenefits;