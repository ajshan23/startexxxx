import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceBanner from './ServiceBanner'
import Logo from '../home/Logo'
import WhatWeDo from './WhatWeDo'
import ServiceTab from './ServiceTab'
import ThingsKnow from './ThingsKnow'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'

import Head from "next/head";
function page() {
  return (
    <>
      <Head>
        <title>Business & PRO Services in Dubai | Startex Hub</title>
        <meta
          name="description"
          content="Explore Startex Hub’s Dubai services: VAT registration, accounting, visa support, company setup, trademark registration, bank accounts, and liquidation."
        />
      </Head>
      <div >
        <ServiceBanner />
        <Logo />
        <WhatWeDo />
        <ThingsKnow />
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