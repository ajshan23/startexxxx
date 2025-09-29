import React from 'react'

import Header from '@/app/components/Header'
import Logo from '@/app/home/Logo'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Footer from '@/app/components/Footer'

import MaidBanner from './MaidBanner'
import MaidTabs from './MaidTabs'

function page () {
  return (
    <div>
      
      <MaidBanner />
      <MaidTabs />
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
