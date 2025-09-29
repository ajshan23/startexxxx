import React from 'react'

import Header from '@/app/components/Header'
import Logo from '@/app/home/Logo'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Footer from '@/app/components/Footer'
import FreelanceBanner from './WorkBanner'
import FamilyBanner from './WorkBanner'
import WorkBanner from './WorkBanner'
import WorkTabs from './WorkTabs'

function page () {
  return (
    <div>
      
      <WorkBanner />
      <WorkTabs />
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
