"use client";
import Image from 'next/image';
import React from 'react';
import cardL from "../../../public/assets/images/home/l-card.png";
import Link from 'next/link';
import TitleCard from '../components/AnimatedTypeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const licenses = [
  { number: '01', title: 'Professional License', desc: 'Owning a professional license...', link: '/business-license/professional-license', icon: { src: '/assets/icons/license.svg', width: 45, height: 57 } },
  { number: '02', title: 'Commercial License', desc: 'Owning a professional license...', link: '/business-license/commercial-license', icon:  { src: '/assets/icons/commerce.svg', width: 45, height: 45 } },
  { number: '03', title: 'Industrial License', desc: 'Owning a professional license...', link: '/business-license/industrial-license', icon: { src: '/assets/icons/industry.svg', width: 45, height: 45 }  },
  { number: '04', title: 'E-Trader License', desc: 'Owning a professional license...', link: '/business-license/e-trader-license', icon:  { src: '/assets/icons/trending-up.svg', width: 45, height: 45 } }
];

function TypesofLicense() {
  return (
    <div className='px-4 pe-0 md:pe-8 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[30px] md:mb-10 mb-5 animate-fade-in-up-scroll'>Types of License</h3>
      
      {/* Mobile Slider - Hidden on md and above */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={5}
          slidesPerView={1.2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="license-swiper"
        >
          {licenses.map((lic, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <TitleCard>
                  <Link href={lic.link}>
                    <div className="flex justify-between items-center relative z-50 ">
                      <span className="text-gradient md:text-[50px] text-[30px] font-[400]">{lic.number}</span>
                      <Image
                        src={lic.icon.src}
                        width={lic.icon.width}
                        height={lic.icon.height}
                        alt={lic.desc}
                        className='max-w-[68px]'
                      />
                    </div>
                    <div className='md:pt-8 pt-15 relative z-50'>
                      <div className="text-white font-[400] md:text-[22px] text-[20px] pt-10 hover:text-gradient">{lic.title}</div>
                      <div className="text-gray-400 text-sm mt-2">{lic.desc}</div>
                    </div>
                    <div className=''>
                      <Image
                        src={cardL}
                        width={500}
                        height={500}
                        alt='cardL'
                        className='absolute w-full md:h-[310px] h-full top-0 left-0 '
                      />
                    </div>
                  </Link>
                </TitleCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid - Hidden on mobile, visible on md and above */}
      <div className="hidden md:grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 relative animate-fade-in-up-scroll animation-delay-100">
        {licenses.map((lic, index) => (
          <TitleCard key={index}> 
            <Link href={lic.link}>
              <div className="flex justify-between items-center relative z-50 ">
                <span className="text-gradient md:text-[50px] text-[30px] font-[400]">{lic.number}</span>
                <Image
                  src={lic.icon.src}
                  width={lic.icon.width}
                  height={lic.icon.height}
                  alt={lic.desc}
                  className='max-w-[68px]'
                />
              </div>
              <div className='md:pt-8 pt-15 relative z-50'>
                <div className="text-white font-[400] md:text-[22px] text-[20px] pt-10 hover:text-gradient">{lic.title}</div>
                <div className="text-gray-400 text-sm mt-2">{lic.desc}</div>
              </div>
              <div className=''>
                <Image
                  src={cardL}
                  width={500}
                  height={500}
                  alt='cardL'
                  className='absolute w-full md:h-[310px] h-full top-0 left-0 '
                />
              </div>
            </Link>
          </TitleCard>
        ))}
      </div>

    </div>
  );
}

export default TypesofLicense;