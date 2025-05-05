import React from 'react'
import CardBenefits from '../CardBenefits/CardBenefits'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import  OurSpecialdata from '../Data/OurSpecialdata'
import "./OurSpecial.css";

function OurSpecial() {
  return (
    <section className='OurSpecial'>
  <TitlePargraf
                   Parghraftext="Our Features"
                   title="Our Special Features"
                   text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
/>
<CardBenefits data={OurSpecialdata}/>

    </section>
  )
}

export default OurSpecial