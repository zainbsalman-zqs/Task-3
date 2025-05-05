import React from 'react';
import Title from '../Title/Title';
import ImgHero from '../ImgHero/ImgHero';
import "./HistoryInfo.css";
import { timelineData } from '../Data/HistoryInfodata';
function HistoryInfo() {
 

  return (
    <div className='HistoryInfocont'>
    <div className='HistoryInfocon'>
      {timelineData.map((item, index) => (
        <div key={index} className="timeline">
          <div className='yerscont'>
          <ImgHero rows={[3, 3, 3]} 
            wrapperClass="wrapperClass"
            rowClass="rowClass"
            patternClass="patternClass"
            pattern1Class="pattern1Class"
          />
          <span className='namberyer'>{item.year}</span>
          </div>
          <Title
           conter={item.titleConter}
           size={item.size}
            title={item.title}
            text={item.description}
            textclass={item.textclass}
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default HistoryInfo;
