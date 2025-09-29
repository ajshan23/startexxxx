import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import SponserBanner from './SponserBanner'
import Logo from '@/app/home/Logo'
import SponserTabs from './SponserTabs'
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
        <title>Sponsorship Services in Dubai | Local Partner Solutions</title>
        <meta
          name="description"
          content="Startex Hub provides reliable sponsorship services in Dubai. Get a trusted Emirati partner, secure approvals, and enjoy full investor benefits with local support."
        />
      </Head>
      <div>
        <SponserBanner />
        <Logo />
        <SponserTabs />

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
