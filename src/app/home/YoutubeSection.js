'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import YT from "../../../public/assets/images/home/yt.png";
import YT2 from "../../../public/assets/images/home/yt2.png";
import YT3 from "../../../public/assets/images/home/yt3.png";
import grad from "../../../public/assets/images/home/yt-bg.png";
import { YTB } from '../components/Icons';

const youtubeData = [
  {
    title: 'Arabic',
    thumbnail: YT,
    playlistUrl: 'https://www.youtube.com/shorts/D-UJhwBLMls',
  },
  {
    title: 'Malayalam',
    thumbnail: YT2,
    playlistUrl: 'https://www.youtube.com/shorts/Wp59Yl8FIKU',
  },
  {
    title: 'Tamil',
    thumbnail: YT3,
    playlistUrl: 'https://www.youtube.com/shorts/QCOgelSIzLI',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: custom * 0.2,
    },
  }),
};

export default function YoutubeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section
      ref={ref}
      className="text-white md:py-12 px-0 md:px-8 lg:px-[90px] relative overflow-hidden"
      id='youtube-section'
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
        className="relative z-10"
      >
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 ms-2">
          <YTB />
          YouTube Channels
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
        className="relative z-10"
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={24}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {youtubeData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index + 2}
                className="relative overflow-hidden shadow-md group"
              >
                <Link href={item.playlistUrl} target="_blank">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full object-cover"
                  />
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={grad}
          alt="Background Gradient"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
