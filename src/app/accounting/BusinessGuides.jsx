'use client'
import React from 'react'
import Businesstabs from './Businesstabs'
import { motion } from 'framer-motion'

function BusinessGuides () {
  return (
    <div>
      <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
        <motion.h3
          className='text-gradient md:text-[50px] text-[27px] text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
       
        </motion.h3>

        <Businesstabs />
      </div>
    </div>
  )
}

export default BusinessGuides
