import React from 'react'
import Carousel from '../Carousel/Carousel'
import './Testimonials.css'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
function Testimonials() {
  return (
    <section className='Testimonials'>

           
            <TitlePargraf 
        parghrafText="Their Happy Words 🤗"
              title="Our Testimonials"
              text="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
/>
<Carousel/>
    </section>
  )
}

export default Testimonials