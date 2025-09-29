'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReDirect } from '../components/Icons';

import S1 from "../../../public/assets/images/services/s1.webp";
import S2 from "../../../public/assets/images/services/s2.webp";
import S3 from "../../../public/assets/images/services/s3.webp";
import S4 from "../../../public/assets/images/services/s4.webp";
import S5 from "../../../public/assets/images/services/s5.webp";
import S6 from "../../../public/assets/images/services/s6.webp";

const services = [
  {
    id: 1,
    image: S1,
    title: 'Trademark Registration',
    description:
      'A trademark protects a brand’s name, product, or service from unauthorized use, helping consumers identify authentic goods and their source.',
    link: '/services/trademark-registration',
  },
  {
    id: 2,
    image: S2,
    title: 'Find Local Sponser',
    description:
      'In UAE Mainland LLC formation, a local sponsor holds 51% ownership, while professional companies and representative offices allow 100% foreign ownership',
    link: '/services/sponsorship-services',
  },
  {
    id: 3,
    image: S3,
    title: 'Bank Account Opening',
    description:
      'Startex financial consultants assist you in opening personal and business bank accounts in Dubai, home to the Middle Easts largest banking sector.',
    link: '/services/open-bank-account',
  },
  {
    id: 4,
    image: S4,
    title: 'Company Liquidation',
    description:
      'Startex Hub offers company liquidation services for LLCs, offshore, and Free Zone companies in Dubai, helping businesses close operations during financial crises and debt challenges.',
    link: '/services/company-liquidation',
  },
  {
    id: 5,
    image: S5,
    title: 'PRO Services',
    description:
      'Startex Hub offers expert PRO services, assisting startups and established businesses in the UAE with government document processing and company formation across various zones',
    link: '/services/pro-services',
  },
  {
    id: 6,
    image: S6,
    title: 'Brand protection',
    description:
      'Startex Hub provides comprehensive brand protection services in Dubai and the UAE, helping clients register intellectual property, monitor brands, and prevent infringement and brand abuse.',
    link: '/services/brand-protection',
  },
];

export default function WhatWeDo() {
  return (
    <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-16" id="what-we-do">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-gradient md:text-[50px] text-[27px] font-[500] text-center">
          What We Do.
        </h3>
        <p className="md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] mx-auto text-secondary text-center">
          At Startex Hub Business Setup Services, we help businesses succeed in the UAE by providing
          company formation, liquidation, PRO services, bank account assistance, trademark
          registration, brand protection, and expert consulting — delivering end-to-end support for
          every stage of your business journey.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="pt-14 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="w-full md:w-[48%] lg:w-[32%]"
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={service.image}
                width={500}
                height={500}
                alt={service.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 p-4 flex flex-col justify-between bg-black/50 backdrop-blur-sm rounded-2xl">
                <div>
                  <h3 className="text-[20px] font-[500] text-white">{service.title}</h3>
                  <p className="text-[14px] font-[300] pt-2 text-white">{service.description}</p>
                </div>
                <div className="pt-4 flex justify-end">
                  <Link
                    href={service.link}
                    className="bg-gradient w-[45px] h-[45px] flex justify-center items-center rounded-full hover:scale-110 transition-transform"
                  >
                    <ReDirect />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
