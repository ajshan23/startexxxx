'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Benefits', key: 'mainland' },
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Jurisdictions', key: 'jurs' },
  { label: 'Steps to Acquiring License', key: 'commercial' },
]

const licenseContent = {

  freezone: (
    <div className='space-y-4 text-center'>
   <h6 className='text-white md:text-[20px] text-[16px]'>If you're a qualified and skilled professional with experience in your field, Startex can help you obtain your professional license in Dubai and begin your dream journey.</h6>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Supportive political regimes and authority are the benefits of a commercial license in Dubai. The leadership understands the role of entrepreneurs in the economic progress of the country. They extend wholehearted support consistently.
</li>
        <li>A cost-effective business set-up process in Dubai would aid you in starting a business or forming a company at minimal costs.</li>
        <li>
Export, import, or trade domestically with a commercial license in Dubai. A large populace with high per capita income elevates the possibility of business more.</li>
      </ul>
    </div>
  ),
    mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Determine the business activities your trade will conduct under the commercial license. The focus will be on sectors such as logistics, import/export, tourism, real estate etc.
</li>
        <li>Select trade name and registration, ensuring it complies with regulations set by authorities.</li>
        <li>
Gather important documentation that needs to be submitted to the Department of Economic Development and UAE Federal Ministry of Economy.</li>
      </ul>
    </div>
  ),
  offshore: 
   <div className='space-y-4 text-center'>
   <h6 className='text-white md:text-[20px] text-[16px]'>The validity of the license is 1 year, and therefore it is mandatory to renew it when it reaches its expiration date. The documents needed to obtain the Commercial license and the ones needed for license renewal are not identical. You have a different group of documents for license renewal. They are listed below:</h6>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Copy/original of license
</li>
        <li>Registered address lease contract (copy)</li>
        <li>
Concerned authority approvals (if needed)</li>
<li>Information regarding staff accommodation applies to foreign shareholder firms.</li>

      </ul>
    </div>
  ,
  commercial: 
   <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Prepare a local service agreement and prepare a Memorandum of Association (MoA) with the local service agent.
</li>
        <li>Sign the court agreements, submit attested forms, owner’s passport copy, and a No Objection Certificate (NOC) to the DED</li>
        <li>
Startex provides end-to-end support for professional agencies across the UAE—from securing necessary approvals to managing all documentation. Total setup costs generally range between AED 10,000 to AED 50,000, depending on the nature and scope of the business.</li>
      </ul>
    </div>
  ,

  jurs:  <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>You can begin a business in Dubai Mainland or any of the free zones. The decision regarding the jurisdiction would primarily depend on your business objective and plans. A capable business setup service can guide you in decision-making accordingly.
</li>
    
      </ul>
    </div>,

}

function OffTabs() {
  const [active, setActive] = useState('mainland') // default tab

  return (
    <div className='px-4 md:px-8 lg:px-[200px] pt-0 md:pt-10 pb-10'>

      {/* Heading with scroll animation */}
      <motion.h3
        className='text-gradient md:text-[50px] text-[27px] text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.6 }}
      >
       Key Factors to Know Before Applying for a Commercial License
      </motion.h3>

      {/* Tabs with scroll animation */}
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

      {/* Content Area with animated tab switching */}
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
