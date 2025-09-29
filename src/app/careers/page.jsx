import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CareerBanner from './CareerBanner'
import WhyWork from './WhyWork'
import OpenPositions from './OpenPositions'
import NoRoleCTA from './NoRoleCTA'
import Assoisiates from '../home/Assoisiates'
import ConsultantBanner from '../components/ConsultantBanner'

function page() {
  return (
    <div>
        
<CareerBanner />
<WhyWork />
<OpenPositions />
<NoRoleCTA />

      <Assoisiates />
      <ConsultantBanner />
        
    </div>
  )
}

export default page