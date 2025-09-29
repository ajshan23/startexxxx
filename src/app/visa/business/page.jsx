import React from 'react'
import BusinessBanner from './BusinessBanner'
import Header from '@/app/components/Header'
import Logo from '@/app/home/Logo'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Footer from '@/app/components/Footer'
import BTab from './BTab'

function page () {
  return (
    <div>
      
      <BusinessBanner />
      <BTab />
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
