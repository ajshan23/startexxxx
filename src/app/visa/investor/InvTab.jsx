'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Applying for an Investor Visa in Dubai', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          A copy of the MoA outlining the business structure and shareholder
          responsibilities.
        </li>
        <li>
          The official trade license issued for the business you intend to
          operate in Dubai.
        </li>
        <li>A clear copy of the applicant’s valid passport.</li>
        <li>
          Recent bank statements to demonstrate financial stability and
          investment capability.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Enjoy special privileges and government-backed benefits reserved for
          investor visa holders.
        </li>
        <li>
          No corporate or personal income tax, maximizing your business profits.
        </li>
        <li>
          Become part of one of the fastest-growing and most dynamic economies
          globally.
        </li>
        <li>
          Dubai consistently offers better ROI than many global business hubs.
        </li>
        <li>
          Operate in a city with cutting-edge facilities and world-leading
          connectivity.
        </li>
        <li>
          Benefit from a politically stable, secure, and investor-friendly
          ecosystem.
        </li>
        <li>
          Set up your company quickly with minimal bureaucracy and government
          support.
        </li>
        <li>
          Business activities are safeguarded by transparent and
          investor-focused laws.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Passport copies and passport-size photographs</li>
        <li>
          Accounting and audit report provided by the authorized agency in Dubai
        </li>
        <li>Previous six month’s bank statement</li>
        <li>Trade license copy of your firm</li>
        <li>Immigration establishment card</li>
        <li>Memorandum of Association (MOA) copy</li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Once your account is created, log in and start the nomination
          formalities as required for the business visa application.
        </li>
        <li>
          Fill out the online application form with accurate and complete
          information. Upload all necessary documents and submit the application
          online.
        </li>
        <li>
          The application typically undergoes an assessment period of up to 30
          days, during which eligibility and documentation are reviewed.
        </li>
        <li>
          If your nomination is approved, you will receive an official
          notification via a link, guiding you to the next steps of the visa
          issuance process.
        </li>
      </ul>
    </div>
  ),
  jurs: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Abu Dhabi</li>
        <li>Dubai</li>
        <li>Sharjah</li>
        <li>Ajman</li>
        <li>Umm-Al-Quwain</li>
        <li>Fujairah</li>
        <li>Ras-Al-Khaimah</li>
      </ul>
    </div>
  )
}

function InvTab () {
  const [active, setActive] = useState('mainland') // default tab

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      {/* Heading with scroll animation */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Essentials About Investor Visa in UAE
      </motion.h3>

      {/* Tab buttons with scroll animation */}
      <motion.div
        className='flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: 0.1 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {licenses.map(license => (
          <button
            key={license.key}
            onClick={() => setActive(license.key)}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              active === license.key
                ? 'bg-gradient text-white'
                : 'bg-black border border-gray-500 text-white hover:bg-gray-800'
            }`}
          >
            {license.label}
          </button>
        ))}
      </motion.div>

      {/* Animated content section */}
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

export default InvTab
