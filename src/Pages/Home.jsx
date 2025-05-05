import React from 'react'

import Navigate from '../component/Navigate/Navigate'
import Hero from '../component/Hero/Hero'
import OurBenefits from '../component/OurBenefits/OurBenefits'
import Testimonials from '../component/Testimonials/Testimonials'

import Frequently from '../component/Frequently/Frequently '
function Home() {
  return (
    <>
      <Hero/>
      <OurBenefits/>
      <Testimonials/>
      <Frequently/>
      <Navigate/>
   
    </>
  )
}

export default Home