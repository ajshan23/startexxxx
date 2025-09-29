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
        <title>Offshore Company Formation & License in Dubai</title>
        <meta
          name="description"
          content="Register your offshore company in Dubai with Startex Hub. Learn about offshore license cost, setup, procedures, benefits, and top jurisdictions."
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
