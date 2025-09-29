'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Step to Company Liquidation', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Assigning a liquidator.</li>
        <li>Liquidation letter</li>
        <li>Settlement of dues and fines with free zone</li>
        <li>Free zone/ Mainland authority clearance</li>
        <li> NOC from Business Unite</li>
        <li> CLD Government Section Clearance</li>
        <li> License (original)</li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Liquidating a company ensures all financial obligations are settled
          properly, maintaining legal and ethical business standards.
        </li>
        <li>
          Winding down a non-operational or unprofitable business helps reduce
          unnecessary overheads and operational expenses.
        </li>
        <li>
          Remaining company assets can be fairly distributed among shareholders,
          ensuring transparency and accountability.
        </li>
        <li>
          Liquidation reflects a responsible approach to business exit,
          maintaining regulatory compliance and protecting stakeholder
          interests.
        </li>
        <li>
          The process legally terminates the company’s existence in the UAE,
          releasing it from future obligations and compliance requirements.
        </li>
        <li>
          Once liquidated, shareholders are safeguarded against future financial
          or legal claims related to the company.
        </li>
        <li>
          Closing a non-profitable entity allows investors to redirect focus and
          resources toward more promising business opportunities.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Copy of business license of the company</li>
        <li>Copy of MOA</li>
        <li>Copies of passports of the owner/ shareholders</li>
        <li>Copy of Emirates ID</li>
        <li>Power of Attorney (POA) if required</li>
        <li>Shareholders' resolution</li>
        <li>Application form (s)</li>
      </ul>

      <p className='pt-5 text-white md:text-[16px] text-[15px]'>
        Non-residents are eligible to open a bank account in Dubai; however, it
        will typically be limited to a savings account. Instead of a checkbook,
        account holders will receive a debit card for everyday transactions and
        spending.
      </p>

      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>A transcript of the utility bills </li>
        <li>Letter of recommendation from the customer’s original bank</li>
        <li>
          A brief CV stating the educational background and professional
          qualifications The customer’s passport.
        </li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Initiate the formal process by submitting an application for company
          liquidation to the relevant authorities in Dubai.
        </li>
        <li>
          Announce the decision to dissolve the company by publishing a notice
          in at least two local newspapers, marking the start of the 45-day
          objection period.
        </li>
        <li>
          Appoint a certified liquidator and obtain an official letter of
          acceptance to oversee the liquidation process.
        </li>
        <li>
          Allow for the mandatory 45-day notice period, during which any
          objections from creditors or concerned parties can be raised.
        </li>
        <li>
          Ensure that all employee and partner visas linked to the company are
          canceled as part of the closure process.
        </li>
        <li>
          The appointed liquidator must submit a final report confirming the
          closure and financial settlement of the company.
        </li>
        <li>
          Upon approval, obtain the official certificate of liquidation,
          formally ending the company’s legal existence in Dubai.
        </li>
      </ul>
    </div>
  ),
  jurs: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Mainland</li>
        <li>Free Zone</li>
        <li>Offshore</li>
      </ul>
    </div>
  )
}

function CompanyTabs () {
  const [active, setActive] = useState('mainland')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      {/* Animated Heading */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Things you should know
      </motion.h3>

      {/* Animated Tabs */}
      <motion.div
        className='flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
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

export default CompanyTabs
