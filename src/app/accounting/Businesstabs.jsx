'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Accounting & Bookkeeping', key: 'freezone' },
  { label: 'Auditing Services', key: 'mainland' },
  { label: 'VAT Return Filing', key: 'offshore' },
  { label: 'CFO Services', key: 'commercial' },
  { label: 'Tax Services', key: 'professional' }
]

const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        Accounting and bookkeeping services play a vital role in managing financial data.
        While bookkeeping focuses on recording daily transactions, accounting analyzes and summarizes that data to provide business insights.
      </p>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        Auditing services ensure accuracy and transparency in your financial statements.
        Our experts help verify compliance with local laws and international standards, promoting trust and accountability.
      </p>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        VAT return filing in the UAE requires timely and accurate submissions to avoid penalties.
        We assist with proper calculation, documentation, and on-time filing to keep your business compliant.
      </p>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        Our CFO services provide strategic financial planning, budgeting, and forecasting.
        Ideal for startups and SMEs, we bring executive-level expertise without the full-time cost.
      </p>
    </div>
  ),
  professional: (
    <div className='space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        We offer comprehensive tax services, including corporate tax, VAT, and excise tax advisory.
        Stay compliant and optimize your tax structure with our experienced consultants.
      </p>
    </div>
  )
}

export default function Businesstabs () {
  const [active, setActive] = useState('freezone')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      >
        Things you should know
      </motion.h3>

      <div className='flex md:flex-wrap gap-4 mt-10 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'>
        {licenses.map(license => (
          <button
            key={license.key}
            onClick={() => setActive(license.key)}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              active === license.key
                ? 'bg-gradient text-white shadow-lg'
                : 'bg-black border border-gray-500 text-white hover:bg-gray-800'
            }`}
          >
            {license.label}
          </button>
        ))}
      </div>

      <div className='text-[18px] min-h-[80px] text-center'>
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
