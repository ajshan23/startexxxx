'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const licenses = [
  { label: 'Benefits', key: 'mainland' },
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Documents', key: 'offshore' },
  { label: 'Steps to Acquiring License', key: 'commercial' },
  { label: 'Jurisdictions', key: 'jurs' },

  


]

const licenseContent = {

  freezone: (
    <div className='space-y-4 text-center'>
   <h6 className='text-white md:text-[20px] text-[16px]'>If you're a qualified and skilled professional with experience in your field, Startex can help you obtain your professional license in Dubai and begin your dream journey.</h6>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Begin by applying to the Department of Economy and Tourism (DET) to obtain approval for your professional license.
</li>
        <li>Choose and register a business name that complies with the naming guidelines set by the relevant authorities.</li>
        <li>
Prepare and submit all required documents, including civil company registration, document attestations, and lease agreements for your commercial space.</li>
      </ul>
    </div>
  ),
    mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Professional licenses in the UAE allow foreign investors to retain 100% ownership, offering full control over their business.
</li>
        <li>Dubai and the UAE provide a fertile ground for professional firms, backed by world-class infrastructure and business-friendly government policies.</li>
        <li>
To ensure compliance with the Department of Economic Development (DED), investors are required to appoint a local service agent.</li>
      </ul>
    </div>
  ),
  offshore: 
   <div className='space-y-4 text-center'>
   <h6 className='text-white md:text-[20px] text-[16px]'>The documents required for a professional license in UAE include:</h6>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Copies of passports of owner and shareholders
</li>
        <li>Passport-size photographs of owner and shareholders</li>
        <li>
Attested Memorandum of Association (MOA)</li>
<li>Completed application for a professional license in Dubai</li>
<li>NOC from the present employer if the professional is already employed in UAE and is on the payroll.</li>
<li>Approvals and permissions are necessary from departments like Dubai Municipality, Dubai Health Department, etc.</li>
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
        <li>Mainland
</li>
        <li>Free zone</li>
        <li>
Offshore</li>
      </ul>
    </div>,

}

function OffTabs  () {
  const [active, setActive] = useState('mainland') // 👈 default tab

  return (
    <div className='px-4 md:px-8 lg:px-[200px] pt-0 md:pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
   Guide to Owning an Professional Business in Dubai
      </h3>

      <div className='flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'>
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
      </div>

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
