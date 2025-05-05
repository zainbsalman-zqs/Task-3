import React from 'react'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import ImgHero from '../ImgHero/ImgHero'

function Hero2() {
  return (

       <section className="hero1">
        <div className="hero1cont">
        <ImgHero/>
          <TitlePargraf
           containerClass = "zaherocont"
            textclass = "texthero"
            size= "sihero"
            parghrafText="Academics"
            titleConter="hero1titlcont"
            title="Nurturing Young Minds for Success"
            text="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
          />
        </div>
        </section>
  )
}

export default Hero2