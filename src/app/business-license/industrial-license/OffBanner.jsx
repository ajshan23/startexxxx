"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import grad from "../../../../public/assets/images/home/gr.png";
import BannerImg from "../../../../public/assets/images/licensing/i-banner.webp";
import ConsultantModal from "../../components/ConsultantModal"; // ✅ adjust path if needed

const getNext7Days = () => {
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    return {
      date: String(nextDate.getDate()).padStart(2, '0'),
      day: weekdays[nextDate.getDay()],
      fullDate: nextDate.toISOString().split("T")[0],
    };
  });
};

function OffBanner() {
  const days = useMemo(() => getNext7Days(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(days[0].fullDate);

  return (
    <div className="bg-primary h-auto relative pb-10">
      <div className="md:flex pt-10 items-center main-pt px-4 md:px-8 lg:px-[90px] relative z-40 gap-20">
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h6 className="md:text-[18px] text-[16px] font-[300] text-gradient">
              Explore Industrial License Options in Dubai
            </h6>
            <h1 className="md:text-[50px] text-[27px] font-[500] pt-3 text-gradient">
         Industrial License Services
            </h1>
            <p className="font-[300] md:text-[17px] text-[14px] text-secondary pt-3">
         With a Dubai industrial license, empower your industrial vision to attain success in your endeavors.
            </p>
            <div className="pt-10 flex gap-8">
              <button onClick={() => setIsOpen(true)} className="gr-btn">
                Schedule meetup
              </button>
            </div>

            {/* ✅ Modal Integration */}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          <Image
            src={BannerImg}
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
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default OffBanner;
