import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import FreeBanner from "./FreeBanner";
import Logo from "@/app/home/Logo";
import FreezoneTabs from "./FreezoneTabs";
import ConsultantBanner from "@/app/components/ConsultantBanner";
import VideoTesti from "@/app/home/VideoTesti";
import Testimonials from "@/app/home/Testimonials";
import Assoisiates from "@/app/home/Assoisiates";
import Faq from "@/app/home/Faq";
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Free Zone & Hospitality Licenses in Dubai | Startex Hub</title>
        <meta
          name="description"
          content="Get Dubai free zone licenses for restaurants, bars, hotels, and food services. Learn costs, procedures, and expert help for alcohol and restaurant licenses."
        />
      </Head>
      <div>
        <FreeBanner />
        <Logo />
        <FreezoneTabs />
        <ConsultantBanner />
        <VideoTesti />
        <Testimonials />
        <Assoisiates />
        <Faq />
      </div>
    </>
  );
}

export default page;
