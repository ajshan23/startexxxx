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
        <li>Prestigious business address in the UAE without physical office space</li>
        <li>Mail and call handling services by professional receptionists</li>
        <li>Access to meeting rooms and coworking areas on demand</li>
        <li>Flexible packages with monthly and yearly billing options</li>
      </ul>
    </div>
  ),
  benefits: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Establish a professional presence in Dubai at minimal cost</li>
        <li>Complies with business license requirements in many UAE free zones</li>
        <li>Ideal for startups, remote teams, and international businesses</li>
        <li>Enables you to register your company using the virtual office address</li>
      </ul>
    </div>
  ),
  documents: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Passport copy</li>
        <li>Visa copy or entry stamp (for non-residents)</li>
        <li>Emirates ID (if available)</li>
        <li>Trade license (if applying under a company name)</li>
      </ul>
    </div>
  ),
  locations: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Business Bay</li>
        <li>Jumeirah Lake Towers (JLT)</li>
        <li>Downtown Dubai</li>
        <li>Al Qusais</li>
        <li>Sharjah, Abu Dhabi & other Emirates</li>
      </ul>
    </div>
  ),
  booking: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Select your preferred location and virtual office package</li>
        <li>Submit your personal or business information</li>
        <li>Provide the required documentation for verification</li>
        <li>Sign the virtual office agreement digitally or in person</li>
        <li>Make payment and start using your virtual office address immediately</li>
      </ul>
    </div>
  )
};



function VirtualTabs() {
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

export default VirtualTabs
