"use client";
import Image from "next/image";
import React, { useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Logo Assets
import Logo1 from "../../../public/assets/images/partners/l-1.webp";
import Logo2 from "../../../public/assets/images/partners/l-2.webp";
import Logo3 from "../../../public/assets/images/partners/l-3.webp";
import Logo4 from "../../../public/assets/images/partners/l-4.webp";
import Logo5 from "../../../public/assets/images/partners/l-5.webp";
import Logo6 from "../../../public/assets/images/partners/l-6.webp";
import Logo7 from "../../../public/assets/images/partners/l-7.webp";
import Logo8 from "../../../public/assets/images/partners/l-8.webp";
import Logo9 from "../../../public/assets/images/partners/l-9.webp";
import Logo10 from "../../../public/assets/images/partners/l-10.webp";
import Logo11 from "../../../public/assets/images/partners/l-11.webp";
import Logo12 from "../../../public/assets/images/partners/l-12.webp";
import Logo13 from "../../../public/assets/images/partners/l-13.webp";
import Logo14 from "../../../public/assets/images/partners/l-14.webp";

// Tabs
const tabs = [
  { label: "Mainland License", value: "mainland" },
  { label: "Freezone License", value: "freezone" },
  { label: "Offshore License", value: "offshore" },
];

// Tab content text
const tabContent = {
  mainland: (
    <p>
      Setting up a mainland company in Dubai is a lucrative investment option for investors and business establishments. Mainland companies are business entities that are allowed to function and operate within the boundaries of Emirati jurisdiction that come under commercialized geographical regions.
    </p>
  ),
  freezone: (
    <p>
      Freezone licenses are permits granted to a geographical region or jurisdiction that is allowed to conduct a predefined trading activity or set of activities in the UAE. The licenses issued offer favorable conditions for businesses, for example, tax exemptions, 100% foreign ownership, and streamlined bureaucratic procedures.
    </p>
  ),
  offshore: (
    <p>
      An offshore license gives authorizations to businesses that conduct operations outside of their location of registration. Businesses may be allowed to legally operate while following the regulations of the jurisdiction they are conducting their business activities.
    </p>
  ),
};

// Logos per tab
const tabLogos = {
  mainland: [Logo10, Logo11, Logo12, Logo13, Logo14],
  freezone: [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8],
  offshore: [Logo3, Logo4, Logo9],
};

function LicenseTab() {
  const [active, setActive] = useState("mainland");

  return (
    <div className="md:px-8 lg:px-[90px] px-4 md:py-20 py-0 animate-fade-in-up-scroll">
      <p className="text-[15px] text-white text-center">
        What are you looking for?
      </p>

      <div className="md:pt-10 pt-4">
        <div className="w-full md:flex flex-col items-center">
          {/* Tabs */}
          <div className="flex md:gap-10 gap-6 justify-center md:flex-nowrap flex-wrap pb-5 mb-6 w-full pt-5">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className={`md:text-[28px] text-[16px] font-semibold transition-all duration-200 md:w-1/3 md:text-center ${
                  active === tab.value
                    ? "text-gradient md:text-[32px] font-[500] active-activity-tab"
                    : "text-gradient md:text-[32px] font-[500]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <div className="overflow-hidden text-center text-white md:text-lg text-[16px] min-h-[200px] md:pt-10 max-w-4xl w-full relative">
            <div
              key={active}
              className="tab-content-fade-in"
            >
              {tabContent[active]}
            </div>
          </div>

          {/* Logos Slider */}
          <div className="pt-10 w-full">
            <div
              key={active}
              className="tab-content-fade-in"
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 7 },
                }}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={3000}
                loop={true}
                modules={[Autoplay]}
                className="mySwiperLicense !justify-center"
              >
                {tabLogos[active].map((logo, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      width={230}
                      height={230}
                      className="object-contain mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tab-content-fade-in {
          animation: tabFadeIn 0.4s ease-out forwards;
        }
        
        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default LicenseTab;