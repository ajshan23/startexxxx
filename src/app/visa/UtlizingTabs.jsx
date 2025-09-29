'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Essentials About Visa Services', key: 'freezone' },
  { label: 'Investor Visa Solutions', key: 'investorVisa' }
];

const licenseContent = {
  freezone: (
    <div className='space-y-4 text-center'>
      <p className='pt-5 text-white md:text-[16px] text-[15px]'>
        The UAE offers a variety of visa options for foreigners who wish to live
        or work in Dubai. Whether you're planning a short-term visit or a
        long-term stay for personal or professional reasons, there is a visa
        category tailored to your needs. Startex, one of the leading visa
        consultants in the UAE, helps individuals and businesses identify and
        obtain the most suitable visa for their specific requirements.
      </p>

      <p className='pt-3 text-white md:text-[16px] text-[15px]'>
        From initial documentation to final visa issuance, Startex provides
        end-to-end support for a wide range of visa services across Dubai and
        the wider Emirates. Our team of experienced visa consultants is equipped
        to manage everything from personal applications to complex corporate
        immigration needs. With dedicated and specialized teams for
        documentation and processing, we ensure accuracy, compliance, and
        efficiency at every stage.
      </p>
    </div>
  ),

  investorVisa: (
    <div className='space-y-4 text-center'>
      <p className='pt-5 text-white md:text-[16px] text-[15px]'>
        The UAE Investor Visa is ideal for individuals looking to establish or invest
        in businesses within the Emirates. It allows foreign investors to obtain long-term
        residency while actively participating in the country's growing economy.
      </p>

      <p className='pt-3 text-white md:text-[16px] text-[15px]'>
        Startex assists entrepreneurs and investors with every step of the Investor Visa
        application process—from identifying qualifying investments to preparing the
        necessary documents. Our experts ensure a seamless experience, helping you
        benefit from the UAE’s tax advantages, robust legal framework, and access to global markets.
      </p>
    </div>
  )
};

export default function UtlizingTabs () {
  const [active, setActive] = useState('freezone')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <div className='flex md:flex-wrap gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'>
        {licenses.map(license => (
          <motion.button
            key={license.key}
            onClick={() => setActive(license.key)}
            // whileTap={{ scale: 0.95 }}
     
            // transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              active === license.key
                ? 'bg-gradient text-white shadow-lg'
                : 'bg-black border border-gray-500 text-white hover:bg-gray-800'
            }`}
          >
            {license.label}
          </motion.button>
        ))}
      </div>

      <div className='text-[18px] min-h-[80px] text-center'>
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
