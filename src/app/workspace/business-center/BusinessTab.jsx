'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tab options
const licenses = [
  { label: 'Key Features', key: 'features' },
  { label: 'Advantages', key: 'advantages' },
  { label: 'Required Documents', key: 'documents' },
  { label: 'Locations', key: 'locations' },
  { label: 'Booking Process', key: 'booking' }
];

// Tab content
const licenseContent = {
  features: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Fully furnished office setups with high-speed internet and utilities included.</li>
        <li>Access to meeting rooms, reception services, and business lounges.</li>
        <li>Flexible lease terms tailored to short-term or long-term needs.</li>
        <li>24/7 office access with dedicated parking and security.</li>
      </ul>
    </div>
  ),
  advantages: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Start operations immediately without upfront setup hassles.</li>
        <li>Reduce overhead costs with shared amenities and services.</li>
        <li>Enhance your business image with a prime Dubai business address.</li>
        <li>Network with other professionals and entrepreneurs in the same workspace.</li>
      </ul>
    </div>
  ),
  documents: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Passport copy of the applicant</li>
        <li>UAE residence visa or entry stamp</li>
        <li>Emirates ID (if available)</li>
        <li>Trade license or business registration certificate (if applicable)</li>
      </ul>
    </div>
  ),
  locations: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Business Bay</li>
        <li>Dubai Silicon Oasis</li>
        <li>Jumeirah Lake Towers (JLT)</li>
        <li>Downtown Dubai</li>
        <li>Deira and Bur Dubai</li>
      </ul>
    </div>
  ),
  booking: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Choose your preferred business center location and office size.</li>
        <li>Submit a rental inquiry along with your basic business details.</li>
        <li>Schedule a tour or virtual walkthrough of the selected space.</li>
        <li>Provide the required documents and sign the rental agreement.</li>
        <li>Make the payment and receive immediate access to your office.</li>
      </ul>
    </div>
  )
};


function BusinessTab() {
  const [active, setActive] = useState('features')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      {/* Animated Heading */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Things you should know
      </motion.h3>

      {/* Optional Paragraph Below Heading */}
      {/* <motion.p
        className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        Explore key insights and steps about renting a business centre in Dubai and the UAE.
      </motion.p> */}

      {/* Tabs */}
      <div className='flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'>
        {licenses.map((license) => (
          <button
            key={license.key}
            onClick={() => setActive(license.key)}
            className={`px-4 py-2 rounded text-sm font-medium transition transform hover:scale-[1.03] ${
              active === license.key
                ? 'bg-gradient text-white'
                : 'bg-black border border-gray-500 text-white hover:bg-gray-800'
            }`}
          >
            {license.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='text-[18px]'>
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {licenseContent[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default BusinessTab
