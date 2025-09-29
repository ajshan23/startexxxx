import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import FlexiBanner from './FlexiBanner'
import Logo from '@/app/home/Logo'
import BusinessTab from '../business-center/BusinessTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import FlexiTabs from './FlexiTabs'
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Flexi Desk in Dubai | Affordable Co-working Spaces</title>
        <meta
          name="description"
          content="Rent a flexi desk in Dubai with Startex Hub. Affordable co-working spaces, Wi-Fi, printing, lounge access, and flexible daily, weekly, or monthly packages."
        />
      </Head>
      <div>
        
<FlexiBanner />
<Logo />
<FlexiTabs />


 <ConsultantBanner />

            <VideoTesti />
            <Testimonials />
            <Assoisiates />
            <Faq />

        
    </div>
    </>
  )
}

export default page