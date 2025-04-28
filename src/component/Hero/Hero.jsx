import React from 'react'
import './Hero.css'
import Title from '../Title/Title'
import ImageContainer from '../../../public/assets/img/Image Container.png'
import { items} from '../Data/Herodata'
function Hero() {
  return (
    <section class="hero">
        <div  class="herocont">
        <img src={ImageContainer} alt="" />
        <div className='contheroinfo'>
       
            <p className='parhero'>Welcome to Little Learners Academy</p>

        <Title  
       conter='titlecont'
       size='titlhero'
        title={ 
            <div>
            Where Young Minds Blossom and  
            <span className='contheroinfospan'>  Dreams Take Flight.</span>
            </div>
        }
        textclass='textclasshero'
        text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
/>
<div className="statcont">
  {items?.map((item, index) => {
    return (
      <div key={index} className="statitem">
        <p className="number">{item?.number}</p>
        <p className="description">{item?.description}</p>
        {item?.line && <span className={item.line}></span>}
      </div>
    );
  })}
</div>
        </div>
        </div>
    </section>
  )
}

export default Hero