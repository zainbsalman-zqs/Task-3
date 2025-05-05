import React from 'react'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import "./OurTeam.css";
import CardTime from '../CardTime/CardTime';
function OurTeam() {
  return (
    <section className='OurTeam'>
 <TitlePargraf Parghraftext="Our Teachers With Experties"
                        title="Our Team Members"
                        text="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
/>

<CardTime/>
    </section>
  )
}

export default OurTeam