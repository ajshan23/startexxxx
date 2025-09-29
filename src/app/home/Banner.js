import React from "react";
import BusinessTabs from "../components/BusinessTabs";
import grad from "../../../public/assets/images/home/gr.png"
import Image from "next/image";
import Logo from "./Logo";
import SceduleSection from "./SceduleSection";
import Link from "next/link";

function Banner() {
  return (
    <div className="bg-primary h-auto relative overflow-hidden ">
      <div className="md:flex pt-10 items-center main-pt px-4 md:px-8 lg:px-[90px] relative z-40">
        <div className="md:w-1/2">
          <div className="animate-fade-in-up">
            <h6 className="md:text-[18px] text-[15px] font-[300] text-gradient w-full">
              Turn Passion into Profit
            </h6>
            <h1 className="md:text-[50px] text-[25px] font-[500] pt-3 text-gradient">
              Ignite Your <br />
             Entrepreneurial Path
            </h1>
            <p className="font-[300] md:text-[17px] text-[14px] text-secondary pt-3">
              Turn your vision into reality with expert guidance and seamless
              support.
            </p>
            <div className="pt-10 flex gap-8">
                <Link href="./services" > <button className="gr-btn">Ignite Today</button></Link>
            <Link href="./business-license" >  <button className="br-gr-btn">Explore Licenses</button></Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ms-auto">
          <BusinessTabs />
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full ">
        <Image
          src={grad}
          alt="HomeLogo"
          width={1000}
          height={1000}
          className=" w-full h-full "
        />
      </div> */}

      <Logo />
      <SceduleSection />
      <div className="absolute top-0 left-0 w-full h-full banner-gradient">

      </div>
    </div>
  );
}

export default Banner;