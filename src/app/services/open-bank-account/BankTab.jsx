'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Steps to Opening an Account', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Submit official documentation that confirms the legal establishment of
          your business in Dubai, UAE.
        </li>
        <li>
          Ensure all corporate ownership papers are properly notarized to
          validate their legal authenticity.
        </li>
        <li>
          Decide between a local or international bank based on your company’s
          operational and financial needs.
        </li>
        <li>
          Confirm that your chosen bank account meets the minimum monthly
          balance requirement, which typically ranges from AED 20,000 to AED
          150,000.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Enjoy the advantages of liberal banking policies and flexible
          international transactions that support seamless business expansion.
          Dubai’s financial ecosystem is designed to facilitate smooth and
          timely transactions, allowing companies to focus on growth without
          administrative hurdles.
        </li>
        <li>
          Businesses may also benefit from attractive tax exemptions, enhancing
          profitability and financial efficiency. The banking system in Dubai is
          known for its strong emphasis on confidentiality, offering investors
          complete security and discretion in all financial dealings.
        </li>
        <li>
          Additionally, companies gain access to advanced online banking
          platforms, enabling them to conveniently manage accounts, transfer
          funds, and utilize a wide range of banking services—anytime, anywhere.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>A visa transcript</li>
        <li>A salary certificate</li>
        <li>Emirates ID</li>
        <li>Original passport with copy</li>
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
          Fill out the bank application form and provide all relevant
          company-related documents, such as proof of business activity, recent
          invoices, and client details.
        </li>
        <li>
          Submit the required documents along with the application. The bank
          will review and verify the information provided.
        </li>
        <li>
          After verifying the documents, the bank will either approve the
          application or reject it based on compliance and risk assessments.
        </li>
        <li>
          Upon approval, the bank may request additional details, including the
          background of directors and shareholders, business ownership
          structure, and management information.
        </li>
        <li>
          Once all required data is collected, the applicant will be invited for
          an interview. Following this, the bank will complete the formalities
          and proceed to open the corporate account.
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

function BankTab () {
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

export default BankTab
