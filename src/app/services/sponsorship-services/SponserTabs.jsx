'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [{ label: 'About Local Sponsorships', key: 'freezone' }]

const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <p className=' pt-5 text-white md:text-[16px] text-[15px]'>
        When forming a mainland company in Dubai, sponsorship is not just a
        legal formality—it is a vital component of the business setup process
        for foreign investors. According to UAE regulations, foreign-owned
        mainland businesses must appoint a local sponsor, who is a UAE national
        or an entity fully owned by UAE nationals. While this sponsor does not
        necessarily interfere with the day-to-day operations, their involvement
        is legally required for obtaining licenses, permits, and accessing
        government services.
      </p>

      <p className=' pt-5 text-white md:text-[16px] text-[15px]'>
        Selecting the right sponsor is crucial. A competent sponsor can open
        doors to valuable connections, facilitate smooth business registration,
        and provide strategic guidance within the local market. Some businesses
        may also consider ruling family sponsorships, which offer a high level
        of prestige and credibility. Backing from members of Dubai’s ruling
        families not only enhances your business’s reputation but can also lead
        to exclusive opportunities and partnerships in the UAE market. With the
        right sponsorship arrangement, foreign investors can enjoy operational
        control, strong market presence, and a seamless entry into the region’s
        thriving economy.
      </p>
    </div>
  )
}

function SponserTabs () {
  const [active, setActive] = useState('freezone')

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

      {/* Content Area with Tab Transition */}
      <div className='text-[18px]'>
        <AnimatePresence mode='wait'>
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

export default SponserTabs
