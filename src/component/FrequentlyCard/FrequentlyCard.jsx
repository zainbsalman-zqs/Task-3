import React from "react";
import "./FrequentlyCard.css";
import Title from "../Title/Title";
import plus from "../../../public/assets/img/plus.png";
import minus from "../../../public/assets/img/minus.png";
import {fqcard} from"../Data/Frequentlydata"
import { useState } from "react";
function FrequentlyCard() {
  const [isOpen, setIsOpen] = useState(0);

 
    const firstColumn = fqcard.slice(0, Math.ceil(fqcard.length / 2));
    const secondColumn = fqcard.slice(Math.ceil(fqcard.length / 2));
  
    return (
      <div className="FqCard">
        
        <div className="column">
          {firstColumn.map((card) => (
            <div
              key={card.id}
              className={`FqCards ${isOpen === card.id ? "open" : ""}`}
              onClick={() => setIsOpen(isOpen === card.id ? null : card.id)} 
            >
              <div className={`title-container ${isOpen === card.id ? "open" : ""}`}>
                <h3 className="sizefq" >{card.question}</h3>
                {isOpen === card.id && <span className={card.line}></span>}
                <Title
                  conter={`${card.conter} ${isOpen === card.id ? "open" : ""}`}
                  text={isOpen === card.id ? card.answer : ""}
                  textclass={card.textfq}
                />
              </div>
              <img
                className="conimgfq"
                src={isOpen === card.id ? minus : plus}
                alt="icon"
              />
            </div>
          ))}
        </div>
        <div className="column">
          {secondColumn.map((card) => (
            <div
              key={card.id}
              className={`FqCards ${isOpen === card.id ? "open" : ""}`}
              onClick={() => setIsOpen(isOpen === card.id ? null : card.id)}
            >
              <div className={`title-container ${isOpen === card.id ? "open" : ""}`}>
                <h3 className="sizefq">{card.question}</h3>
                {isOpen === card.id && <span className={card.line}></span>}
                <Title
                  conter={`${card.conter} ${isOpen === card.id ? "open" : ""}`}
                  size={card.sizefq}
                  text={isOpen === card.id ? card.answer : ""}
                  textclass={card.textfq}
                />
              </div>
              <img
                className="conimgfq"
                src={isOpen === card.id ? minus : plus}
                alt="icon"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FrequentlyCard;