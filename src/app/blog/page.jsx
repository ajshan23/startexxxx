import React from 'react'
import Head from "next/head";
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogBanner from './BlogBanner'
import BlogListing from './BlogListing'
import Logo from '../home/Logo'
import Assoisiates from '../home/Assoisiates'
import ConsultantBanner from '../components/ConsultantBanner'

function page() {
  return (
    <>
      <Head>
        <title>Business Setup Insights & Blog | Startex Hub Dubai</title>
        <meta
          name="description"
          content="Stay updated with the latest on company formation, licensing, PRO & visa tips, business regulations, and startup success in Dubai & UAE."
        />
      </Head>
      <div >


<BlogBanner />
<Logo />
<BlogListing />
            <Assoisiates />
            <ConsultantBanner />
            



    </div>
    </>
  )
}

export default page