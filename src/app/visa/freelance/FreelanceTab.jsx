'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Applying for a Freelance Visa', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          A minimum of a bachelor's degree, specialized diploma, or an
          equivalent qualification is required.
        </li>
        <li>
          Applicants must obtain a work permit from the Ministry of Human
          Resources and Emiratization (MOHRE).
        </li>
        <li>
          A minimum annual income of AED 360,000 for the past two consecutive
          years is necessary for self-employed individuals.
        </li>
        <li>
          Freelance permits are available for professionals in key industries,
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Freelancers can work independently for any company or project of their
          choice, without being tied to a single employer.
        </li>
        <li>
          Obtaining a freelance visa in Dubai is relatively affordable, making
          it easier for professionals to tap into the city's vast opportunities.
        </li>
        <li>
          A freelance visa, along with a freelance permit, allows you to operate
          legally within Dubai’s free zones and work as an independent
          contractor across the UAE.
        </li>
        <li>
          Freelancers are eligible to sponsor and bring their family members to
          live in Dubai under their visa.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Updated resume</li>
        <li>Recent photograph</li>
        <li>Copy of the passport and the visa</li>
        <li>Completed application form</li>
        <li>Two professional references (contact details included)</li>
        <li>
          Academic certificates attested by the UAE Consulate or the Ministry of
          Foreign Affairs
        </li>
        <li>
          Job offer or a letter of intent (must include personal/professional
          background and work experience)
        </li>
        <li>No Objection Certificate (NOC) from your sponsor (if required)</li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Research and choose a Free Zone jurisdiction that supports freelance
          permits in your industry.
        </li>
        <li>
          Submit an application to obtain a freelance permit in your chosen
          field.
        </li>
        <li>
          Attested academic certificates (by UAE Consulate or Ministry of
          Foreign Affairs)
        </li>
        <li>After securing the permit, apply for your freelance visa.</li>
        <li>
          Undergo standard medical fitness tests required by UAE immigration
          authorities.
        </li>
        <li>
          Submit all necessary fees for the freelance permit and visa
          processing.
        </li>
      </ul>
    </div>
  ),
  jurs: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Dubai Internet City - Freelance visa cost: AED 7500</li>
        <li>Dubai Media City - Freelance visa cost: AED 7250</li>
        <li>Dubai Design District - Freelance visa cost: AED 70,000</li>
        <li>Dubai Knowledge Park - Freelance visa cost: AED 100,000</li>
      </ul>
    </div>
  )
}

function FreelanceTab () {
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
        Essentials About Freelance Visa in Dubai
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

export default FreelanceTab
