'use client'
import React from 'react'
import LicenseTabs from '../components/LicenseTabs'
import { motion } from 'framer-motion'
import WorkTabs from './WorkTabs'

function Benafits() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] py-20 bg-black'>
            <motion.h3
                className='text-gradient md:text-[50px] text-[27px] text-center'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            >
                Benefits Of Getting an Work Space in Dubai
            </motion.h3>

            <WorkTabs />
        </div>
    )
}

export default Benafits
