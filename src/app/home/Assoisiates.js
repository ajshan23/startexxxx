'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// Assets
// import P1 from "../../../public/assets/images/partners/2.png";
// import P2 from "../../../public/assets/images/partners/3.png";
// import P3 from "../../../public/assets/images/partners/4.png";

// import P5 from "../../../public/assets/images/partners/6.png";
// import P6 from "../../../public/assets/images/partners/7.png";
// import P7 from "../../../public/assets/images/partners/8.png";
// import P8 from "../../../public/assets/images/partners/9.png";
// import P9 from "../../../public/assets/images/partners/10.png";
// import P10 from "../../../public/assets/images/partners/11.png";
// import P11 from "../../../public/assets/images/partners/1.png";
// import P12 from "../../../public/assets/images/partners/12.png";
// import P13 from "../../../public/assets/images/partners/13.png";
// import P14 from "../../../public/assets/images/partners/14.png";
// import P15 from "../../../public/assets/images/partners/15.png";


import P1 from "../../../public/assets/images/partners/new-1.webp";
import P2 from "../../../public/assets/images/partners/new-2.webp";
import P3 from "../../../public/assets/images/partners/new-3.webp";
import P4 from "../../../public/assets/images/partners/new-4.webp";
import P5 from "../../../public/assets/images/partners/new-5.webp";
import P6 from "../../../public/assets/images/partners/new-6.webp";  
import P7 from "../../../public/assets/images/partners/new-7.webp";
import P8 from "../../../public/assets/images/partners/new-8.webp";
import P9 from "../../../public/assets/images/partners/new-9.webp";
import P10 from "../../../public/assets/images/partners/new-10.webp";
import P11 from "../../../public/assets/images/partners/new-11.webp";
import P12 from "../../../public/assets/images/partners/new-12.webp";
import P13 from "../../../public/assets/images/partners/new-13.webp";
import P14 from "../../../public/assets/images/partners/new-14.webp";
import P15 from "../../../public/assets/images/partners/new-15.webp";
import P16 from "../../../public/assets/images/partners/new-16.webp";











const youtubeData = [
  { thumbnail: P1 },
  { thumbnail: P2 },
  { thumbnail: P3 },
  { thumbnail: P4 },
  { thumbnail: P5 },
  { thumbnail: P6 },
  { thumbnail: P7 },
  { thumbnail: P8 },
  { thumbnail: P9 },
  { thumbnail: P10 },
  { thumbnail: P11 },
  { thumbnail: P12 },
  { thumbnail: P13 },
  { thumbnail: P14 },
  { thumbnail: P15 },
  { thumbnail: P16 },




];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: custom * 0.2 },
  }),
};

function Assoisiates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className='px-4 lg:px-[90px] py-10 pb-10' ref={sectionRef}>
      <motion.p
        className='text-secondary text-[16px]'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        Proudly associated with.
      </motion.p>

      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] md:mb-10'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
      >
        Leading Conglomerates
      </motion.h3>

      <motion.div
        className='banking-flex pt-5'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={2}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={7}
          spaceBetween={10}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
            breakpoints={{
          320: {
            slidesPerView: 2.2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10, // Optional: larger spacing for desktop
          },
        }}
        >
          {youtubeData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden shadow-md group">
                <Image
                  src={item.thumbnail}
                  alt={`logo-${index}`}
                  className=" md:w-full w-[250px] object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Assoisiates;
