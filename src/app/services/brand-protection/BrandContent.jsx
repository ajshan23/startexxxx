'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ReDirect } from '@/app/components/Icons'
import { motion } from 'framer-motion'

// Images
import S1 from '../../../../public/assets/images/services/s1.webp'
import S2 from '../../../../public/assets/images/services/s2.webp'
import S3 from '../../../../public/assets/images/services/s3.webp'
import S4 from '../../../../public/assets/images/services/s4.webp'
import S5 from '../../../../public/assets/images/services/s5.webp'

// Service Data
const services = [
  {
    id: 1,
    image: S1,
    title: 'Copyright Registration',
    description:
      'Copyright registration in the UAE protects artistic, literary, and intellectual works from unauthorized use.',
    link: '',
  },
  {
    id: 2,
    image: S2,
    title: 'Trademark Registration',
    description:
      'A trademark protects brand names, products, or services from unauthorized use and counterfeiting.',
    link: '',
  },
  {
    id: 3,
    image: S3,
    title: 'Intellectual Property',
    description:
      'Intellectual Property Registration in the UAE protects creations of the mind with commercial value, such as inventions, designs, music, and software.',
    link: '',
  },
  {
    id: 4,
    image: S4,
    title: 'Patent Registration',
    description:
      'Patent registration in the UAE protects inventions with scientific or technical relevance, whether entirely new or innovative upgrades of existing ideas.',
    link: '',
  },
  {
    id: 5,
    image: S5,
    title: 'Trade Secret Registration',
    description:
      'Trade secrets are a form of intellectual property used by businesses to protect confidential assets like formulas, processes, or designs.',
    link: '',
  },
]

function BrandContent() {
  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-gradient md:text-[50px] text-[27px] font-[500] text-center'
      >
        Brand Protection.
      </motion.h3>

      <div className='pt-10 pb-10 flex flex-wrap gap-6 justify-center'>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className='w-full sm:w-[48%] md:w-[32%]'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='relative rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src={service.image}
                width={500}
                height={500}
                className='w-full h-full object-cover'
                alt={service.title || 'Service Image'}
              />

              <div className='absolute top-0 left-0 p-4 w-full h-full bg-black/50 flex flex-col justify-between'>
                <div>
                  <h3 className='text-[20px] font-[500] text-white'>{service.title}</h3>
                  <p className='text-[14px] font-[300] pt-3 text-white'>{service.description}</p>
                </div>
                <div className='pt-4 flex justify-end'>
                  <Link
                    href={service.link || '#'}
                    className='bg-gradient w-[44px] h-[44px] flex justify-center items-center rounded-full'
                    aria-label={`Read more about ${service.title}`}
                  >
                    <ReDirect />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BrandContent
