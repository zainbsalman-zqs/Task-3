import React from 'react'

export default function Parghraf({ Parghraftext, Parghraf, conterimgP, Parghrafimg ,Parghrafcont }) {
  
  return (
    
    <div className={`${Parghrafcont}`}>
      <p className={`${Parghraf}`}>{Parghraftext}</p>
      {Parghrafimg && (
        <img className={`${conterimgP}`} src={Parghrafimg} alt="" />
      )}
    </div>
  );
}
