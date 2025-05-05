import React from 'react'
import CardBenefits from '../CardBenefits/CardBenefits'
import  CarouselAwardsdata from '../Data/CarouselAwardsdata'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import GoArrowLift from "../../../public/assets/img/GoArrowLift.png";
import GoArrowRight from "../../../public/assets/img/GoArrowRight.png";
import "./CarouselAwards.css";
import { useState } from 'react';

function CarouselAwards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex(prev => {
      const maxPages = Math.ceil(CarouselAwardsdata.length / itemsPerPage);
      return prev + 1 >= maxPages ? prev : prev + 1;
    });
  };
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 < 0 ? 0 : prev - 1));
  };
  return (
    <section className='CarouselAwards'>
      <TitlePargraf
                   Parghraftext="Our Achievements"
                   title="Our Awards and Recognitions"
                   text="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
/>
<div className="slider">
        <div className={`slides translate-${currentIndex}`}>
          <CardBenefits data={CarouselAwardsdata} containerClass="MyCustomClass" />
        </div>
      </div>
      <div className="rescardc">
        <span>8 More Awards</span>
        <button className="rescard"  onClick={handlePrev}>
          <img src={GoArrowLift} alt="" />
        </button>
        <button className="rescard"  onClick={handleNext}>
          <img src={GoArrowRight} alt="" />
        </button>
      </div>
    </section>
  )
}

export default CarouselAwards