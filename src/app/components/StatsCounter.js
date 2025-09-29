"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import CountUp from "./CountUp";

const stats = [
  { value: "100", label: "Client Satisfaction Rate", sign: '%' },
  { value: "10K+", label: "Successful Business Establishment", sign: 'K+' },
  { value: "20+", label: "Government Conglomerate Partnership", sign: '+' },
  { value: "20+", label: "Industry-Experienced Consultants", sign: '+' },
  { value: "1999", label: "Crafting Empowers in UAE", sign: '' },
];

const StatItem = ({ stat, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
    className="text-center"
  >
    <h6 className="text-3xl md:text-4xl font-[300] text-[#F9CDAF]">
      <CountUp
        from={0}
        to={stat.value}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
      {stat.sign}
    </h6>
    <p className="text-sm md:text-[16px] text-[#F9CDAF] mt-2 w-full">
      {stat.label}
    </p>
  </motion.div>
);

const StatsCounter = () => (
  <div className="w-full py-10 px-4 lg:px-[90px] h-full">
    {/* Mobile/Tablet Layout - Column */}
    <div className="block md:hidden">
      <div className="flex flex-col space-y-8">
        {stats.map((stat, idx) => (
          <StatItem key={idx} stat={stat} idx={idx} />
        ))}
      </div>
    </div>

    {/* Desktop Layout - Swiper */}
    <div className="hidden md:block h-full">
      <div className="flex items-center h-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={5}
        >
          {stats.map((stat, idx) => (
            <SwiperSlide key={idx}>
              <StatItem stat={stat} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);

export default StatsCounter;
