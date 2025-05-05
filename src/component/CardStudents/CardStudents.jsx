import React from "react";
import { cards } from "../Data/Studentsdata";

import "./CardStudents.css";

function CardStudents() {
  return (
    <div className="CardStudents">
      {cards.map((card, index) => (
        <div className="conerst" key={index}>
          <div className="containerst"></div>
          <div className="zaq">
            <div className="image-container">
              <img src={card.imgs} />
            </div>
            <div className="coninfistud">
              <h3 className={`card-title ${card.size}`}>{card.title}</h3>
              <p className={card.textclass}>{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardStudents;
