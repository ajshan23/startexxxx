'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Applying for a Tourist Visa', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Maintain a bank balance of at least AED 14,000 as financial proof for
          your stay.
        </li>
        <li>
          Obtain a valid health insurance policy that covers your entire
          duration in the UAE.
        </li>
        <li>
          Provide a confirmed ticket to and from the UAE to ensure compliance
          with visa regulations.
        </li>
        <li>
          Submit details of your hotel booking or residential address for your
          stay in the UAE.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Explore world-renowned attractions like the Burj Khalifa, Sheikh Zayed
          Grand Mosque, Palm Jumeirah, and the Louvre Abu Dhabi.
        </li>
        <li>
          Experience the UAE’s rich traditions, local cuisine, art, and music
          while engaging with a vibrant and welcoming society.
        </li>
        <li>
          While on a tourist visa, you can explore potential investment and
          business opportunities (without engaging in employment or commercial
          activity unless permitted).
        </li>
        <li>
          Interact with people from diverse cultures and nationalities,
          reflecting the UAE’s global community and cosmopolitan lifestyle.
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
          Apply online via the official UAE government portal or submit your
          application in person at the General Directorate of Residency and
          Foreigners Affairs (GDRFA) headquarters in Dubai.
        </li>
        <li>
          Complete the visa application form and submit it along with the
          required documents.
        </li>
        <li>30-day tourist visa: AED 200</li>
        <li>
         60-day tourist visa: AED 300
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

function TouristTabs () {
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
        Essentials About Tourist Visa in UAE
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

export default TouristTabs
