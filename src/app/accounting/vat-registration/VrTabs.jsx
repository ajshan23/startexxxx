'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tab options
const licenses = [
  { label: 'Overview', key: 'overview' },
  { label: 'Who Needs It', key: 'who' },
  { label: 'Benefits', key: 'benefits' },
  { label: 'Services Included', key: 'services' },
  { label: 'Why Choose Us', key: 'why' }
];

const licenseContent = {
  overview: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>VAT (Value Added Tax) registration is mandatory for businesses that meet the taxable threshold in the UAE.</li>
        <li>Once registered, businesses must charge VAT on taxable supplies and file periodic VAT returns.</li>
        <li>Our team ensures smooth registration with complete documentation and compliance with UAE Federal Tax Authority (FTA) regulations.</li>
      </ul>
    </div>
  ),
  who: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Businesses with taxable supplies and imports exceeding AED 375,000 (mandatory registration)</li>
        <li>Businesses with turnover above AED 187,500 (voluntary registration)</li>
        <li>New businesses aiming for VAT compliance from the start</li>
      </ul>
    </div>
  ),
  benefits: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Legally operate and comply with UAE tax laws</li>
        <li>Gain credibility and trust with clients and partners</li>
        <li>Claim input VAT on eligible purchases</li>
        <li>Avoid penalties from delayed or non-registration</li>
      </ul>
    </div>
  ),
  services: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Eligibility assessment for VAT registration</li>
        <li>Preparation and submission of documents to FTA</li>
        <li>Assistance in setting up TRN (Tax Registration Number)</li>
        <li>Guidance on VAT invoicing and record keeping</li>
        <li>Post-registration support and VAT compliance setup</li>
      </ul>
    </div>
  ),
  why: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Expert team with deep knowledge of FTA requirements</li>
        <li>Fast, hassle-free registration process</li>
        <li>Transparent service with full guidance throughout</li>
        <li>Affordable VAT solutions for startups and SMEs</li>
      </ul>
    </div>
  )
};





function VrTabs() {
  const [active, setActive] = useState('overview')

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

export default VrTabs
