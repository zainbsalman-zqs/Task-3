import React from 'react'
import "./Frequently .css";
import FrequentlyCard from '../FrequentlyCard/FrequentlyCard'
import Parghraf from '../parghraf/Parghraf'
import Title from '../Title/Title'

function Frequently () {
  return (
         <section className='Freqpg'>
              <div className='Freq'>
              <Parghraf
              Parghrafcont='zaconter'
              Parghraf=''
              Parghraftext="Solutions For The Doubts"
              />
            <Title
            conter='conterinfo'
            title="Frequently Asked Questions"
            size='siFrti'
            text="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            textclass='clFrtx'
            />
            </div>
            <FrequentlyCard/>
             </section>
  )
}

export default Frequently 