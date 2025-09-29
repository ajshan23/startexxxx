'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents', key: 'offshore' }
]

const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          A company can be registered in the Mainland, a Free Zone, or as an
          Offshore entity in Dubai, UAE
        </li>
        <li>
          Determine the appropriate class for your trademark from the UAE’s 44+
          trademark registration categories.
        </li>
        <li>
          Make sure your trademark logo meets all regulatory standards set by
          UAE authorities.
        </li>
        <li>
          Partner with a reputable trademark registration provider to ensure a
          smooth and efficient application process in Dubai.
        </li>
        <li>
          Ensure all necessary documents are complete and ready for submission
          to avoid delays.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          A trademark represents your brand’s identity and helps communicate its
          value to the public.
        </li>
        <li>
          For reputable businesses, a trademark becomes a valuable intangible
          asset that can significantly enhance brand equity.
        </li>
        <li>
          A well-crafted logo helps your business stand out in a crowded market,
          distinguishing it from competitors.
        </li>
        <li>
          Trademarks safeguard your products against counterfeit and look-alike
          imitations, ensuring brand authenticity.
        </li>
        <li>
          Trademarks can boost your brand’s visibility on platforms like
          Facebook, Instagram, and other digital channels, strengthening your
          online presence.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Trademark registration application</li>
        <li> Trade license of the business establishment</li>
        <li>Details about trademark logo or name</li>
        <li> Fee payment acknowledgement</li>
        <li>
          Power of Attorney
        </li>
        <li>
          Priority Document (copy)
        </li>
        <li> Details of products and services that come under trademark</li>
        <li> A passport copy of the applicant</li>
        <li> Applicant’s contact details</li>
      </ul>
    </div>
  )
}

function TradeTab () {
  const [active, setActive] = useState('mainland')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      {/* Heading Animation */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Things you should know
      </motion.h3>

      {/* Tab Buttons Animation */}
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

      {/* Animated Content Area */}
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

export default TradeTab
