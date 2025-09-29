'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SetubVideoBg from "../../../../public/assets/images/services/trade-yt.webp"
import YtpIcon from "../../../../public/assets/images/guide/ytp.webp"
import { motion } from 'framer-motion'

function TradeYtb() {
  return (
    <div className='px-4 md:px-8 lg:px-[90px] md:pt-10 pt-0 pb-10'>

      {/* Scroll-animated heading */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Get Trade License in Dubai, UAE
      </motion.h3>

      <motion.p
        className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Acquire a trade license in Dubai, UAE to successfully navigate the city's intricate and dynamic business landscape.
        Our expert team guides you through the legal, administrative, and regulatory requirements with ease.
        Start your venture with confidence and unlock access to one of the world’s most vibrant commercial hubs.
      </motion.p>

      {/* Video section */}
      <div className='pt-10 relative'>
        <Image
          src={SetubVideoBg}
          alt='Setub Video Background'
          width={1000}
          height={1000}
          className='w-full md:h-full h-[290px] object-cover'
        />

        <div className='absolute md:top-0 top-3 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4'>
          <Link href="https://www.youtube.com/" target='_blank' aria-label='Play video' role="button">
            <Image
              src={YtpIcon}
              alt='Play Video Icon'
              width={70}
              height={70}
              className='md:w-[70px] w-[40px] h-[40px] md:h-[70px]'
            />
          </Link>

          <h6 className='md:text-[25px] text-[14px] text-white font-[400] md:pt-5'>
            Get Expert Help from
          </h6>
          <h3 className='md:text-[50px] text-[18px] text-white font-[600]'>
            How general trading license differs from normal trading license
          </h3>
        </div>
      </div>

    </div>
  )
}

export default TradeYtb
