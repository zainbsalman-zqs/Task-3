import React from 'react';
import Title from '../Title/Title';
import Parghraf from '../parghraf/Parghraf';
import ImgHero from '../ImgHero/ImgHero';
import "./HistoryInfo.css";

function HistoryInfo() {
  const timelineData = [
    {titleConter:"titleConterHisto",
        size:"sizeHisto",
        textclass:"textclassHisto",
      year: '2023',
      title: 'Resilience and Future Horizons',
      description:
        'Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.',
    },
    {titleConter:"titleConterHisto",
        size:"sizeHisto",
        textclass:"textclassHisto",
      year: '2017',
      title: 'Innovation and Technology',
      description:
        'Innovation became the driving force behind our kindergarten’s progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.',
    },
    {titleConter:"titleConterHisto",
        size:"sizeHisto",
        textclass:"textclassHisto",
      year: '2012',
      title: 'Expansion and Recognition',
      description:
        'These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.',
    },
    {titleConter:"titleConterHisto",
        size:"sizeHisto",
        textclass:"textclassHisto",
      year: '2005',
      title: 'Inception and Growth',
      description:
        'Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.',
    },
  ];

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
