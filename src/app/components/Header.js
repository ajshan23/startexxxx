"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MainLogo from "../../../public/assets/images/main-logo.webp";
import MainlandImg from "../../../public/assets/images/licensing/m-banner.webp";
import S1 from "../../../public/assets/images/services/s1.webp";
import S2 from "../../../public/assets/images/services/s2.webp";
import S3 from "../../../public/assets/images/services/s3.webp";
import S4 from "../../../public/assets/images/services/s4.webp";
import S5 from "../../../public/assets/images/services/s5.webp";
import S6 from "../../../public/assets/images/services/s6.webp";
import consultantFav from "../../../public/assets/images/home/logo.png";

import { ArrowUpRight } from "lucide-react";
import {
  Truck,
  Utensils,
  BadgeDollarSign,
  Briefcase,
  Plane,
  ArrowRight,
} from "lucide-react";
import { FavTop, YoutubeTop } from "./Icons";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  { name: "Logistics License", href: "/#business-activities", icon: Truck },
  { name: "Restaurant License", href: "/#business-activities", icon: Utensils },
  { name: "Gold Trade License", href: "/#business-activities", icon: BadgeDollarSign },
  { name: "Trade License", href: "/#business-activities", icon: Briefcase },
  { name: "Tourism License", href: "/#business-activities", icon: Plane },
];

const licenseTags = [
  { label: "Professional License", href: "/business-license/professional-license" },
  { label: "Commercial License", href: "/business-license/commercial-license" },
  { label: "Industrial License", href: "/business-license/industrial-license" },
  // { label: "Tourism License", href: "/business-license/tourism-license" },
  { label: "E Trader License", href: "/business-license/e-trader-license" },
];

const servicesData = [
  {
    id: 1,
    image: S1,
    title: 'Trademark Registration',
    description: "A trademark protects a brand's name, product, or service from unauthorized use, helping consumers identify authentic goods and their source.",
    link: '/services/trademark-registration'
  },
  
  {
    id: 2,
    image: S2,
    title: 'Find Local Sponser',
    description: "In UAE Mainland LLC formation, a local sponsor holds 51% ownership, while professional companies and representative offices allow 100% foreign ownership",
    link: '/services/sponsorship-services'
  },

  {
    id: 3,
    image: S3,
    title: 'Bank Account Opening',
    description: "Startex financial consultants assist you in opening personal and business bank accounts in Dubai, home to the Middle Easts largest banking sector.",
    link: '/services/open-bank-account'
  },

  {
    id: 4,
    image: S4,
    title: 'Company Liquidation',
    description: "Startex Hub offers company liquidation services for LLCs, offshore, and Free Zone companies in Dubai, helping businesses close operations during financial crises and debt challenges.",
    link: '/services/company-liquidation'
  },

  {
    id: 5,
    image: S5,
    title: 'PRO Services',
    description: "Startex Hub offers expert PRO services, assisting startups and established businesses in the UAE with government document processing and company formation across various zones",
    link: '/services/pro-services'
  },

  {
    id: 6,
    image: S6,
    title: 'Brand protection',
    description: "Startex Hub provides comprehensive brand protection services in Dubai and the UAE, helping clients register intellectual property, monitor brands, and prevent infringement and brand abuse.",
    link: '/services/brand-protection'
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentPath, setCurrentPath] = useState("");
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isLicensingOpen, setIsLicensingOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [isAccountingOpen, setIsAccountingOpen] = useState(false);
  const [isVisaOpen, setIsVisaOpen] = useState(false);
  const pathname = usePathname();
  // UseEffect to set the initial path and listen to route changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Only set overflow hidden when menu is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // Animate header on scroll direction
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY === 0) {
            setShowHeader(true);
          } else if (currentScrollY > lastScrollY.current) {
            setShowHeader(false); // scrolling down
          } else {
            setShowHeader(true); // scrolling up
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <motion.div
          key="header"
          animate={{ y: showHeader ? 0 : -120, opacity: showHeader ? 1 : 0.7 }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          className="w-full z-[100] fixed top-0 left-0 transition-all duration-500 ease-in-out"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className=" px-4 md:px-8 lg:px-[65px]   pt-7 pb-3 ">
            <div className="flex gap-10 md:py-1 py-2 items-center md:rounded-[15px]  rounded-[10px] border border-[#ffffff4f] px-5 md:bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">
              <div className="transition duration-500 hover:drop-shadow-[0_0_15px_rgba(255,173,32,0.8)]">
                <Link href="/">
                  <Image
                    src={MainLogo}
                    alt="main icon"
                    className="w-[170px] md:w-[250px] transition duration-300 ease-in-out hover:scale-105 "
                    width={1144}
                    height={197}
                    priority={true}
                  />
                </Link>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block xl:hidden text-white focus:outline-none z-20 ms-auto"
              >
                {isMenuOpen ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="10"
                    viewBox="0 0 49 10"
                    fill="none"
                  >
                    <path d="M0 0.5H49M0 9.5H49" stroke="white" />
                  </svg>
                )}
              </button>

              {/* Navigation Links */}
              <div
                className={`fixed top-0 left-0  w-full xl:bg-transparent bg-primary xl:h-full  h-screen xl:overflow-visible overflow-auto  shadow-lg transform ${isMenuOpen
                  ? "translate-x-0"
                  : "-translate-x-full xl:translate-x-0"
                  } transition-transform duration-300 xl:relative z-10 xl:shadow-none xl:flex xl:items-center xl:w-full`}
              >
                <ul className="flex flex-col xl:flex-row items-start  xl:items-center gap-[12px] 2xl:gap-12 p-4 xl:h-auto xl:pt-4 pt-20 pe-0 basis-[75%] justify-between">

                  <li className=" group hidden xl:block text-[16px] font-medium text-secondary  hovermenu">
                    <Link
                      href="/business-license"
                      className={`cursor-pointer transition-colors duration-300 hoverlink ${pathname.startsWith("/business-license") ? "text-gradient2" : ""
                        }`}
                    >
                      Licensing
                    </Link>

                    {/* Mega Dropdown */}
                    <div
                      className={`absolute left-[20%] top-full mt-5 transform -translate-x-1/2 w-full max-w-[900px] bg-white shadow-2xl rounded-xl overflow-hidden 
    ${showHeader ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible" : "opacity-0 invisible"} 
    transition-all duration-300 ease-in-out z-50`}
                    >
                      <div className="flex flex-col xl:flex-row w-full gap-6 p-6 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">
                        {/* Left Column */}
                        <div className="w-full xl:w-[50%]">
                          <h3 className="text-lg font-semibold text-white mb-4">Licensing</h3>
                          <div className="space-y-4 relative z-1">
                            <Link
                              href="/business-license/mainland-license"
                              className="block text-white bg-[#0707078c]   rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Mainland License
                            </Link>
                            <Link
                              href="/business-license/freezone-license"
                              className="block text-white bg-[#0707078c]   rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Free Zone License
                            </Link>
                            <Link
                              href="/business-license/offshore-license"
                              className="block text-white bg-[#0707078c]   rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Offshore License
                            </Link>
                          </div>
                          <div className="absolute top-0 right-0 z-[0] left-0 m-auto text-center md:h-full flex justify-center items-center opacity-[0.5]">
                            <Image
                              src={consultantFav}
                              alt="Consultantfav"
                              objectFit="contain"
                              className="w-[full] md:h-[full] "
                            />
                          </div>

                        </div>

                        {/* Right Column - Activities */}
                        {/* bg-[#0707078c] */}
                        <div className="w-full xl:w-1/2   bg-[#0707078c]   rounded-lg px-4 py-4 shadow-inner relative z-1">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-[16px] font-semibold text-white">Activities</h4>
                            <Link
                              href="/#business-activities"
                              className="text-[14px] text-white flex items-center gap-1 hover:text-[#ff572f]"
                            >
                              View All <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>

                          <ul className="space-y-3 text-[15px] font-medium text-white">
                            {activities.map((item, i) => {
                              const Icon = item.icon;
                              return (
                                <li key={i}>
                                  <Link
                                    href={item.href}
                                    className="flex justify-between items-center hover:text-[#ff572f] transition-all"
                                  >
                                    <span className="flex items-center gap-2">
                                      <Icon className="w-4 h-4" />
                                      {item.name}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-white" />
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                      </div>
                    </div>

                  </li>
                  {/* testing */}
                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <div className="flex items-center justify-end relative">
                      {/* <div></div> */}
                      <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block xl:hidden text-white focus:outline-none z-20 ms-auto absolute bottom-2 right-[-4px]"
                      >
                        {isMenuOpen ? (
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="9" x2="19" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line x1="19" y1="9" x2="9" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="49"
                            height="10"
                            viewBox="0 0 49 10"
                            fill="none"
                          >
                            <path d="M0 0.5H49M0 9.5H49" stroke="white" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </li>
                  {/* testing */}


                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'licensing' ? null : 'licensing')}
                      className="w-full text-left flex items-center rounded-lg shadow-sm transition justify-between"
                    >
                      Licensing
                      <span className="ml-2">
                        {openMobileDropdown === 'licensing' ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openMobileDropdown === 'licensing' && (
                      <div className="mt-3 space-y-4 text-sm bg-[#333] rounded-xl p-4 shadow-lg">

                        {/* Mainland License Section */}
                        <div className="bg-[#0707078c]  text-white  rounded-xl p-4 flex justify-between items-start">
                          <div>
                            <Link    onClick={() => setIsMenuOpen(false)} href="/business-license/mainland-license"> <h4 className="text-[17px] font-bold mb-2 leading-snug">Mainland License</h4></Link>
                            <div className="flex flex-wrap gap-2 w-full">
                              {licenseTags.map((item, i) => (
                                <Link
                                  key={i}
                                  href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                  className="text-[11px] px-3 py-1 bg-[#333] rounded-md font-semibold hover:bg-[#ff572f] hover:text-white transition-all w-full"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Free Zone + Offshore License */}
                        <Link
                          href="/business-license/freezone-license"
                             onClick={() => setIsMenuOpen(false)}
                          className="block w-full text-left py-3 px-3 bg-[#0707078c]  rounded-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                        >
                          FREE ZONE LICENSE
                        </Link>
                        <Link
                          href="/business-license/offshore-license"
                             onClick={() => setIsMenuOpen(false)}
                          className="block w-full text-left  py-3 px-3 bg-[#0707078c]  rounded-md font-semibold text-white hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                        >
                          OFFSHORE LICENSE
                        </Link>

                        {/* Activities Section */}
                        <div className="bg-[#0707078c]  p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-white text-[14px]">Activities</h4>
                            <Link
                              href="/#business-activities"
                              className="text-[13px] text-white flex items-center gap-1 hover:text-[#ff572f]"
                            >
                              View All <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <ul className="space-y-2 text-[14px] font-medium text-white">
                            {activities.map((item, i) => {
                              const Icon = item.icon;
                              return (
                                <li key={i}>
                                  <Link
                                    href="/#business-activities"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex justify-between items-center hover:text-[#ff572f] transition-all"
                                  >
                                    <span className="flex items-center gap-2">
                                      <Icon className="w-4 h-4" />
                                      {item.name}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-[#888]" />
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>



                  <li className="group text-[16px] font-medium text-secondary hidden xl:block hovermenu">
                    <Link
                      href="/guide"
                      className={`cursor-pointer transition-colors duration-300 hoverlink ${pathname.startsWith("/guide") ? "text-gradient2" : ""
                        }`}
                    >
                      Guide
                    </Link>

                    {/* Mega Dropdown */}
                    <div className="absolute left-1/4 top-full mt-5 transform -translate-x-1/2 w-[60%] max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                      <div className="flex flex-col xl:flex-row w-full gap-6 p-6 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">
                        {/* Left content */}
                        <div className="w-full ">
                          <Link
                            href="/guide">  <h3 className="text-lg font-semibold text-white mb-4">Where to Start</h3></Link>
                          <div className="space-y-2">
                            <Link
                              href="/guide/where"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Where
                            </Link>
                            <Link
                              href="/guide/how"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              How
                            </Link>
                            <Link
                              href="/guide/why"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Why
                            </Link>
                          </div>
                        </div>


                      </div>
                    </div>

                  </li>

                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'guide' ? null : 'guide')}
                      className="w-full text-left flex items-center justify-between"
                    >
                      Guide
                      <span className="ml-2">
                        {openMobileDropdown === 'guide' ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openMobileDropdown === 'guide' && (
                      <div className="mt-2 space-y-3 text-sm bg-[#333333] rounded-lg p-4 w-full">
                        <Link
                          href="/guide"    onClick={() => setIsMenuOpen(false)}>   <p className="text-[14px] font-semibold mb-2 text-white">Where to Start</p></Link>

                        <Link
                          href="/guide/where"
                             onClick={() => setIsMenuOpen(false)}
                          className="block text-white bg-[#0707078c]   rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                        >
                          Where
                        </Link>
                        <Link
                          href="/guide/how"
                             onClick={() => setIsMenuOpen(false)}
                          className="block text-white bg-[#0707078c]   rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                        >
                          How
                        </Link>
                        <Link
                          href="/guide/why"
                             onClick={() => setIsMenuOpen(false)}
                          className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                        >
                          Why
                        </Link>
                      </div>
                    )}
                  </li>




                  <li className="group text-[16px] font-medium text-secondary hidden xl:block hovermenu">
                    <Link
                      href="/services"
                      className={`cursor-pointer transition-colors duration-300 hoverlink ${pathname.startsWith("/services") ? "text-gradient2" : ""
                        }`}
                    >
                      Services
                    </Link>

                    {/* Mega Dropdown */}
                    <div className="absolute left-1/2 top-full mt-5 transform -translate-x-1/2  w-full max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                      <div className="flex flex-col xl:flex-row w-full gap-6 p-6 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">
                        {/* Left content */}
                        <div className="w-1/2 ">
                          <Link
                            href="/services" > <h3 className="text-lg font-semibold text-white mb-4"> Business  Services</h3></Link>
                          <div className="space-y-2">
                            <Link
                              href="/services/trademark-registration"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Trademark Registration
                            </Link>
                            <Link
                              href="/services/sponsorship-services"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Find Local Sponsor
                            </Link>
                            <Link
                              href="/services/open-bank-account"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Bank Account Opening
                            </Link>
                          </div>
                        </div>

                        <div className="w-1/2">
                          <div className="space-y-2">
                            <Link
                              href="/services/company-liquidation"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Company Liquidation
                            </Link>
                            <Link
                              href="/services/pro-services"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              PRO Services
                            </Link>
                            <Link
                              href="/services/brand-protection"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Brand protection
                            </Link>

                          </div>
                        </div>


                      </div>
                    </div>
                  </li>

                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'services' ? null : 'services')}
                      className="w-full text-left flex  items-center justify-between"
                    >
                      Services
                      <span className="ml-2">
                        {openMobileDropdown === 'services' ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openMobileDropdown === 'services' && (
                      <div className="mt-3 bg-[#333333] rounded-xl p-4 space-y-4 text-[#292929]">

                        {/* Section Heading */}
                        <div>
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/services" > <h4 className="text-[15px] font-semibold mb-3 text-white">Business Services</h4></Link>


                          <div className="space-y-2">
                            <Link
                               onClick={() => setIsMenuOpen(false)}
                              href="/services/trademark-registration"
                              className="block text-white bg-[#0707078c]  text-[14px]  rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            > Trademark Registration

                            </Link>
                            <Link
                               onClick={() => setIsMenuOpen(false)}
                              href="/services/sponsorship-services"
                              className="block text-white bg-[#0707078c]  text-[14px]  rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Find Local Sponsor
                            </Link>
                            <Link
                               onClick={() => setIsMenuOpen(false)}
                              href="/services/open-bank-account"
                              className="block text-white bg-[#0707078c]   text-[14px]  rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Bank Account Opening
                            </Link>
                          </div>
                        </div>

                        {/* Second Column */}
                        <div className="space-y-2 pt-2 ">
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/services/company-liquidation"
                            className="block text-white bg-[#0707078c]   text-[14px]  rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Company Liquidation
                          </Link>
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/services/pro-services"
                            className="block text-white bg-[#0707078c]  text-[14px]  rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            PRO Services
                          </Link>
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/services/brand-protection"
                            className="block text-white bg-[#0707078c]   text-[14px]  rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Brand Protection
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>





                  <li className="group text-[16px] font-medium text-secondary hidden xl:block hovermenu">
                    <Link
                      href="/workspace"
                      className={`cursor-pointer transition-colors duration-300 hoverlink ${pathname.startsWith("/workspace") ? "text-gradient2" : ""
                        }`}
                    >
                      Workspace
                    </Link>

                    {/* Mega Dropdown */}
                    <div className="absolute left-1/2 top-full mt-5 transform -translate-x-1/2 w-full max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                      <div className="flex flex-col xl:flex-row w-full gap-6 p-6 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">

                        <div className="w-full xl:w-1/2">
                          <Link
                            href="/workspace"> <h3 className="text-lg font-semibold text-white mb-4">Workspace Options</h3></Link>


                          <div className="space-y-2">
                            <Link
                              href="/workspace/business-center"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Business Center
                            </Link>
                            <Link
                              href="/workspace/virtual-office"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Virtual Office
                            </Link>
                            <Link
                              href="/workspace/flexi-desk"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                            >
                              Flexi Desk Office
                            </Link>
                          </div>
                        </div>

                        {/* <div className="w-full md:w-1/2 bg-white rounded-lg px-4 py-4 shadow-inner"> */}
                        <div className="space-y-2 w-[50%]">
                          <Link
                            href="/workspace/rent-cabin"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                          >
                            Rent a Cabin in Dubai
                          </Link>

                        </div>
                        {/* </div> */}

                      </div>
                    </div>
                  </li>


                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'workspace' ? null : 'workspace')}
                      className="w-full text-left flex items-center justify-between"
                    >
                      Workspace
                      <span className="ml-2">
                        {openMobileDropdown === 'workspace' ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openMobileDropdown === 'workspace' && (
                      <div className="mt-3 bg-[#333333] rounded-xl p-4 space-y-3 text-white">
                        {/* Highlight Block - Business Center */}
                        <Link
                           onClick={() => setIsMenuOpen(false)}
                          href="/workspace"> <h3 className="text-[14px] font-semibold text-white mb-4">Workspace Options</h3></Link>

                        {/* Other Links */}
                        <div className="space-y-2">
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/workspace/business-center"
                            className="block text-sm text-white bg-[#0707078c]   rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Business Center
                          </Link>
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/workspace/virtual-office"
                            className="block text-sm text-white bg-[#0707078c]   rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Virtual Office
                          </Link>
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/workspace/flexi-desk"
                            className="block text-sm text-white bg-[#0707078c]  rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Flexi Desk Office
                          </Link>
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            href="/workspace/rent-cabin"
                            className="block text-sm text-white bg-[#0707078c]   rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Rent a Cabin in Dubai
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>




                  <li className="group text-[16px] font-medium text-secondary hidden xl:block hovermenu">
                    <Link
                      href="/accounting"
                      className={`cursor-pointer transition-colors duration-300 hoverlink ${pathname.startsWith("/accounting") ? "text-gradient2" : ""
                        }`}

                    >
                      Accounting
                    </Link>

                    {/* Mega Dropdown */}
                    <div className="absolute left-1/2 top-full mt-5 transform -translate-x-1/2 w-full max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                      <div className="flex flex-col xl:flex-row w-full gap-6 p-6 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">

                        <div className="w-full xl:w-1/2">
                          <Link
                            href="/accounting">  <h3 className="text-lg font-semibold text-white mb-4">Accounting Services</h3></Link>

                          <div className="space-y-2">
                            <Link
                              href="/accounting/vat-registration"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              VAT Registration
                            </Link>
                            <Link
                              href="/accounting/accounting-book-keeping"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Accounting and Bookkeeping
                            </Link>
                            <Link
                              href="/accounting/auditing-services"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Auditing Services
                            </Link>
                          </div>
                        </div>

                        <div className="w-full xl:w-1/2 space-y-2">
                          <Link
                            href="/accounting/vat-return"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            VAT Return
                          </Link>
                          <Link
                            href="/accounting/cfo-services"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            CFO Services
                          </Link>
                        </div>

                      </div>
                    </div>
                  </li>


                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'accounting' ? null : 'accounting')}
                      className="w-full text-left flex  items-center justify-between"
                    >
                      Accounting
                      <span className="ml-2">
                        {openMobileDropdown === 'accounting' ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openMobileDropdown === 'accounting' && (
                      <div className="mt-3 bg-[#333333] rounded-xl p-4 space-y-3 text-[#292929]">
                        <Link
                           onClick={() => setIsMenuOpen(false)}
                          href="/accounting">  <h3 className="text-[14px] font-semibold text-white mb-4">Accounting Services</h3></Link>
                        {[
                          { name: "VAT Registration", href: "/accounting/vat-registration" },
                          { name: "Accounting and Bookkeeping", href: "/accounting/accounting-book-keeping" },
                          { name: "Auditing Services", href: "/accounting/auditing-services" },
                          { name: "VAT Return", href: "/accounting/vat-return" },
                          { name: "CFO Services", href: "/accounting/cfo-services" },
                        ].map((item, i) => (
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            key={i}
                            href={item.href}
                            className="block text-sm text-white bg-[#0707078c]  rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>



                  <li className="group text-[16px] font-medium text-secondary hidden xl:block hovermenu">
                    <Link
                      href="/visa"
                      className={`cursor-pointer transition-colors duration-300 hoverlink ${pathname.startsWith("/visa") ? "text-gradient2" : ""
                        }`}
                    >
                      Visa
                    </Link>

                    {/* Mega Dropdown */}
                    <div className="absolute left-1/2 top-full mt-5 transform -translate-x-1/2 w-full max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                      <div className="flex flex-col xl:flex-row w-full gap-6 p-6 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131]">

                        <div className="w-full xl:w-1/2">
                          <Link
                            href="/visa">  <h3 className="text-lg font-semibold text-white mb-4">Visa Services</h3></Link>
                          <div className="space-y-2">
                            <Link
                              href="/visa/business"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Business Visa
                            </Link>
                            <Link
                              href="/visa/tourist"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Tourist Visa
                            </Link>
                            <Link
                              href="/visa/freelance"
                              className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                            >
                              Freelance Visa
                            </Link>
                          </div>
                        </div>

                        <div className="w-full xl:w-1/2 space-y-2">
                          <Link
                            href="/visa/investor"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Investor Visa
                          </Link>
                          <Link
                            href="/visa/family"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Family Visa
                          </Link>
                          <Link
                            href="/visa/maid"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Maid Visa
                          </Link>
                          <Link
                            href="/visa/work-visa"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Work Visa
                          </Link>
                          <Link
                            href="/visa/dubai-investor"
                            className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            Dubai Investor Visa
                          </Link>
                        </div>

                      </div>
                    </div>
                  </li>

                  <li className="block xl:hidden text-[16px] font-medium text-secondary w-[90%]">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === 'visa' ? null : 'visa')}
                      className="w-full text-left flex items-center justify-between"
                    >
                      Visa
                      <span className="ml-2">
                        {openMobileDropdown === 'visa' ? (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {openMobileDropdown === 'visa' && (
                      <div className="mt-3 bg-[#333333] rounded-xl p-4 space-y-3 text-white">
                        <Link
                           onClick={() => setIsMenuOpen(false)}
                          href="/visa">  <h3 className="text-[14px] font-semibold text-white mb-4">Visa Services</h3></Link>
                        {[
                          { name: "Business Visa", href: "/visa/business" },
                          { name: "Tourist Visa", href: "/visa/tourist" },
                          { name: "Freelance Visa", href: "/visa/freelance" },
                          { name: "Investor Visa", href: "/visa/investor" },
                          { name: "Family Visa", href: "/visa/family" },
                          { name: "Maid Visa", href: "/visa/maid" },
                          { name: "Work Visa", href: "/visa/work-visa" },
                          { name: "Dubai Investor Visa", href: "/visa/dubai-investor" },
                        ].map((item, i) => (
                          <Link
                             onClick={() => setIsMenuOpen(false)}
                            key={i}
                            href={item.href}
                            className="block text-sm text-white bg-[#0707078c]  rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}

                      </div>
                    )}
                  </li>




                  <li className="text-[16px] hidden xl:block text-secondary xl:text-[16px] font-medium relative group hovermenu">
                    <Link
                      href="/"
                 
                      className={`hover:text-gradient transition-colors duration-300 hoverlink ${["/about", "/blog", "/careers"].some(path => pathname.startsWith(path))
                          ? "text-gradient2"
                          : ""
                        }`}
                    >
                      Company
                    </Link>

                    {/* Mega Dropdown */}
                    <div className="absolute left-1/2 top-full mt-12 transform -translate-x-1/2 w-[300px] bg-white shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                      <div className="flex flex-col w-full p-4 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.2)_100%),linear-gradient(90deg,_rgba(64,64,64,0.48)_0%,_rgba(77,77,77,0.48)_100%)] bg-[#313131] space-y-2">

                        <Link
                     
                          href="/about"
                          className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                        >
                          About Us
                        </Link>

                        <Link
                          href="/blog"
                        
                          className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                        >
                          Blogs
                        </Link>

                        <Link
                          href="/careers"
                          
                          className="block text-white bg-[#0707078c]  rounded-lg px-4 py-3 hover:bg-gradient-to-r hover:from-[#ff572f] hover:to-[#ffad20] hover:text-white transition-all duration-300"
                        >
                          Careers
                        </Link>

                      </div>
                    </div>
                  </li>


                  <li className="text-[16px] block xl:hidden hover-text-gradient  text-secondary xl:text-[16px] font-">
                    <Link
                      href="/about"
                    
                      className={` ${currentPath === "/about" && "text-gradient"
                        }   `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="text-[16px] block xl:hidden hover-text-gradient  text-secondary xl:text-[16px] font-">
                    <Link
                      href="/blog"
                      className={` ${currentPath === "/blog" && "text-gradient"
                        }   `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="text-[16px] block xl:hidden hover-text-gradient  text-secondary xl:text-[16px] font-">
                    <Link
                      href="/careers"
                      className={` ${currentPath === "/careers" && "text-gradient"
                        }   `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers
                    </Link>
                  </li>


                </ul>

                <ul className="flex ms-auto  xl:flex-row items-start  xl:items-center gap-6 xl:gap-4 p-4 xl:h-auto  xl:pt-4 pt-20 pe-0">
                  <Link href="https://www.youtube.com/@StartexHub" target="_blank" className="">
                    <li className="text-[16px] text-secondary hover:bg-white hover:text-primary xl:text-[16px] border border-[#BFB6C3] rounded-[5px] px-3 py-2 flex items-center gap-2">
                      <YoutubeTop /> Watch
                    </li>
                  </Link>
                  <Link href="/contact" className="">

                    <li className="text-[16px] text-secondary hover:bg-white hover:text-primary xl:text-[16px] border border-[#BFB6C3] rounded-[5px] px-3 py-2 flex items-center gap-2">
                      <FavTop /> Support
                    </li>
                  </Link>

                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
