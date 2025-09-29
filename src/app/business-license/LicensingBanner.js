"use client";

import { useState, useEffect, useMemo } from "react";

import { motion } from "framer-motion";
import BusinessTabs from "../components/BusinessTabs";
import grad from "../../../public/assets/images/home/gr.png"
import LicensingBannerImg from "../../../public/assets/images/licensing/dubai-banner.webp";

import Image from "next/image";
import Link from "next/link";
import ConsultantModal from "../components/ConsultantModal";
const getNext7Days = () => {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    const today = new Date()
    return Array.from({ length: 7 }, (_, i) => {
        const nextDate = new Date(today)
        nextDate.setDate(today.getDate() + i)
        return {
            date: String(nextDate.getDate()).padStart(2, '0'),
            day: weekdays[nextDate.getDay()],
            fullDate: nextDate.toISOString().split('T')[0] // optional for future use
        }
    })
}
function LicensingBanner() {


    const days = useMemo(() => getNext7Days(), [])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(days[0].fullDate)



    return (
        <div className="bg-primary h-auto relative pb-10">
            <div className="md:flex pt-10 items-center main-pt px-4 md:px-8 lg:px-[90px] relative z-40 gap-20">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // starts slightly below with 0 opacity
                        animate={{ opacity: 1, y: 0 }} // animates to full opacity & original position
                        transition={{ duration: 1, ease: "easeOut" }} // smooth timing
                    >
                        <h6 className="md:text-[18px] text-[16px] font-[300] text-gradient">
                            Every great business starts with the right license
                        </h6>
                        <h1 className="md:text-[50px] text-[27px] font-[500] pt-3 text-gradient">
                            Business License  <br />
                            Services
                        </h1>
                        <p className="font-[300] md:text-[17px] text-[14px] text-secondary pt-3">
                            Unlock your entrepreneurial journey with a business license in Dubai! Choose from options like commercial, industrial, or professional licenses, and launch your venture in Dubai’s thriving economy.
                        </p>
                        <div className="pt-10 flex gap-8">
                            <Link href="#business-licenses">    <button className="gr-btn">Business Licenses</button></Link>
                            <button onClick={() => setIsOpen(true)} className="br-gr-btn">Schedule meetup</button>
                        </div>
                        <ConsultantModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />
                    </motion.div>
                </div>
                <div className="md:w-1/2 ms-auto pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // starts slightly below with 0 opacity
                        animate={{ opacity: 1, y: 0 }} // animates to full opacity & original position
                        transition={{ duration: 1, ease: "easeOut" }} // smooth timing
                    >
                        <Image
                            src={LicensingBannerImg}
                            alt="LicensingBanner"
                            width={850}
                            height={850}
                            className="object-contain rounded-2xl"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full ">
                <Image
                    src={grad}
                    alt="HomeLogo"
                    width={1000}
                    height={1000}
                    className=" w-full h-full "
                />
            </div>
        </div>
    );
}

export default LicensingBanner;
