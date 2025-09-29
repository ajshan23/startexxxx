'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from 'framer-motion'; // ✅ Import framer-motion

import Image from 'next/image';
import YT from "../../../public/assets/images/partners/banking-1.webp"
import YT2 from "../../../public/assets/images/partners/banking-2.webp"
import YT3 from "../../../public/assets/images/partners/banking-3.webp"
import YT4 from "../../../public/assets/images/partners/banking-4.webp"
import YT5 from "../../../public/assets/images/partners/banking-5.webp"
import YT6 from "../../../public/assets/images/partners/banking-6.webp"
import YT7 from "../../../public/assets/images/partners/banking-7.webp"
import YT8 from "../../../public/assets/images/partners/banking-8.webp"
import YT9 from "../../../public/assets/images/partners/banking-9.webp"
import YT10 from "../../../public/assets/images/partners/banking-10.webp"




const youtubeData = [
  { thumbnail: YT }, { thumbnail: YT2 }, { thumbnail: YT3 },
  { thumbnail: YT4 }, { thumbnail: YT5 }, { thumbnail: YT6 },
  { thumbnail: YT7 }, { thumbnail: YT8 }, { thumbnail: YT9 }, { thumbnail: YT10 }, 
];

function BankingPartners() {
  return (
    <motion.div
      className='px-4 lg:px-[90px] py-10 pb-10'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className='text-gradient md:text-[50px] text-[30px] font-[500]'>Banking Partners</h3>

      <motion.div
        className='banking-flex pt-10'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={7}
            spaceBetween={10}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            allowTouchMove={false}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
                 breakpoints={{
  320: {
    slidesPerView: 2.1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 2.2,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 10, 
  },
}}
          >
            {youtubeData.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative overflow-hidden shadow-md group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.thumbnail}
                    alt={`YouTube Slide ${index + 1}`}
                    className="w-full object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BankingPartners;
