import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import BankBanner from './BankBanner'
import Logo from '@/app/home/Logo'
import BankTab from './BankTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Open a Business Bank Account in Dubai | Startex Hub</title>
        <meta
          name="description"
          content="Easily open a business bank account in Dubai with Startex Hub. Get expert guidance on requirements, procedures, and banking solutions for companies in the UAE."
        />
      </Head>
      <div className=''>
        <BankBanner />
        <Logo />
        <BankTab />
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