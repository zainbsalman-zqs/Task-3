import React from 'react'
import "./ImgHero.css";
function ImgHero({ 
  rows = [4, 3, 2, 1],
  wrapperClass = "",
  rowClass = "",
  patternClass = "",
  pattern1Class = ""
}) {

  return (
   
    <div className={`wrapper ${wrapperClass}`}>
    {rows.map((count, rowIndex) => (
      <div className={`row ${rowClass}`}  key={rowIndex}>
        {Array.from({ length: count }, (_, index) => (
          <div className={`pattern ${patternClass}`} key={index}>
            <div className={`pattern1 ${pattern1Class}`}></div>
          </div>
        ))}
      </div>
    ))}
  </div>
  )
}

export default ImgHero