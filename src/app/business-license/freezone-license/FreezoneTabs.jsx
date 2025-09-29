'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

  const licenses = [
    { key: "mainland", label: "Essentials For a Free Zone License" },
    { key: "freezone", label: "Benefits" },
    { key: "offshore", label: "Estimated Cost of Free Zone License" },
    { key: "commercial", label: "Jurisdiction" },
   
  ]

  const licenseContent = {
    mainland: (
      <div className="space-y-4 text-center">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Determine the business entity and choose between a Free Zone Company (FZC), Free Zone Establishment (FZE), or branch office.",
            "Determine the license category to proceed with obtaining initial approvals from free zone authorities.",
            "Secure an office space to begin business activities based on the category of business and the number of staff members.",
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
            "Free zone companies give international investors 100% foreign ownership.",
            "Investors and entrepreneurs enjoy the benefits of tax exemptions, including corporate, income, and personal tax.",
            "Companies also enjoy advantageous perks such as no foreign exchange restriction, an easy recruitment process, and exemptions from import and export charges. ",
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
            "Dubai free zone company formation expenses typically range from AED 10k to 50k depending on the type of license the company opts for.",
            "If the business selected comes under the F2C, F2E, or branch of a foreign or UAE company, your registration charges will range from AED 15K to 50K.",
            "Office space charges to be accounted for may amount to AED 20k. Moreover, visa charges to be considered depending on the number of employees will be AED 5k.",




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
            "Jaffa",
            "DMCC",
            "Dubai South Free Zone",
            "Ajman Media City",
            "Shams Free Zone",
            "International Free Zone Authority",
            "Dubai Airport Free Zone",
            "Dubai Knowledge Park",

  



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

function FreezoneTabs  () {
  const [active, setActive] = useState('mainland') // 👈 default tab

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
     <motion.h3
  className='text-gradient md:text-[50px] text-[27px] text-center'
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
  viewport={{ once: true, amount: 0.6 }}
>
  Guide to Owning a Free Zone Business in Dubai
</motion.h3>

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: 0.1 }}
  viewport={{ once: true, amount: 0.6 }}
      className='text-[18px]'>
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
      </motion.div>
    </div>
  )
}

export default FreezoneTabs
