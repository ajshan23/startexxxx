// components/VerticalSlider.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import consult from "../../../public/assets/images/home/c1.png"
import cu1 from '../../../public/assets/images/consultsnt/aiswarya.webp'
import cu2 from '../../../public/assets/images/consultsnt/zul-fathima.webp'
import cu3 from '../../../public/assets/images/consultsnt/thasla.webp'
import cu4 from '../../../public/assets/images/consultsnt/mona-riza.webp'
import cu5 from '../../../public/assets/images/consultsnt/afrin.webp'

import Image from 'next/image';
import ConsultantModal from './ConsultantModal';
import { useState } from 'react';

export const consultants = [
  {
    title: 'License Consultant',
    image: cu1,
  },
  {
    title: 'Pro Consultant',
    image: cu2,
  },
  {
    title: 'License Consultant',
    image: cu3,
  },
  {
    title: 'Pro Consultant',
    image: cu4,
  },
  {
    title: 'License Consultant',
    image: cu5,
  },
  {
    title: 'License Consultant',
    image: cu3,
  },
];

export default function VerticalSlider() {
      const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative h-auto w-full flex items-center justify-between lg:justify-start rounded-[18px]">
      <div className="relative md:w-[550px] w-full md:h-[220px] h-[200px] ">
        <Swiper
          direction="vertical"
          slidesPerView={1}
        spaceBetween={20}
          
          pagination={{
            clickable: true,
            el: '.custom-vertical-pagination',
          }}
          mousewheel
          modules={[Pagination, Mousewheel]}
          className="w-full h-full rounded-[18px]"
        >
          {/* Group slides into rows of 3 */}
          {Array.from({ length: Math.ceil(consultants.length / 3) }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-between md:gap-5 lg:gap-6 gap-2">
                {consultants.slice(i * 3, i * 3 + 3).map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setIsOpen(true)}
                    className=" rounded-[18px] w-1/3 relative overflow-hidden md:h-[220px] h-[200px] flex flex-col justify-end px-4 pb-4 shadow-lg object-fit"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      quality={100}
                      className="absolute top-0 left-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="relative z-20 text-white flex justify-between items-center">
                      <p className=" text-[14px] font-[300]">{item.title}</p>
                      <span className="text-2xl">{'>'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container, now just outside the slider cards */}
        <div className="custom-vertical-pagination" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 20 }} />
      </div>
      <ConsultantModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
