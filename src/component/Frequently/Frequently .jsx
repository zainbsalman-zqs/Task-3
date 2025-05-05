import React from 'react'
import "./Frequently .css";
import FrequentlyCard from '../FrequentlyCard/FrequentlyCard'
import Parghraf from '../parghraf/Parghraf'
import Title from '../Title/Title'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf';

function Frequently () {
  return (
         <section className='Freqpg'>
            <TitlePargraf
                          Parghraftext="Solutions For The Doubts"
                        title="Frequently Asked Questions"
                        text="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."

            />
            <FrequentlyCard/>
             </section>
  )
}

export default Frequently 