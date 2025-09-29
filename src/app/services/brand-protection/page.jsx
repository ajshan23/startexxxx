import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import BrandBanner from './BrandBanner'
import Logo from '@/app/home/Logo'
import BrandContent from './BrandContent'
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
        <title>Brand Protection in Dubai | Copyright, Trademark & IP</title>
        <meta
          name="description"
          content="Safeguard your brand in Dubai with Startex Hub. We provide copyright, trademark, patent, and IP protection services to secure your business rights in the UAE."
        />
      </Head>
      <div>
        <BrandBanner />
        <Logo />
        <BrandContent />
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
