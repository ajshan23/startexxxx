import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import Team1 from '../../../public/assets/images/about/team1.webp'
import { consultants } from '../components/VerticalSlider'

import cu1 from '../../../public/assets/images/consultsnt/aiswarya.webp'
import cu2 from '../../../public/assets/images/consultsnt/zul-fathima.webp'
import cu3 from '../../../public/assets/images/consultsnt/thasla.webp'
import cu4 from '../../../public/assets/images/consultsnt/mona-riza.webp'
import cu5 from '../../../public/assets/images/consultsnt/afrin.webp'
import cu6 from '../../../public/assets/images/consultsnt/rohan.webp'
import cu7 from '../../../public/assets/images/consultsnt/salman.webp'
import cu8 from '../../../public/assets/images/consultsnt/monisha.webp'




const team = [
  {
    title: 'License Consultant',
    img: cu1
  },
  {
    title: 'Pro Consultant',
    img: cu2
  },
  {
    title: 'License Consultant',
    img: cu3
  },
  {
    title: 'Pro Consultant',
    img: cu4
  },
  {
    title: 'License Consultant',
    img: cu5
  },
  {
    title: 'General Manager',
    img: cu6
  }
  ,
  {
    title: 'Public relation officer',
    img: cu7
  }
   ,
  {
    title: 'Consultant',
    img: cu8
  }
]

export default function TeamSlider () {
  return (
    <div className='py-10 px-4'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className='!pb-12 TeamSliders'
      >
        {team.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className='bg-[#181818] rounded-xl overflow-hidden shadow-lg relative flex flex-col items-center'>
              <Image
                src={member.img}
                alt={member.name}
                className='w-full h-100 object-cover'
              />
              {/* Overlay */}
              <div className='w-full bg-black/60 px-4 py-4 text-center absolute bottom-0 left-0'>
                <div className='text-white text-lg font-bold'>
                  {member.name}
                </div>
                <div className='text-gray-200 text-sm'>{member.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
