'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Steps to Acquiring License', key: 'commercial' }
]
const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The E-trader license is Emirate-specific. E-trader licenses issued in
          Dubai cannot be used for trading in other Emirates.
        </li>
        <li>
          UAE and GCC nationals can engage in both commercial and professional
          trading via social media accounts. This means that they are allowed to
          sell physical goods and commodities along with services via social
          media platforms.
        </li>
        <li>
          The eligibility for license issuance and the type of trading activity
          are dependent on the nationality of the expat entrepreneur.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          E-trader licensing instills customer confidence and promotes
          trouble-free online sales. It brings legitimacy and authenticity to
          online trading and E-commerce.
        </li>
        <li>
          E trader license gives an individual the legal authority to market or
          sell a product via various online platforms like websites and other
          social media platforms.
        </li>
        <li>
          Home-based business entrepreneurs get a wonderful opportunity to take
          part in events and exhibitions and showcase their products and
          commodities.
        </li>
        <li>
          The license holder can sell the product via various E-commerce
          websites like Souq.com. It safeguards intellectual property and trade
          names.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Must be located in Dubai and must have a valid Emirates ID.</li>
        <li>The minimum applicable age is 21.</li>
        <li>
          Register the trade name with the authorities. The approval has to be
          attached to the application.
        </li>
        <li>Proof of residence (Makani number).</li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          The E trader license registration is a simple process. You may pursue
          the same by registering on the DED Trader website.
        </li>
        <li>
          Visit the DED Trader website and create an account. Furnish your
          details regarding your social media account. Pay the license fee after
          registration.
        </li>
        <li>
          The Dubai E Trader license fee is AED 1070. It is mandatory to renew
          the license annually.
        </li>
       
      </ul>
    </div>
  ),
  jurs: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Individuals and home-business endeavors who endorse and sell products
          online via websites or social media can apply for an E trader license.
          If you are planning to work from home using social media platforms and
          don’t want to hire an office, then an e-trader license in Dubai is the
          ideal solution to help your business flourish.
        </li>
      </ul>
    </div>
  )
}

function OffTabs () {
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
        Guide to Owning an E-Trader License in Dubai
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

export default OffTabs
