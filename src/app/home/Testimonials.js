'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import testiCcard from '../../../public/assets/images/home/testi-card.png';
import Fav from "../../../public/assets/images/home/fav.svg";

const testimonials = [
  {
    name: 'Shafad Khan',
    quote:
      '“Startex Hub made my UAE business setup smooth and hassle-free. Their expert team handled everything professionally. Highly recommended!”',
  },
  {
    name: 'John Aju',
    quote:
      '“Startex Hub made UAE visa processing easy and smooth. Their expert team is efficient and reliable. Highly recommended!”',
  },
  {
    name: 'Arish Isharath',
    quote:
      '“With Startex Hub, securing my UAE Family Visa felt effortless. Their experts were organized, supportive, skilled, and punctual. Strongly recommend!”',
  },
  {
    name: 'Naila',
    quote:
      '“Startex Hub simplified our UAE Family Visa process for us. Advisors were prompt, trustworthy, and knowledgeable every step. Absolutely recommended!"',
  },
  {
    name: 'Muhsina',
    quote:
      '“Startex Hub handled my UAE Family Visa swiftly and seamlessly. The staff proved courteous, dependable, and expert throughout. Outstanding service!”',
  },
  {
    name: 'Raniya',
    quote:
      '“Startex Hub made my UAE Family Visa process quick and stress-free. Their team was attentive, trustworthy, and highly professional. Truly recommended!”',
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

function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10" ref={sectionRef} id='testimonial'>
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
        <p className="text-secondary text-[16px]">Testimonials.</p>
      </motion.div>

      <motion.div
        className="pt-8"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={1}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: false }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            768: {
              slidesPerView: 3,
              
            },
          }}
          className="px-6"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative w-full h-[240px] rounded-xl overflow-hidden text-white"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index + 2}
              >
                <Image
                  src={testiCcard}
                  alt="testimonial card"
                  fill
                  quality={100}
                  className="md:object-cover"
                />
                <div className="relative z-10 md:h-auto sm:min-h-[260p] h-full w-full p-3 xl:p-6 flex flex-col justify-between ">
                  <p className="font-light md:text-[18px] text-[15px]">{item.quote}</p>
                  <h6 className="font-semibold mt-4">{item.name}</h6>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Testimonials;
