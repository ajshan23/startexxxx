import Image from 'next/image'
import React from 'react'
import Fav from "../../../public/assets/images/home/fav.svg"
import PackageSlider from '../components/PackageSlider'
import grad from "../../../public/assets/images/home/gr.png"
import packgeVector from "../../../public/assets/images/home/package-vector.png"
import Link from 'next/link'

function HomePackages() {
  return (
    <div className='bg-primary h-auto relative '>
      <div className='md:pt-20 pt-10 pb-10'>
        <div className="animate-fade-in-up-scroll">
          <div className='flex gap-2 items-center justify-center'>
            <Image
              src={Fav}
              alt="HomeLogo"
              width={300}
              height={300}
              className=" md:w-[30px] w-[15px] h-[15px] md:h-[30px]" />
            <h6 className='md:text-[22px] text=[16px] font-[400] text-secondary'>Packages</h6>
          </div>
        </div>
        <div className="animate-fade-in-up-scroll animation-delay-100">
          <h3 className='text-gradient md:text-[50px] text-[25px] text-center'>All-inclusive Business Packages</h3>
          <p className='md:text-[16px] text-[14px] font-[300] pt-5 md:w-[70%] px-4 m-auto text-secondary text-center'>Startex Hub can help you navigate the process, ensuring that your business setup is smooth and efficient. Whether you&#39;re looking to establish a mainland company, free zone entity, or offshore business, our expert team can provide the guidance and support you need. With our knowledge of local regulations and business practices.</p>
        </div>
        <div className="animate-fade-in-up-scroll animation-delay-200">
          <div className='pt-7 flex justify-center'>
            <Link href="packages"><button className="br-gr-btn ">Explore all Packages</button></Link>
          </div>
        </div>
        <div className="animate-fade-in-up-scroll animation-delay-300">
          <PackageSlider />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={grad}
          alt="HomeLogo"
          width={1000}
          height={1000}
          className=" w-full h-full"
        />
      </div>

      <div className="absolute top-0 right-10 md:w-[50%] md:h-[50%]">
        <Image
          src={packgeVector}
          alt="HomeLogo"
          width={1000}
          height={1000}
          className=" w-full h-full"
        />
      </div>
    </div>
  )
}

export default HomePackages