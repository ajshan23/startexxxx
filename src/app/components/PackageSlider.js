'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import Slider1 from '../../../public/assets/images/home/d1.jpg';
import Slider2 from '../../../public/assets/images/home/d2.jpg';
import Slider3 from '../../../public/assets/images/home/d3.jpg';
import Slider4 from '../../../public/assets/images/home/d4.jpg';
import Slider5 from '../../../public/assets/images/home/d5.jpg';

import Icon1 from '../../../public/assets/images/home/spc.jpg';
import Icon2 from '../../../public/assets/images/home/ifza.png';
import Icon3 from '../../../public/assets/images/home/p3.jpg';
import Icon4 from '../../../public/assets/images/home/p4.svg';
import Icon5 from '../../../public/assets/images/home/p5.png';

import Icon6 from '../../../public/assets/images/home/shmas.ico';


import Fav from '../../../public/assets/images/home/fav.svg';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path
      d="M1.55895 13.1108C1.16783 13.1108 0.821168 12.9597 0.518946 12.6575C0.216724 12.3553 0.0656128 12.0086 0.0656128 11.6175V1.59084C0.0656128 1.19973 0.216724 0.853062 0.518946 0.550839C0.821168 0.248617 1.16783 0.0975065 1.55895 0.0975065H9.55895C9.70117 0.0975065 9.82561 0.15084 9.93228 0.257506C10.0389 0.364173 10.0923 0.479729 10.0923 0.604173C10.0923 0.728618 10.0389 0.844172 9.93228 0.95084C9.82561 1.05751 9.70117 1.11084 9.55895 1.11084H1.55895V11.6175H11.5856C11.7278 11.6175 11.8434 11.5731 11.9323 11.4842C12.0212 11.3953 12.0656 11.2797 12.0656 11.1375V6.60417C12.0656 6.46195 12.1189 6.3464 12.2256 6.25751C12.3323 6.16862 12.4478 6.12417 12.5723 6.12417C12.6967 6.12417 12.8123 6.16862 12.9189 6.25751C13.0256 6.3464 13.0789 6.46195 13.0789 6.60417V11.6175C13.0789 12.0086 12.9278 12.3553 12.6256 12.6575C12.3234 12.9597 11.9767 13.1108 11.5856 13.1108H1.55895ZM6.94561 8.95084L13.9323 1.96417C14.0389 1.85751 14.0923 1.73306 14.0923 1.59084C14.0923 1.44862 14.0389 1.33306 13.9323 1.24417C13.8256 1.15528 13.7012 1.11084 13.5589 1.11084C13.4167 1.11084 13.3101 1.16417 13.2389 1.27084L6.57228 7.88417L3.90561 5.27084C3.8345 5.16417 3.72784 5.11084 3.58561 5.11084C3.44339 5.11084 3.31895 5.15528 3.21228 5.24417C3.10561 5.33306 3.05228 5.44862 3.05228 5.59084C3.05228 5.73306 3.10561 5.85751 3.21228 5.96417L6.19895 8.95084C6.30561 9.05751 6.43006 9.11084 6.57228 9.11084C6.7145 9.11084 6.83895 9.05751 6.94561 8.95084Z"
      fill="white"
    />
  </svg>
);

const packagesData = [
  {
    title: "MEYDAN",
    price: "AED 12500",
    image: Slider1,
    topIcon: Icon5,
    checklist: [
      "An Exclusive Dubai Govt. Initiated Freezone ",
      "Trade Name Will Be Issued with the Suffix LLC Fz",
      "No NOC Required",
      "Shared Desk",
      "Multiple Activity Groups",
    ],
  },
  {
    title: "IFZA",
    price: "AED 12400",
    image: Slider2,
    topIcon: Icon2,
    checklist: [
      "100% Ownership",
      "Dubai Freezone",
      "Trade License Cost",
      "Free Activity Consultation",
      "Lowest Cost Dubai Freezone",
    ],
  },
  {
    title: "SRTIP PACKAGES",
    price: "AED 5000",
    image: Slider3,
    topIcon: Icon3,
    checklist: [
      "Multiple Shareholders",
      "Multiple Activities",
      "100% Ownership",
      "Free Digital Banking",
      "Full Startex Hub concierge support",
    ],
  },
  {
    title: "RAKEZ",
    price: "AED 5510",
    image: Slider4,
    topIcon: Icon4,
    checklist: [
      "100% Ownership",
      "Multiple shareholders",
      "Multiple activities",
      "1 year License",
      "Full Startex Hub concierge support",
    ],
  },
    {
    title: "Shams Freezone",
    price: "AED 5750",
    image: Slider5,
    topIcon: Icon6,
    checklist: [
      "100% Ownership",
      "5 Activities",
      "Trade Name Will Be Issued With Suffix LLC",
      "Free Activity Consultation",
      "Full Startex Hub concierge support",
    ],
  },
];

const PackageSlider = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={0}
        effect="coverflow"
        loop={true}
        autoplay={{ delay: 3500 }}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper md:!pt-20 !pt-10 md:!pb-20"
        speed={1000}
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 1.5, spaceBetween: 60 },
          1700: { slidesPerView: 1.5, spaceBetween: 90 },

        }}
      >
        {packagesData.map((pkg, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full mx-auto rounded-[20px] overflow-hidden shadow-lg md:min-h-[500px]">
              <Image
                src={pkg.image}
                alt={`${pkg.title} image`}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-0 left-0 z-10 p-3 md:p-6 flex w-full flex-col h-full justify-between bg-[#000000b7]">
                {/* Top section */}
                <div className="flex justify-between items-start mb-3">
                  <div className="w-16 h-16  rounded-md flex items-center justify-center shadow-md">
                    <Image src={pkg.topIcon} alt="Package Logo" width={100} height={100} />
                  </div>
                  <div className="text-right">
                    <div className="flex gap-2 items-center justify-center">
                      <Image
                        src={Fav}
                        alt="HomeLogo"
                        width={300}
                        height={300}
                        className="w-[20px] h-[20px]"
                      />
                      <h6 className="md:text-[20px] text-[17px] font-[300] text-secondary">
                        Starting from
                      </h6>
                    </div>
                    <div className="text-white md:text-2xl text-[18px] font-[600]">
                      {pkg.price}
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="flex-grow flex flex-col justify-center py-4">
                  <h5 className='text-gradient md:text-[30px] font-[600] pb-4'>{pkg.title}</h5>
                  <ul className="text-white text-lg space-y-3">
                    {pkg.checklist.map((point, i) => (
                      <li className="flex items-center" key={i}>
                        <CheckIcon />
                        <span className="ms-2 md:text-[18px] text-[16px] font-[200]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="ms-auto">
                  <Link href="/packages">
                    <button className="w-fit py-2 md:px-6 px-4 rounded-md text-white font-[400] md:text-[15px] text-[12px] bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-600 hover:to-yellow-600 transition duration-300">
                      Readmore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PackageSlider;
