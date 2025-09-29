import React from 'react'

import Header from '@/app/components/Header'
import Logo from '@/app/home/Logo'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Footer from '@/app/components/Footer'
import FreelanceBanner from './FreelanceBanner'
import FreelanceTab from './FreelanceTab'

function page () {
  return (
    <div>
      
      <FreelanceBanner />
      <FreelanceTab />
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
