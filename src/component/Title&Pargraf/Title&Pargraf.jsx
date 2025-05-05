import React from 'react'
import Parghraf from '../parghraf/Parghraf'
import Title from '../Title/Title'
import "./Title&Pargraf.css";


function TitlePargraf( {
    containerClass = '',
    parghrafText = 'Children Deserve Bright Future',
    parghrafCont = 'zaconter',
    titleConter = 'conterinfo',
    title = 'Our Benefits',
    size = 'siBeti',
    text = 'With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child\'s future.',
    textclass = 'clBetx'
  }) {
     
  return (
    <div className={`Ben ${containerClass}`}>
    <Parghraf
      Parghrafcont={parghrafCont}
      Parghraf=""
      Parghraftext={parghrafText}
    />
    <Title
      conter={titleConter}
      title={title}
      size={size}
      text={text}
      textclass={textclass}
    />
  </div>
  )
}

export default TitlePargraf