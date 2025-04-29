import React from 'react'

export default function Title({ title, text, size,conter,conterimg ,imgs ,textclass,conterimgAfter,imgAfter,caro}) {
  return (
    <>
       <div className={`${conter}`}>
    <div className={`${caro}`}>
    {imgs && (
              <div className={`${conterimg}`}>
            <img src={imgs} alt="" />
        </div>
    )
        }
      <h2 className={`${size}`}>{title}</h2>
    </div>
      {imgAfter && (
        <div className={`${conterimgAfter}`}>
          <img src={imgAfter} alt="" />
        </div>
      )}
   
      <p className={`${textclass}`}>{text }</p>
    </div>
    </>
  )
}
