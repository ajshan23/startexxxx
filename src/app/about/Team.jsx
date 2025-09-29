'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const TeamSlider = dynamic(() => import('./TeamSlider'), { ssr: false });

function Team() {
  return (
    <div className="md:pt-20 pt-10 px-4 md:px-8 lg:px-[90px]">
      <motion.h3
        className="text-gradient md:text-[50px] text-[27px] font-[500] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h3>

      <motion.p
        className="md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        At Startex Hub, our strength lies in our people. With decades of combined experience in UAE business setup, legal compliance, and client service, our team is dedicated to turning your entrepreneurial vision into reality.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <TeamSlider />
      </motion.div>
    </div>
  );
}

export default Team;
