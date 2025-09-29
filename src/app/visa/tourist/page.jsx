import React from 'react'

import Header from '@/app/components/Header'
import Logo from '@/app/home/Logo'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Footer from '@/app/components/Footer'
import TouristBanner from './TouristBanner'
import TouristTabs from './TouristTabs'

function page () {
  return (
    <div>
      
      <TouristBanner />
      <TouristTabs />
      <Logo />
      <ConsultantBanner />
      <VideoTesti />
      <Testimonials />
      <Assoisiates />
      <Faq />
      
    </div>
  )
}

export default page
