import React from 'react'

import GuideBanner from './GuideBanner'
import Logo from '../home/Logo'
import HowToSetup from './HowToSetup'
import BusinessStartGuide from './BusinessStartGuide'
import BusinessGuidesTabs from './BusinessGuidesTabs'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'



function page() {
  return (
    <div>

      <GuideBanner />
      <Logo />
      <HowToSetup />
      <BusinessStartGuide />
      <BusinessGuidesTabs />
      <ConsultantBanner />
      <VideoTesti />
      <Testimonials />
      <Assoisiates />
      <Faq />

    </div>
  )
}

export default page