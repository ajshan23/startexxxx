'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tab options
const licenses = [
  { label: 'Overview', key: 'overview' },
  { label: 'Who Needs to File', key: 'who' },
  { label: 'Required Documents', key: 'documents' },
  { label: 'Filing Process', key: 'process' },
  { label: 'Deadlines & Penalties', key: 'deadlines' }
];

// Tab content
const licenseContent = {
  overview: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>VAT return is a mandatory filing for registered businesses in the UAE</li>
        <li>It reports the VAT collected on sales and the VAT paid on purchases</li>
        <li>Helps calculate your net VAT liability or refund amount</li>
      </ul>
    </div>
  ),
  who: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>All VAT-registered businesses and individuals in the UAE</li>
        <li>Entities whose taxable supplies exceed AED 375,000 annually</li>
        <li>Voluntary registrants with turnover above AED 187,500</li>
      </ul>
    </div>
  ),
  documents: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>VAT registration certificate</li>
        <li>Sales and purchase invoices</li>
        <li>Bank statements</li>
        <li>Import/export declarations (if applicable)</li>
        <li>Previous VAT return (if any)</li>
      </ul>
    </div>
  ),
  process: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Log in to your FTA (Federal Tax Authority) portal account</li>
        <li>Fill out the VAT return form with sales, purchases, and tax details</li>
        <li>Double-check figures for accuracy</li>
        <li>Submit the form and make the payment for net VAT due</li>
      </ul>
    </div>
  ),
  deadlines: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Returns must be filed quarterly or monthly, depending on your registration</li>
        <li>Filing deadline is the 28th day after the tax period ends</li>
        <li>Late filings may result in heavy penalties and fines</li>
      </ul>
    </div>
  )
};


function VatTab() {
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

export default VatTab
