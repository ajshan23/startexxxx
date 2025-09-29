"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Tabs from './Tabs'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const tabsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

function BusinessGuidesTabs() {
    return (
        <motion.div 
            className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div variants={titleVariants}>
                <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>Business Guides</h3>
            </motion.div>
            
            <motion.div variants={tabsVariants}>
                <Tabs />
            </motion.div>
        </motion.div>
    )
}

export default BusinessGuidesTabs