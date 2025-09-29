import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import TrademarkBanner from './TrademarkBanner'
import Logo from '@/app/home/Logo'
import TradeYtb from './TradeYtb'
import TradeTab from './TradeTab'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import Head from "next/head";

function page () {
  return (
    <>
      <Head>
        <title>Trademark Registration in Dubai | Startex Hub</title>
        <meta
          name="description"
          content="Protect your brand with trademark registration in Dubai. Startex Hub assists with applications, renewals, and approvals to secure your business identity."
        />
      </Head>
      <div>
        <TrademarkBanner />
        <Logo />
        <TradeYtb />
        <TradeTab />
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
