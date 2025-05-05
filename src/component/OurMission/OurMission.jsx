import React from 'react'
import CardMisson from '../CardMisson/CardMisson'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import "./OurMission.css";

function OurMission() {
  return (
    <section className='OurMission'>
<TitlePargraf  Parghraftext="Mission & Visions"
                        title="Our Mission & Visions"
                        text="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
/>

<CardMisson/>

    </section>
  )
}

export default OurMission