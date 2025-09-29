import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import PackageBanner from "./PackageBanner";
import Logo from "../home/Logo";
import PackageVideo from "./VideoPackage";
import VisaPackages from "./VisaPackages";
import ConsultantBanner from "../components/ConsultantBanner";
import VideoTesti from "../home/VideoTesti";
import Testimonials from "../home/Testimonials";
import Assoisiates from "../home/Assoisiates";
import Faq from "../home/Faq";
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>Dubai Visa & Work Permit Packages | Startex Hub</title>
        <meta
          name="description"
          content="Find Dubai visa packages: work visas, job seeker visas, tourist visas, employment permits, and skilled worker options at transparent prices."
        />
      </Head>
      <div>
        <PackageBanner />
        <Logo />
        <PackageVideo />
        <VisaPackages />
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
