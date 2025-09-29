'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Applying for a Maid Visa', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The sponsor must hold a valid UAE residency visa (including Green Visa
          or Business Visa).
        </li>
        <li>UAE Residents with family visas</li>
        <li>
          Sponsors must provide evidence of sufficient income and financial
          stability.
        </li>
        <li>
          Generally, a minimum monthly salary of AED 25,000–30,000 is expected
          (varies by emirate).
        </li>
        <li>
          The maid must be from an approved list of countries as per UAE
          regulations.
        </li>
        <li>
          The sponsor must provide accommodation, medical insurance, and return
          airfare upon contract termination.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The Tabdeer Program is a government-regulated initiative designed to
          safeguard the welfare of domestic workers in the UAE.
        </li>
        <li>
          It ensures ethical recruitment, proper working conditions, and legal
          protections for maids and household helpers.
        </li>
        <li>
          Individuals employed under this program are issued a maid visa valid
          for one year, which must be renewed annually by the sponsor.
        </li>
        <li>
          Sponsors are required to comply with all labor laws related to wages,
          accommodation, insurance, and contract terms.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Completed application form provided by the General Directorate of
          Residency and Foreign Affairs – Dubai (GDRFAD).{' '}
        </li>
        <li>Copy of passport for sponsor and spouse</li>
        <li>Copy of attested marriage certificate</li>
        <li>
          Attested copy of Resident’s Ejari or lease agreement (minimum
          two-bedroom apartment)
        </li>
        <li>Emirates ID</li>
        <li>Bank statement for recent 3-6 months</li>
        <li>Labor contract from sponsor’s employer (if applicable)</li>
        <li>Salary certificate from the sponsor’s employer</li>
        <li>Copy of residence visa</li>
        <li>Copy of maid’s passport</li>
        <li>Three photographs</li>
        <li>No-objection document from the country of residence</li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Submit an application to GDRFAD</li>
        <li>Sponsee must undergo medical tests and get health insurance.</li>
        <li>Approval of labor contract</li>
        <li>
          Visa fees to be enclosed for a 2-year visa will cost AED 14000 to AED
          18000.
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

function MaidTabs () {
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
        Essentials About Maid Visa in Dubai
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

export default MaidTabs
