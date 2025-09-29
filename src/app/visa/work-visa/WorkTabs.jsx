'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Applying for an Employment Visa', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Employers must hold an active and valid business license to be
          eligible to sponsor employment visas.
        </li>
        <li>
          Employers must not have any criminal background or pending legal
          cases.
        </li>
        <li>
          Employers are required to possess at least a high school diploma.
        </li>
        <li>
          For sponsoring employees aged over 65, an additional fee of AED 5,000
          is applicable every two years.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Grants a renewable residence permit valid for two years, allowing you
          to live and work legally in the UAE.
        </li>
        <li>
          Enables you to open a local bank account for easy financial management
          and transactions.
        </li>
        <li>
          Offers access to diverse employment and business prospects, allowing
          you to contribute meaningfully to the UAE economy.
        </li>
        <li>
          Provides eligibility to avail public and private healthcare services
          across the country.
        </li>
        <li>
          Allows you to sponsor family members, so they can live with you in the
          UAE legally and securely.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Photograph of the applicant.</li>
        <li>Passport of the applicant.</li>
        <li>Medical certificate of the applicant.</li>
        <li>Residence visa.</li>
        <li>Employment agreement (3 copies).</li>
        <li>Proof of educational accomplishments.</li>
        <li>Valid trade license of the company.</li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The employer must first obtain approval from the Ministry of Labour to
          hire a foreign worker.
        </li>
        <li>
          Upon approval, the Ministry issues an entry permit valid for 30 days,
          allowing the employee to enter the UAE.
        </li>
        <li>
          A mandatory medical test must be completed as part of the visa
          process.
        </li>
        <li>
          After completing the medical and other formalities, the expat can
          apply for a Dubai employment visa at the Immigration Department.
        </li>
        <li>
          The Department of Naturalization and Residency Dubai (DNRD) handles
          visa stamping, officially granting UAE residency.
        </li>
        <li>
          Visa processing duration varies based on individual circumstances,
          employer category, and documentation.
        </li>
        <li>
          A Dubai employment visa is typically valid for two years and must be
          renewed before expiry.
        </li>
        <li>
          The cost ranges from approximately AED 250 to AED 3,450, depending on
          the employer type, profession, and visa category.
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

function WorkTabs () {
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
        Essentials About Employment Visa in Dubai
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

export default WorkTabs
