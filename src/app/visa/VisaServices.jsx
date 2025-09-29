'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

import img1 from '../../../public/assets/images/licensing/v1.webp'
import img2 from '../../../public/assets/images/licensing/v2.webp'
import img3 from '../../../public/assets/images/licensing/v3.webp'
import img4 from '../../../public/assets/images/licensing/v4.webp'
import img5 from '../../../public/assets/images/licensing/v5.webp'
import img6 from '../../../public/assets/images/licensing/v6.webp'
import img7 from '../../../public/assets/images/licensing/v7.webp'
import img8 from '../../../public/assets/images/licensing/v8.webp'



const visaCards = [
  {
    title: 'Business Visa',
    description:
      'Establish and operate your business in Dubai with ease through a dedicated Business Visa.',
    link: '/visa/business',
    image: img1
  },
  {
    title: 'Tourist Visa',
    description:
      'Visit and experience the attractions of Dubai with our simplified Tourist Visa services.',
    link: '/visa/tourist',
    image: img5
  },
  {
    title: 'Freelance Visa',
    description:
      'Work independently in Dubai with a Freelance Visa tailored for self-employed professionals.',
    link: '/visa/freelance',
    image: img6
  },
  {
    title: 'Investor Visa',
    description:
      'Secure long-term residency in the UAE by investing in businesses or properties with an Investor Visa.',
    link: '/visa/investor',
    image: img2
  },
  {
    title: 'Family Visa',
    description:
      'Bring your loved ones to Dubai with a Family Visa designed for easy sponsorship and settlement.',
    link: '/visa/family',
    image: img4
  },
  {
    title: 'Maid Visa',
    description:
      'Legally hire and sponsor domestic help in Dubai with our streamlined Maid Visa process.',
    link: '/visa/maid',
    image: img3
  },
  {
    title: 'Work Visa',
    description:
      'Get employed in the UAE with a valid Work Visa, essential for professional opportunities.',
    link: '/visa/work-visa',
    image: img7
  },
  {
    title: 'Dubai Investor',
    description:
      'Gain residency and business privileges by becoming a Dubai-based investor through this specialized visa.',
    link: '/visa/dubai-investor',
    image: img8
  }
]


function VisaServices () {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'
    >
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
        Visa Services
      </h3>
      <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>
        Startex offers comprehensive visa assistance in Dubai and across the
        UAE, catering to both individuals and businesses. Their services
        encompass the entire visa process, from documentation to issuance,
        ensuring a smooth experience.
      </p>

      <div className='md:pt-20 gap-5 flex flex-wrap'>
        {visaCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='md:w-[23%] w-full mb-5'
          >
            <Link href={card.link}>
              <div className='bg-[#40404041] p-5 border h-[400px] flex flex-col justify-end border-[#ffffff4f] rounded-lg relative group overflow-hidden cursor-pointer hover:shadow-lg transition'>
                <div className='relative z-10'>
                  <h3 className='text-gradient md:text-[30px] font-[500]'>
                    {card.title}
                  </h3>
                  <p className='font-[300] md:text-[16px] text-white pt-5'>
                    {card.description}
                  </p>
                </div>

                {/* Hover background image – always active for first card */}
               <div className='absolute inset-0 hidden group-hover:block z-0'>
                  <Image
                    src={card.image}
                    alt={card.title}
                    className='w-full h-full object-cover rounded-lg'
                    fill
                  />
                  <div className='absolute inset-0 bg-black/50 rounded-lg' />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default VisaServices
