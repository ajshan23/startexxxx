"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import consultantImg from "../../../public/assets/images/home/consultant.png";
import consultantFav from "../../../public/assets/images/home/fav-i.png";
import ConsultantModal from "./ConsultantModal";

export default function ConsultantBanner() {

    const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // ✅ Add this

  return (
    <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#FCD1B1] rounded-3xl pt-5 pb-5 md:pt-0 md:pb-0 px-5 flex flex-col md:flex-row items-center justify-between gap-8 relative"
      >
        {/* Left Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-[50px] font-[400] text-[#DC441A] leading-tight">
            Connect with our <br />
            <span className="font-[400]">expert consultants</span>
          </h2>
        </motion.div>

        {/* Middle Image */}
        <motion.div
          className="relative w-48 h-64 md:w-56 md:h-72 z-30"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={consultantImg}
            alt="Consultant"
            layout="fill"
            objectFit="contain"
            className="z-10 relative"
          />
          <div className="absolute inset-0 m-auto w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-transparent border-b-[#f9be95] opacity-50 -z-10 rotate-[30deg]" />
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 relative z-50"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C13A17] mb-4 text-sm md:text-left">
            We have tailored our services to support your business’s growth. <br />
            Approach us to launch efficiently and effectively.
          </p>
         <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 bg-[#2A2328] text-white px-5 py-2 rounded-md 
                    transition-all duration-300 ease-in-out 
                    hover:scale-105 hover:shadow-md"
        >
          Schedule meeting
        </button>
        </motion.div>

        {/* Decorative Image */}
        <motion.div
          className="absolute top-0 right-0 z-20 left-0 m-auto text-center md:h-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={consultantFav}
            alt="Consultantfav"
            objectFit="contain"
            className="w-[250px] md:h-full me-10"
          />
        </motion.div>
      </motion.section>

    <ConsultantModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}
