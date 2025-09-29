'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function LicenseModal ({ license, onClose }) {
  if (!license) return null
  useEffect(() => {
    const body = document.body

    const modalsOpen = parseInt(body.dataset.modals || '0', 10) + 1
    body.dataset.modals = modalsOpen

    if (modalsOpen === 1) {
      // First modal: disable scroll
      body.style.overflow = 'hidden'
      window.dispatchEvent(
        new CustomEvent('lenis-scroll-lock', { detail: 'lock' })
      )
    }

    return () => {
      const modalsLeft = parseInt(body.dataset.modals || '1', 10) - 1

      if (modalsLeft <= 0) {
        // Last modal closed: enable scroll
        body.style.overflow = ''
        delete body.dataset.modals
        window.dispatchEvent(
          new CustomEvent('lenis-scroll-lock', { detail: 'unlock' })
        )
      } else {
        body.dataset.modals = modalsLeft.toString()
      }
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 bg-[#000000e3]  z-[999] flex items-center justify-center p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='bg-[#333] rounded-2xl  w-full overflow-hidden relative  max-w-[1200px] mx-auto'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            className='absolute top-5 right-5 bg-gray-100 p-2 rounded-xl hover:bg-gray-200'
            onClick={onClose}
          >
            <X className='w-5 h-5' />
          </button>

          <div className='p-6 space-y-6'>
            {/* Header */}
            <div className='  p-4 rounded-xl mt-6'>
              <div className='flex items-center justify-center gap-2'>
                <h2 className='text-gradient md:text-[35px] text-[25px] font-[400] text-center'>
                  {license.name}
                </h2>
              </div>
            </div>

            {/* Main content */}
            <div className='md:flex gap-6'>
              <div className='md:w-1/2 w-full'>
                <Image
                  src={license.image}
                  alt={license.name}
                  width={600}
                  height={400}
                  className='rounded-xl w-full object-cover'
                />
              </div>
              <div className='md:w-1/2 w-full space-y-4 pt-4 md:pt-10'>
                <p className='text-white text-[15px] leading-relaxed'>
                  {license.description ||
                    `The increasing number of businesses in Dubai creates a constant demand for quality ${license.name?.toLowerCase()}. Starting a ${license.name?.toLowerCase()} in Dubai is an easy process, but for foreign investors and entrepreneurs, it might take time to familiarize themselves with the regulatory requirements.`}
                </p>
                <div className='flex gap-4 pt-4'>
                  <Link href='business-license'>
                    <button className='bg-gradient text-white px-5 py-3 rounded-lg font-medium text-sm'>
                      {' '}
                      Get License
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
