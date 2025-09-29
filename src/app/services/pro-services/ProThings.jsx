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
        <li>
          Engage a trusted business consultant to guide you through the company
          formation process, ensuring all legal and procedural steps are
          followed accurately.
        </li>
        <li>
          Familiarize yourself with relevant government policies and compliance
          requirements, as they are essential for effective company setup and
          ongoing management.
        </li>
        <li>
          Make sure the PRO service provider complies with all regulatory
          standards and is authorized to act on your behalf to avoid legal
          complications.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          PRO services allow you to focus on your core business operations by
          handling time-consuming administrative tasks such as documentation,
          approvals, and licensing—saving you valuable time and effort.
        </li>
        <li>
          Experienced PRO service providers are well-versed in local laws and
          regulatory procedures, ensuring that all government-related processes
          are handled smoothly and without unnecessary delays or confusion.
        </li>
        <li>
          Professional PRO firms maintain a high level of transparency by
          providing detailed receipts and documentation for every payment made
          on your behalf, ensuring trust and accountability throughout the
          process.
        </li>
        <li>
          PRO services offer competitive pricing, with service fees determined
          through careful market analysis. This ensures that your business
          receives value without being burdened by excessive charges.
        </li>
        <li>
          PRO professionals stay up to date with the latest legal changes,
          ensuring your business remains fully compliant with current
          regulations in Dubai. This proactive approach reduces the risk of
          penalties or delays.
        </li>
       
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Processing of visas (including renewals, cancellations, and applications) </li>
        <li>Family visa/spouse visa processing</li>
        <li>Worker's permits or a visa for employees</li>
        <li>Attestation of documents</li>
        <li>Translations of official documents into Arabic</li>
        <li>Certificates of authenticity from the Chamber of Commerce and the Department of Foreign Affairs</li>
        <li>Processing of trade licenses (new applications and renewals)</li>
        <li>Trade name registration and business licensing</li>
        <li>Processing of health insurance.</li>
        <li>Easing the process of meeting government demands and tasks.</li>
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

function ProThings () {
  const [active, setActive] = useState('mainland')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      {/* Animated Heading */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Things you should know
      </motion.h3>

      {/* Animated Tabs */}
      <motion.div
        className='flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'
        initial={{ opacity: 0, y: 30 }}
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

export default ProThings
