import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import MainlandBanner from "./MainlandBanner";
import MainlandTabs from "./MainlandTabs";
import ConsultantBanner from "@/app/components/ConsultantBanner";
import VideoTesti from "@/app/home/VideoTesti";
import Testimonials from "@/app/home/Testimonials";
import Assoisiates from "@/app/home/Assoisiates";
import Faq from "@/app/home/Faq";
import MainlandServices from "./MainlandServices";
import Logo from "@/app/home/Logo";
import MainlandVideo from "./MainlandVideo";
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Mainland License in Dubai | Cost, Registration & Company Setup</title>
        <meta
          name="description"
          content="Apply for a Dubai Mainland License the smart way. See 2025 costs, required documents, and a step‑by‑step online registration process. Get end‑to‑end setup with Startex Hub."
        />
      </Head>
      <div>
        <MainlandBanner />
        <Logo />
        <MainlandVideo />
        <MainlandServices />
        <MainlandTabs />
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
