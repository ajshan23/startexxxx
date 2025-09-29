'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import videoThumbImg from '../../../public/assets/images/home/video-thumb.jpg';
import videoThumbImg2 from '../../../public/assets/images/home/video-thumb2.jpg';
import Fav from "../../../public/assets/images/home/fav.svg";

const testimonials = [
  {
    videoThumb: videoThumbImg,
    videoUrl: 'https://www.example.com/victoria-video.mp4',
    quote: 'I strongly endorse Startex Business Setup Services for anyone planning to start a business in Dubai. Thank you, Startex!',
    name: 'Mr. Daniel Brooks, Director, GreenCore Packaging Ltd.',
  },
  {
    videoThumb: videoThumbImg2,
    videoUrl: 'https://www.example.com/cheetham-video.mp4',
    quote: 'Great service and professional team! They really helped us with smooth company setup.',
    name: 'Mr. Alex Turner, Managing Director, NexaPack Solutions Ltd.',
  },
  {
    videoThumb: videoThumbImg,
    videoUrl: 'https://www.example.com/victoria-video.mp4',
    quote: 'I strongly endorse Startex Business Setup Services for anyone planning to start a business in Dubai. Thank you, Startex!',
       name: 'Mr. Daniel Brooks, Director, GreenCore Packaging Ltd.',

  },
  {
    videoThumb: videoThumbImg2,
    videoUrl: 'https://www.example.com/cheetham-video.mp4',
    quote: 'Great service and professional team! They really helped us with smooth company setup.',
       name: 'Mr. Alex Turner, Managing Director, NexaPack Solutions Ltd.',

  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: custom * 0.2 },
  }),
};

function VideoTesti() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div ref={sectionRef} className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <motion.div
        className='flex gap-2 items-center'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0}
      >
        <Image
          src={Fav}
          alt="HomeLogo"
          width={300}
          height={300}
          className="w-[20px] h-[20px]"
        />
        <p className="text-secondary text-[16px]">Inspiring success stories.</p>
      </motion.div>

      <motion.h3
        className='text-gradient md:text-[50px] text-[25px] mb-10 pt-4'
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={1}
      >
        From Startup Dreams to Business Triumph
      </motion.h3>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={2}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2.2 },
          }}
          className="px-6"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col md:flex-row items-stretch bg-white rounded-xl overflow-hidden shadow-lg md:h-[360px] h-[450px]"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index + 3}
              >
                <div className="w-full md:w-1/2 spect-video md:aspect-auto relative">
                  {playingIndex === index ? (
                    <video
                      src={item.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="relative cursor-pointer h-full"
                      onClick={() => setPlayingIndex(index)}
                    >
                      <Image
                        width={500}
                        height={500}
                        src={item.videoThumb}
                        alt="video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-black"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <p className="text-gray-700 italic mb-4">“{item.quote}”</p>
                  <hr className="my-2" />
                  <p className="font-semibold text-gray-800">{item.name}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default VideoTesti;
