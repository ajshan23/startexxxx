'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

  const licenses = [
    { key: "mainland", label: "Essentials of an offshore business" },
    { key: "freezone", label: "Benefits" },
    { key: "offshore", label: "Documents" },
    { key: "commercial", label: "Jurisdiction" },
   
  ]

  const licenseContent = {
    mainland: (
      <div className="space-y-4 text-center">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "With the right support from Startex, setting up an offshore company becomes a seamless process.",
            "Select the appropriate business structure. The company should have at least one shareholder, a minimum of two directors, and a registered office space.",
            "Open a bank account.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-left"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

    freezone: (
      <div className="space-y-4 text-left">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Companies enjoy 100% tax exemption from personal, corporate, and income taxes.",
            "Hassle-free international transactions. Offshore jurisdictions allow businesses to be exempt from import and export duties.",
            "Shareholder and capital flexibility simplifies ownership structures.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-left"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

    offshore: (
         <div className="space-y-4 text-left">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Application in the requisite format",
            "Address proof",
            "Documents from the bank indicating the details and bank reference letter",
            "Copies of passports of owner and shareholders",
            "Copy of passport of the designated manager",
            "Notarized Memorandum of Association (MOA)",
            "Business plan",
            "Curriculum Vitae indicating the owner’s professional data",







          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-left"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

    commercial: (
        <div className="space-y-4 text-left">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Ras Al-Khaimah",
            "Jafza",


  



          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-start"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

 
  }

function OffTabs() {
  const [active, setActive] = useState('mainland') // default tab

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>

      {/* Heading with animation */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Guide to Owning an Offshore Business in Dubai
      </motion.h3>

      {/* Button group with animation */}
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

      {/* Tab content area */}
      <div className='text-[18px]'>
        <AnimatePresence mode="wait" initial={false}>
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
