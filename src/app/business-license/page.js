import React from 'react'
import Head from "next/head";

import LicensingBanner from './LicensingBanner'

import Logo from '../home/Logo'
import BusinessLicenses from './BusinessLicenses'
import ThingsKnow from './ThingsKnow'
import ConsultantBanner from '../components/ConsultantBanner'

import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Head>
                <title>Business License in Dubai | Startex Hub</title>
                <meta
                    name="description"
                    content="Get your UAE business license with ease. Startex Hub helps with registration, renewals, and setup so your company starts smoothly in Dubai."
                />
            </Head>
            <div>

                <LicensingBanner />
                <Logo />
                <BusinessLicenses />
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