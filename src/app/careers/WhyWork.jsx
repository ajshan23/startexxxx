'use client'
import React from 'react'
const features = [
  {
    title: 'Career Advancement',
    description:
      'Grow with purpose. We offer mentorship, training, and real opportunities to advance in a company that values your ambition and nurtures your talents every step of the way.'
  },
  {
    title: 'Team-Driven Culture',
    description:
      'Thrive in a collaborative environment where diverse perspectives, creative thinking, and mutual respect drive every success. At Startex Hub, your voice matters.'
  },
  {
    title: 'Agile & Dynamic Workspace',
    description:
      'Join a high-energy, client-first team where no two days are the same. We embrace innovation, fast decision-making, and continuous improvement.'
  },
  {
    title: 'Meaningful Impact',
    description:
      'Be part of something bigger. Help entrepreneurs, startups, and global businesses succeed in one of the world’s most vibrant business destinations—Dubai.'
  }
]
function WhyWork () {
  return (
    <div className='pt-10 px-4 md:px-8 lg:px-[90px]'>
      <h6 className='md:text-[18px] text-[16px] text-center font-[300] text-gradient'>
        Startex Hub
      </h6>
      <h1 className='md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient'>
       Why Build Your Career at Startex Hub
      </h1>
      <div className='max-w-4xl pt-10  pb-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
        {features.map((item, index) => (
          <div
            key={index}
            className='bg-[#1c1c1c] border border-gray-700 rounded-xl p-10'
          >
            <h3 className='md:text-[30px] text-[23px] text-gradient font-[400]'>
              {item.title}
            </h3>
            <p className='text-sm pt-7 text-gray-300 leading-relaxed'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyWork
