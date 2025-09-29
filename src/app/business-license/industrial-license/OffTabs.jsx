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
      <h6 className='text-white md:text-[20px] text-[16px]'>
        There are certain prerequisites that an investor needs to accomplish
        before applying for an industrial license in Dubai:
      </h6>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          51% sponsor share – Find a local sponsor for your company. The local
          sponsor holds 51% of the company share and the remaining 49% goes to
          the foreign investor.
        </li>
        <li>
          Local license – A local industrial license is mandatory for industrial
          concerns. These licenses are usually issued from the area of
          operation.
        </li>
        <li>
          Office and warehouse – A physical office space and a warehouse in
          Dubai are mandatory to obtain an industrial license. Owning a virtual
          office space in Dubai will not grant you a license.
        </li>
        <li>Employees – A minimum of 10 employees or workers is mandatory.</li>
        <li>
          Capital Investment – Minimum of AED 250,000 must be set aside as the
          capital of your company. 5HP specification machines are mandatory.
        </li>
      </ul>
    </div>
  ),
  mainland: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Access to government contracts: Those who possess an industrial
          license are eligible to participate in government projects and
          contracts.
        </li>
        <li>
          Enhanced Credibility: An industrial license is a guarantee that the
          license holder will provide reliable services.
        </li>
        <li>
          Possibility of sponsoring workers: Owners of legitimate industrial
          licenses will be permitted to sponsor workers for visas.
        </li>
        <li>
          Tax and legal benefits: Industrial businesses must possess an
          industrial license to qualify for the various tax breaks and rebates.
        </li>
        <li>
          Acts as market entrant: Industrial licenses allow prospective
          investors in the industrial sector to be part of the growing economy
          of Dubai.
        </li>
      </ul>
    </div>
  ),
  offshore: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Business report elaborating the operations planned, equipment to be
          used, facilities related to the industrial project, the number of
          employees, etc.
        </li>
        <li>
          Copy of Emirates ID or copy of the passport of the owner and
          shareholders.
        </li>
        <li>Passport-size photographs of owner and shareholders.</li>
        <li>Company formation documents.</li>
        <li>
          Location plan with the specifications of the industrial unit planned,
          with all the units marked clearly.
        </li>
      </ul>
    </div>
  ),
  commercial: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Creating a business plan is indeed important as the business plan will
          help decide and this plan needs to be submitted for obtaining the
          industrial license as well.
        </li>
        <li>
          Administrative proposals have to be obtained if you are planning a
          manufacturing industry and you have to see the factory requirements
          and the location of the factory as well.
        </li>
        <li>
          The next step is to apply for an industrial license in Dubai. If you
          want to take the location of your business to the mainland of Dubai,
          then you need to take up the application to the Department of Economic
          Development. If you are planning to set up your business in the free
          zones, then you need to apply to the relevant authorities of the Free
          zone.
        </li>
        <li>
          You are required to get additional approvals from the Chamber of
          Commerce and Industry, Industrial Register, and The Ministry of
          Health.
        </li>
        <li>
          The overall estimated cost for an industrial license is about AED
          25000.
        </li>
      </ul>
    </div>
  ),
  jurs: (
    <div className='space-y-4 text-center'>
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>
          Businesses in the United Arab Emirates, including Dubai, can be
          established either in the mainland or within designated free zones. In
          certain free zones—such as Dubai Media City and Dubai Silicon
          Oasis—entrepreneurs are required to obtain a specific license to
          legally operate their business.
        </li>
      </ul>
    </div>
  )
}

function OffTabs () {
  const [active, setActive] = useState('mainland') // 👈 default tab

  return (
    <div className='px-4 md:px-8 lg:px-[200px] pt-0 md:pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
        Guide to Owning an Industrial license in Dubai
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
