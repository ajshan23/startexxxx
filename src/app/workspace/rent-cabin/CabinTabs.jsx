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
        <li>Private, lockable office cabins with modern furnishings</li>
        <li>Equipped with air conditioning, ergonomic chairs, and work desks</li>
        <li>Inclusive of high-speed internet, electricity, and cleaning services</li>
        <li>Access to meeting rooms, pantry, reception, and printing services</li>
      </ul>
    </div>
  ),
  benefits: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Ideal for professionals seeking quiet, dedicated workspaces</li>
        <li>Professional environment suitable for client meetings</li>
        <li>No setup hassle – ready-to-move-in office cabins</li>
        <li>Flexible rental options: hourly, daily, weekly, or monthly</li>
      </ul>
    </div>
  ),
  documents: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Passport copy of the tenant</li>
        <li>UAE visa or entry stamp (for non-residents)</li>
        <li>Emirates ID (if applicable)</li>
        <li>Trade license (if booking under a company name)</li>
      </ul>
    </div>
  ),
  locations: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Business Bay</li>
        <li>Al Qusais</li>
        <li>Dubai Internet City</li>
        <li>Bur Dubai</li>
        <li>Sharjah & Abu Dhabi options available</li>
      </ul>
    </div>
  ),
  booking: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Select your preferred location and cabin size</li>
        <li>Submit a request with your personal or business details</li>
        <li>Tour the cabin or request a virtual walkthrough</li>
        <li>Provide the necessary documents and sign the rental agreement</li>
        <li>Make payment and move into your cabin office instantly</li>
      </ul>
    </div>
  )
};



function CabinTabs() {
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

export default CabinTabs
