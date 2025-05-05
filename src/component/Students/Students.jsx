import React from 'react'
import TitlePargraf from '../Title&Pargraf/Title&Pargraf'
import CardStudents from '../CardStudents/CardStudents'
import "./Students.css";
function Students() {
  return (
    <section className='Students'>
         <TitlePargraf Parghraftext="Our Features"
                        title="What Students Learn"
                        text="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
/>
  
  <CardStudents/>
    </section>
  )
}

export default Students