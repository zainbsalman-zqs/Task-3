import React from 'react'
import "./CardTime.css";
import TimeImg1 from '../../../public/assets/img/TimeImg1.png'
import TimeImg2 from '../../../public/assets/img/TimeImg2.png'
import TimeImg3 from '../../../public/assets/img/TimeImg3.png'
import TimeImg4 from '../../../public/assets/img/TimeImg4.png'
import TimeImg5 from '../../../public/assets/img/TimeImg5.png'
import TimeImg6 from '../../../public/assets/img/TimeImg6.png'
import Title from '../Title/Title';
import iconteam from '../../../public/assets/img/Vector.png'

function CardTime() {
    const CardTimedata = [
        {
        caro:"caroteam",
        imgs:TimeImg1,
        conterimg :"contimteam",
        conter :"contcardteame",
        title :"Ms. Sarah Anderson",
        size :"sizeone",
        imgAfter:iconteam,
        conterimgAfter:"iconteamcont",
        titlesecond:"Qualification:Bachelor's Degree in Early Childhood Education",
        textsecond:"Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
        textclass:"textteam",
        sizetitlesecond:"sizeteam",
        contertitlesecond:"contertitlesecond"
    },
    {
        caro:"caroteam",
        imgs:TimeImg4,
        conterimg :"contimteam",
        conter :"contcardteame",
        title :"Mr. David Roberts",
        size :"sizeone",
        imgAfter:iconteam,
        conterimgAfter:"iconteamcont",
        titlesecond:"Qualification: Master's Degree in Elementary Education",
        textsecond:"With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
        textclass:"textteam",
        sizetitlesecond:"sizeteam",
        contertitlesecond:"contertitlesecond"
    },{
        caro:"caroteam",
        imgs:TimeImg2,
        conterimg :"contimteam",
        conter :"contcardteame",
        title :"Ms. Emily Hernandez",
        size :"sizeone",
        imgAfter:iconteam,
        conterimgAfter:"iconteamcont",
        titlesecond:"Qualification: Diploma in Child Psychology",
        textsecond:"Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
        textclass:"textteam",
        sizetitlesecond:"sizeteam",
        contertitlesecond:"contertitlesecond"
    },{
        caro:"caroteam",
        imgs:TimeImg3,
        conterimg :"contimteam",
        conter :"contcardteame",
        title :"Mr. Michael Turner",
        size :"sizeone",
        imgAfter:iconteam,
        conterimgAfter:"iconteamcont",
        titlesecond:"Qualification: Bachelor's Degree in Physical Education",
        textsecond:"Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
        textclass:"textteam",
        sizetitlesecond:"sizeteam",
        contertitlesecond:"contertitlesecond"
    },
    ,{
        caro:"caroteam",
        imgs:TimeImg5,
        conterimg :"contimteam",
        conter :"contcardteame",
        title :"Ms. Jessica Lee",
        size :"sizeone",
        imgAfter:iconteam,
        conterimgAfter:"iconteamcont",
        titlesecond:"Qualification: Master's Degree in Special Education",
        textsecond:"Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
        textclass:"textteam",
        sizetitlesecond:"sizeteam",
        contertitlesecond:"contertitlesecond"
    },
    {
        caro:"caroteam",
        imgs:TimeImg6,
        conterimg :"contimteam",
        conter :"contcardteame",
        title :"Mr. William Parker",
        size :"sizeone",
        imgAfter:iconteam,
        conterimgAfter:"iconteamcont",
        titlesecond:"Qualification: Bachelor's Degree in Fine Arts",
        textsecond:"Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
        textclass:"textteam",
        sizetitlesecond:"sizeteam",
        contertitlesecond:"contertitlesecond"
    }
];
  return (
    <div>
    <div className='CardTime'>
    {CardTimedata.map((card, index) => (
           <div className='CardTimecont'  key={index}>
             <Title
      caro={card.caro}
      imgs={card.imgs}
      conterimg={card.conterimg}
      conter={card.conter}
      title={card.title}
      size={card.size}
      imgAfter={card.imgAfter}
      conterimgAfter={card.conterimgAfter}
    />
    <Title
      conter={card.contertitlesecond}
      title={card.titlesecond}
      size={card.sizetitlesecond}
      text={card.textsecond}
      textclass={card.textclass}
    />
           </div>
             ))}
    </div>
        
    </div>
  )
}

export default CardTime