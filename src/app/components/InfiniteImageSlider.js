"use client"
import Image from "next/image";
import React from "react";
import Cr1 from "../../../public/assets/images/home/cr1.png";
import Cr2 from "../../../public/assets/images/home/cr2.JPG";
import Cr3 from "../../../public/assets/images/home/cr3.JPG";
import Cr4 from "../../../public/assets/images/home/cr4.JPG";
import Cr5 from "../../../public/assets/images/home/cr5.JPG";
import Cr6 from "../../../public/assets/images/home/cr6.JPG";
import Cr7 from "../../../public/assets/images/home/cr7.JPG";
import Cr8 from "../../../public/assets/images/home/cr8.JPG";
import Cr9 from "../../../public/assets/images/home/cr9.JPG";
import Cr10 from "../../../public/assets/images/home/cr10.JPG";
import Cr11 from "../../../public/assets/images/home/cr11.JPG";
import Cr12 from "../../../public/assets/images/home/cr12.JPG";
import Cr13 from "../../../public/assets/images/home/cr13.JPG";
import Cr14 from "../../../public/assets/images/home/cr14.JPG";

import CraftBg from "../../../public/assets/images/home/craft-bg.png";



// Replace with your image imports or URLs
const images = [

    Cr2,
    Cr4,
    Cr5,
     Cr10,
    Cr11,
    Cr12,
    Cr13,
    Cr14,
    Cr10,
    Cr11,
    Cr12,
    Cr13,
    Cr14
];

const rows = 3; // Number of rows

const InfiniteImageSlider = () => {
    return (
        <div className="w-full py-10  overflow-hidden relative">
          {[...Array(rows)].map((_, rowIdx) => (
  <div
    key={rowIdx}
    className={`flex gap-0 items-center mb-4 ${rowIdx === 1 ? 'mx-10' : ''}`}
    style={{
      animation: `slide-${rowIdx % 2 === 0 ? "left" : "right"} 30s linear infinite`
    }}
  >
    {[...images, ...images].map((img, idx) => (
      <div
        key={idx}
        className="mx-2 rounded-lg overflow-hidden shadow-lg"
        style={{ width: 120, height: 90, flex: "0 0 auto" }}
      >
        <Image
          src={img}
          alt=""
          width={500}
          height={500}
          quality={100}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    ))}
  </div>
))}
            <style jsx>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        div[style*="animation: slide-left"] {
          animation-duration: 30s;
        }
        div[style*="animation: slide-right"] {
          animation-duration: 40s;
        }
      `}</style>


      <div className="absolute top-0 left-0 w-full h-full z-1">
        <Image
            src={CraftBg}
            alt="Crafting Entrepreneurs"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            />
      </div>


 <div className="absolute top-[130px] left-0 w-[20px] h-[120px] bg-[#020114] z-2 md:block hidden"></div>
 <div className="absolute top-[130px] right-0 w-[20px] h-[120px] bg-[#020114] z-2 md:block hidden"></div>



        </div>
    );
};

export default InfiniteImageSlider;