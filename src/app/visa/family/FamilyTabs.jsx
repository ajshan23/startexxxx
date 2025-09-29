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
          Expatriate residents with a valid UAE residency visa are legally
          permitted to sponsor their family members.
        </li>
        <li>
          Male sponsors must earn a minimum salary of AED 4,000, or AED 3,000
          with employer-provided accommodation.
        </li>
        <li>
          Female sponsors must earn at least AED 10,000, or AED 8,000 with
          accommodation.
        </li>
        <li>
          Once the family arrives in the UAE, sponsors have 60 days to apply for
          the dependent’s residence visa.
        </li>
      </ul>
    </div>
  ),

  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The family visa ensures a stable and secure environment for the
          families of UAE residents.
        </li>
        <li>
          It allows families to live together, helping them stay emotionally
          connected while residing in the UAE.
        </li>
        <li>
          Dependents can benefit from free education and health insurance,
          depending on the sponsor's employment package and emirate-specific
          policies
        </li>
        <li>
          Family visa holders are permitted to seek job opportunities in Dubai
          and across the UAE, subject to obtaining a work permit.
        </li>
        <li>
          Enjoy tax exemptions and other financial incentives extended by the
          UAE government to residents and their dependents.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Original or photocopy of sponsor’s passport/visa.</li>
        <li>Original Emirates ID of the sponsor.</li>
        <li>
          One passport-sized photo of the applicant with a white background.
        </li>
        <li>Original or photocopy of the applicant’s passport.</li>
        <li>Salary certificate (if employed in a free zone company).</li>
        <li>
          Three months’ bank statement and memorandum of agreement (if an
          investor or partner).
        </li>
        <li>Labor contract (if employed in the private sector).</li>
        <li>Marriage certificate attested by MOFA (if sponsoring a wife).</li>
        <li>Birth certificate attested by MOFA (if sponsoring children).</li>
        <li>Ejari (if the sponsor is renting).</li>
        <li>Title deed (if the sponsor owns the house).</li>
        <li>DEWA bills (proof of utility payments).</li>
        <li>IBAN.</li>
        <li>Opening file number. </li>
        <li>Medical results.</li>
        <li>EIDA application. </li>
        <li>Family medical insurance.</li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Fill out the official family visa application accurately.</li>
        <li>Valid company contract or salary certificate (from sponsor)</li>
        <li>
          All adult dependents (18 years and above) must undergo and pass
          medical fitness tests at an authorized health center in the UAE.
        </li>
        <li>
          Submit the complete application to the General Directorate of
          Residency and Foreigners Affairs (GDRFA). Upon approval, the family
          visa will be stamped into the dependent’s passport.
        </li>
        <li>With existing health insurance: AED 4,500 – AED 5,500</li>
        <li>Including new insurance coverage: AED 5,000 – AED 6,000</li>
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

function FamilyTabs () {
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
        Essentials About Family Visa in Dubai
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

export default FamilyTabs
