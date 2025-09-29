import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import BusinessBanner from './BusinessBanner'
import Logo from '@/app/home/Logo'
import BusinessTab from './BusinessTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Head from "next/head";

function page () {
  return (
    <>
      <Head>
        <title>Business Center in Dubai | Flexible Office Spaces</title>
        <meta
          name="description"
          content="Find your ideal business center in Dubai with Startex Hub. Flexible office rentals, coworking, meeting rooms, and serviced office solutions in prime locations."
        />
      </Head>
      <div>
        <BusinessBanner />
        <Logo />
        <BusinessTab />
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
