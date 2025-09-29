import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import OffBanner from "./OffBanner";
import Logo from "@/app/home/Logo";
import OffTabs from "./OffTabs";
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
        <title>Professional License in Dubai | Startex Hub</title>
        <meta
          name="description"
          content="Apply for a professional license in Dubai. Get licenses for consultants, service providers, freelancers, doctors, engineers, and more with Startex Hub."
        />
      </Head>
      <div>
        <OffBanner />
        <Logo />
        <OffTabs />
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
