'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tab options
const licenses = [
  { label: 'Key Features', key: 'features' },
  { label: 'Benefits', key: 'benefits' },
  { label: 'Required Documents', key: 'documents' },
  { label: 'Popular Locations', key: 'locations' },
  { label: 'How to Get Started', key: 'booking' }
];

// Tab content
const licenseContent = {
  features: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Hot desk setup with shared workspace access</li>
        <li>High-speed Wi-Fi, utilities, and common facilities included</li>
        <li>Access to business-grade printing, lounge areas, and refreshments</li>
        <li>Daily, weekly, and monthly plans to suit all business needs</li>
      </ul>
    </div>
  ),
  benefits: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Cost-effective option for freelancers, startups, and remote teams</li>
        <li>No long-term commitment or heavy deposits required</li>
        <li>Collaborative environment ideal for networking and productivity</li>
        <li>Use of a prestigious business address for mail and business registration</li>
      </ul>
    </div>
  ),
  documents: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Copy of passport</li>
        <li>Visa copy or entry stamp (for non-residents)</li>
        <li>Emirates ID (if applicable)</li>
        <li>Trade license (for businesses opting for address use)</li>
      </ul>
    </div>
  ),
  locations: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Business Bay</li>
        <li>Jumeirah Lake Towers (JLT)</li>
        <li>Al Barsha</li>
        <li>Dubai Silicon Oasis</li>
        <li>Downtown Dubai</li>
      </ul>
    </div>
  ),
  booking: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Choose a location and plan (hourly, daily, or monthly)</li>
        <li>Submit a booking request with your basic personal or company details</li>
        <li>Schedule a tour if needed, and confirm workspace availability</li>
        <li>Provide identification documents and sign the agreement</li>
        <li>Make payment and start using your Flexi Desk immediately</li>
      </ul>
    </div>
  )
};


function FlexiTabs() {
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

export default FlexiTabs
