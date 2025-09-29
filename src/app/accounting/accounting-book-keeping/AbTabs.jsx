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
        <li>Accounting and bookkeeping are essential for business transparency and financial compliance</li>
        <li>They track income, expenses, assets, and liabilities to maintain accurate records</li>
        <li>Ensure smooth audits, tax filings, and financial reporting</li>
      </ul>
    </div>
  ),
  who: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Startups and SMEs looking to maintain accurate financial records</li>
        <li>Large corporations requiring systematic financial reports</li>
        <li>Freelancers and consultants managing project-based finances</li>
      </ul>
    </div>
  ),
  benefits: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Improved financial clarity and decision-making</li>
        <li>Timely VAT return and tax compliance</li>
        <li>Reduced risk of penalties or audits</li>
        <li>Professional management of invoices, payroll, and statements</li>
      </ul>
    </div>
  ),
  services: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Daily, monthly, and yearly bookkeeping</li>
        <li>Accounts receivable/payable management</li>
        <li>Bank reconciliation and ledger maintenance</li>
        <li>Profit & loss, balance sheet, and cash flow reports</li>
        <li>Payroll and inventory accounting</li>
      </ul>
    </div>
  ),
  why: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Experienced accountants familiar with UAE compliance laws</li>
        <li>Cloud-based bookkeeping tools for real-time access</li>
        <li>Customizable packages based on business size and needs</li>
        <li>Reliable support with regular financial insights</li>
      </ul>
    </div>
  )
};



function AbTabs() {
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

export default AbTabs
