import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import CompanyBanner from './CompanyBanner'
import Logo from '@/app/home/Logo'
import CompanyTabs from './CompanyTabs'
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
        <title>Company Liquidation in Dubai | Costs, Process & Support</title>
        <meta
          name="description"
          content="Close your business smoothly in Dubai. Startex Hub guides you through liquidation costs, procedures, document requirements, and regulations for mainland & free zone entities."
        />
      </Head>
      <div>
        <CompanyBanner />
        <Logo />
        <CompanyTabs />
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
