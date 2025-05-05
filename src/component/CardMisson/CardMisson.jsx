import React from 'react'
import "./CardMisson.css";
import Title from '../Title/Title';
import {cardData} from '../Data/CardMissondata'

function CardMisson() {

  return (
   <div className='contCardMisson'>
        {cardData.map((card, index) => (
          <Title
            key={index}
            imgs={card.imgs}
            caro={card.caro}
            conterimg={card.conterimg}
            conter={card.conter}
            title={card.title}
            size={card.size}
            text={card.text}
            textclass={card.textclass}
          />
        ))}
      </div>
  )
}

export default CardMisson