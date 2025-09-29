'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Whychoose from '../../../public/assets/images/about/why.webp';

function WhyChoose() {
  return (
    <div className="md:pt-20 pt-10 px-4 md:px-8 lg:px-[90px]">
      <div className="relative overflow-hidden rounded-xl">
        {/* Background Image */}
        <Image
          src={Whychoose}
          width={2500}
          height={1800}
          alt="Why Choose Us"
          className="w-full h-full object-cover"
        />

        {/* Overlay with backdrop for readability */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 py-10">
          <motion.h3
            className="text-gradient text-[30px] md:text-[50px] font-[400] mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h3>

          <motion.ul
            className="text-white text-[16px] md:text-[18px] font-[300] space-y-3 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <li>In-depth knowledge of UAE business laws</li>
            <li>Dedicated consultants with multilingual support</li>
            <li>Fast and transparent processing</li>
            <li>Custom solutions tailored to your industry</li>
            <li>Strong network of legal and governmental contacts</li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
