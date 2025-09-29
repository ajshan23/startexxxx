import React from "react";
import Head from "next/head";
import OffBanner from "./OffBanner";
import Logo from "@/app/home/Logo";
import OffTabs from "./OffTabs";
import ConsultantBanner from "@/app/components/ConsultantBanner";
import VideoTesti from "@/app/home/VideoTesti";
import Testimonials from "@/app/home/Testimonials";
import Assoisiates from "@/app/home/Assoisiates";
import Faq from "@/app/home/Faq";

function page() {
  return (
    <>
      <Head>
        <title>Commercial License in Dubai | Cost & Setup Guide</title>
        <meta
          name="description"
          content="Learn how to get a commercial license in Dubai. Startex Hub guides you on costs, types, benefits, timelines, and requirements for business setup."
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
