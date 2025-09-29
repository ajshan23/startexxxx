import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import BookBanner from './BookBanner'
import Logo from '@/app/home/Logo'
import BusinessTab from '@/app/workspace/business-center/BusinessTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import AbTabs from './AbTabs'

function page() {
  return (
    <div>

<BookBanner />

<Logo />
<AbTabs />

 <ConsultantBanner />
            <VideoTesti />
            <Testimonials />
            <Assoisiates />
            <Faq />
      
    </div>
  )
}

export default page