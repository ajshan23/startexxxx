'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Applying for a Business Visa', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Submit documents that demonstrate your experience and track record as
          a business professional or entrepreneur.
        </li>
        <li>
          You must be the owner or a major shareholder of an existing company or
          start-up.
        </li>
        <li>
          Applicants should be in a senior or leadership role—such as founder,
          CEO, or board member—within the business or start-up.
        </li>
        <li>
          You must be willing to relocate to the UAE to establish or manage a
          business aligned with your field of expertise.
        </li>
        <li>
          A clear and actionable business plan must be submitted, outlining your
          intended operations in any of the UAE’s emirates.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The business visa application process in Dubai is straightforward,
          designed to minimize delays and administrative burdens.
        </li>
        <li>
          A six-month multiple-entry visa allows entrepreneurs to travel in and
          out of the UAE to manage business-related activities in both Dubai and
          their home country.
        </li>
        <li>
          Visa holders are permitted to nominate up to three senior staff
          members for UAE residency, ensuring key personnel are present to
          support business setup and operations.
        </li>
        <li>
          The Dubai business visa serves as a strategic first step toward
          establishing a company in one of the world’s most dynamic and
          business-friendly environments.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Scanned copy of relevant pages of the passport.</li>
        <li>Visa application form with a duplicate copy.</li>
        <li>Passport-size photographs.</li>
        <li>Invitation letter from UAE sponsor.</li>
        <li>
          Income tax return, Form 16, investment proofs in bank deposits
          substantiating the proposal to start a company in Dubai.
        </li>
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
        <li>Mainland</li>
        <li>Freezone</li>
        <li>Offshore</li>
      </ul>
    </div>
  )
}

function BTab () {
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
        Essentials About Business Visa in Dubai
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

export default BTab
