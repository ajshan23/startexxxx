// HomePage.tsx - OPTIMIZED SERVER COMPONENT (No ssr:false errors)
import React from "react";
import dynamic from "next/dynamic";

// ========================================
// CRITICAL: Above-the-fold (Load immediately)
// ========================================
import Banner from "./Banner";

// ========================================
// HIGH PRIORITY: Near above-fold (Lazy loaded with SSR)
// ========================================
const Craft = dynamic(() => import("./Craft"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const HomePackages = dynamic(() => import("./HomePackages"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

// ========================================
// MEDIUM PRIORITY: Mid-page content
// ========================================
const YoutubeSection = dynamic(() => import("./YoutubeSection"), {
  loading: () => <div className="h-96 bg-gray-100" />,
});

const TypesofLicense = dynamic(() => import("./TypesofLicense"), {
  loading: () => <div className="h-80 bg-gray-50" />,
});

const LicenseTab = dynamic(() => import("./LicenseTab"), {
  loading: () => <div className="h-96 bg-gray-50" />,
});

const TypesofBusiness = dynamic(() => import("./TypesofBusiness"), {
  loading: () => <div className="h-80 bg-gray-50" />,
});

// ========================================
// LOW PRIORITY: Below-fold content
// ========================================
const BankingPartners = dynamic(() => import("./BankingPartners"), {
  loading: () => <div className="h-64" />,
});

const ConsultantBanner = dynamic(() => import("../components/ConsultantBanner"), {
  loading: () => <div className="h-80" />,
});

const GoldenVisa = dynamic(() => import("./GoldenVisa"), {
  loading: () => <div className="h-96" />,
});

const Testimonials = dynamic(() => import("./Testimonials"), {
  loading: () => <div className="h-96" />,
});

const Assoisiates = dynamic(() => import("./Assoisiates"), {
  loading: () => <div className="h-64" />,
});

const Faq = dynamic(() => import("./Faq"), {
  loading: () => <div className="h-96" />,
});

// ========================================
// CLIENT-SIDE: Popup Manager
// ========================================
const PopupManager = dynamic(() => import("./PopupManager"));

// Optional components (commented out)
// const VideoTesti = dynamic(() => import("./VideoTesti"));
// const Logo = dynamic(() => import("./Logo"));

export default function HomePage() {
  return (
    <div>
      {/* CRITICAL: Loads immediately */}
      <Banner />
      
      {/* HIGH PRIORITY: Lazy but SSR enabled */}
      <Craft />
      <HomePackages />
      
      {/* MEDIUM PRIORITY: Still SSR but lazy loaded */}
      <YoutubeSection />
      <TypesofLicense />
      <LicenseTab />
      <TypesofBusiness />
      
      {/* LOW PRIORITY: Far below fold */}
      <BankingPartners />
      <ConsultantBanner />
      <GoldenVisa />
      <Testimonials />
      <Assoisiates />
      <Faq />
      
      {/* CLIENT ONLY: Popup after 10s */}
      <PopupManager />
    </div>
  );
}