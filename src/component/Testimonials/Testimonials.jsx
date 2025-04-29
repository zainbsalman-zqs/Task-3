import React from 'react'
import Carousel from '../Carousel/Carousel'
import Title from '../Title/Title'
import Parghraf from '../parghraf/Parghraf'
import './Testimonials.css'
function Testimonials() {
  return (
    <section className='Testimonials'>
<div className='Freq'>
              <Parghraf
              Parghrafcont='zaconter'
              Parghraf=''
              Parghraftext="Children Deserve Bright Future"
              />
            <Title
            conter='conterinfo'
            title="Our Testimonials"
            size='siFrti'
            text="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            textclass='clFrtx'
            />
            </div>
<Carousel/>
    </section>
  )
}

export default Testimonials