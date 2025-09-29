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
        <title>E-Trader License in Dubai | Apply for Trade License Online</title>
        <meta
          name="description"
          content="Apply for an E-Trader license online in Dubai. Learn about costs, registration process, required documents, and benefits of getting a trade license."
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
