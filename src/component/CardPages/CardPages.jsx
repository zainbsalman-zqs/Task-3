import React from 'react'
import'./CardPages.css'
import Title from '../Title/Title'
import containe from "../../../public/assets/img/Container.png";
import Parghraf from '../parghraf/Parghraf';
import GoArrowRight from'../../../public/assets/img/GoArrowRight.png' 
export default function CardPages() {
  const cardpagesData=[
{  
  conterimgAfter: "conterimgAfter" ,
  imgAfter: containe,
      title: "About Us",
      text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      size: "sipgti",
      conter: "contpgs",
      textclass: "texpg",
    },

        {  
          conterimgAfter: "conterimgAfter" ,
          imgAfter: containe,
              title: "Academics",
              text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
              size: "sipgti",
              conter: "contpgs",
              textclass: "texpg",
            },
            {  
              conterimgAfter: "conterimgAfter" ,
              imgAfter: containe,
                  title: "Student Life",
                  text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
                  size: "sipgti",
                  conter: "contpgs",
                  textclass: "texpg",
                },
                {  
                  conterimgAfter: "conterimgAfter" ,
                  imgAfter: containe,
                      title: "Admissions",
                      text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
                      size: "sipgti",
                      conter: "contpgs",
                      textclass: "texpg",
                    },
  ];
  return (
        <div className="CardPags">
               {cardpagesData.map((card, index) => (
           <div className="CardPages">
            
            <Title
                key={index}
                conterimgAfter={card.conterimgAfter}
                imgAfter={card. imgAfter}
                conter={card.conter}
                title={card.title}
                size={card.size}
                text={card.text}
                textclass={card.textclass}
              />
            
              <button className='btnpgs'>
           
              <Parghraf 
              Parghrafcont='Parcontpgs'
                  Parghraftext="Learn More "
                  Parghraf ='ParghrafPag'
                  conterimgP='conterimgPag'
                  Parghrafimg={GoArrowRight}
                   />
              </button></div>

            ))}
        
           </div>
    
  )

}
