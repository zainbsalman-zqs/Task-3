import React from 'react'
import './CardCarousel.css'
import Title from '../Title/Title'
import {CardCarouseldata} from '../Data/Carouseldata'
import {useState} from 'react';
function CardCarousel() {

    return (
    <div className='cardcarou'>
    {CardCarouseldata.map((card, index) => (
             <Title
               key={index}
               caro={card.caro}
               imgs={card.imgs}
               conterimg={card.conterimg}
               conter={card.conter}
               title={card.title}
               size={card.size}
               imgAfter={card.imgAfter}
               conterimgAfter={card.conterimgAfter}
               text={card.text}
               textclass={card.textclass}
             />))}
    </div>
  )
}

export default CardCarousel