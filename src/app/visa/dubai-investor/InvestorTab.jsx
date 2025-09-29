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
          Investing in real estate within the UAE can qualify you for an
          investor visa, enabling long-term residency.
        </li>
        <li>
          You can also become eligible by investing in a business located in
          either a free zone or mainland area in Dubai.
        </li>
        <li>
          Holding an active trade license issued by the Department of Economic
          Development (DED) is a mandatory requirement.
        </li>
        <li>
          The business you invest in must demonstrate genuine operations and
          contribute meaningfully to the UAE’s economic growth.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Investor visa holders are exempt from corporate taxes, making it a
          highly attractive option for global entrepreneurs.
        </li>
        <li>
          Enjoy full repatriation of profits and capital, with no restrictions
          on moving funds internationally.
        </li>
        <li>
          The investor visa is renewable and extendable, offering long-term
          stability for investors and their families.
        </li>
        <li>
          Investors are permitted to hire talent globally, enabling businesses
          to build strong international teams.
        </li>
        <li>
          Visa holders can easily obtain their Emirates ID and residency permit,
          securing full legal residency in the UAE.
        </li>
        <li>
          Unlike employment visas, investor visa applicants do not need a job
          offer from a UAE-based company.
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

function InvestorTab () {
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
        Essentials About Investor Visa in Dubai
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

export default InvestorTab
