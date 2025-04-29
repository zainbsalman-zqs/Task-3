import React from 'react'
import Title from '../Title/Title'
import CardBenefits from '../CardBenefits/CardBenefits'
import "./OurBenefits.css";
import Parghraf from '../parghraf/Parghraf';
export default function OurBenefits() {
  return (
    <section className='Benefits'>
      <div className='Ben'>
      <Parghraf
      Parghrafcont='zaconter'
      Parghraf=''
      Parghraftext="Children Deserve Bright Future"
      />
    <Title
    conter='conterinfo'
    title="Our Benefits"
    size='siBeti'
    text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
    textclass='clBetx'
    />
      </div>
<div>
<CardBenefits/>
</div>


    </section>
  )
}


