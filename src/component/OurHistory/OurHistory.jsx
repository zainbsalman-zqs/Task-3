import React from 'react'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import HistoryInfo from '../HistoryInfo/HistoryInfo'
import "./OurHistory.css";

function OurHistory() {
  return (
    <section className='OurHistory'>
   <TitlePargraf Parghraftext="Our Progressive Journey"
                        title="Our History"
                        text="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
/>

 <HistoryInfo/>
  
    </section>
  )
}

export default OurHistory