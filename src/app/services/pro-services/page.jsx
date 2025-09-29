import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import ProBanner from './ProBanner'
import Logo from '@/app/home/Logo'
import ProThings from './ProThings'
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
        <title>PRO Services in Dubai | Business Setup & Visa Solutions</title>
        <meta
          name="description"
          content="Startex Hub provides trusted PRO services in Dubai — from trade license renewals, visas, and government approvals to company setup and compliance support."
        />
      </Head>
      <div>
        <ProBanner />
        <Logo />
        <ProThings />


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
