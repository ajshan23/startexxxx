import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import VirtualBanner from './VirtualBanner'
import Logo from '@/app/home/Logo'
import BusinessTab from '../business-center/BusinessTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import VirtualTabs from './VirtualTabs'
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Virtual Office in Dubai | Business Address & Services</title>
        <meta
          name="description"
          content="Get a virtual office in Dubai with Startex Hub. Enjoy a prime business address, mail forwarding, receptionist support, and flexible packages for startups & freelancers."
        />
      </Head>
      <div>
        
<VirtualBanner />
<Logo />
<VirtualTabs />


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