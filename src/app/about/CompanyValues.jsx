'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import visionImg from '../../../public/assets/images/about/vission.webp';
import missionImg from '../../../public/assets/images/about/mission.webp';
import commitmentImg from '../../../public/assets/images/about/commitment.webp';
import servicesImg from '../../../public/assets/images/about/service.webp';

const items = [
  {
    title: 'Our Vision',
    color: 'text-gradient',
    image: visionImg,
    content:
      "At Startex Hub, our vision is to be the leading business consultancy in Dubai, known for empowering entrepreneurs and enterprises to thrive in the UAE market. We strive to be the trusted partner that businesses rely on for sustainable growth and seamless expansion.",
  },
  {
    title: 'Our Mission',
    color: 'text-gradient',
    image: missionImg,
    content:
      "Our mission at Startex Hub is to streamline the journey of business formation and expansion in Dubai. We are dedicated to providing expert consultancy, legal support, and strategic guidance to help businesses launch, scale, and succeed confidently in the UAE.",
  },
  {
    title: 'Commitment',
    color: 'text-gradient',
    image: commitmentImg,
    content:
      "Startex Hub is committed to delivering excellence in every aspect of business consultancy. We combine market expertise with personalized service, ensuring our clients receive practical solutions and unwavering support throughout their business lifecycle in Dubai.",
  },
  {
    title: 'Our Services',
    color: 'text-gradient',
    image: servicesImg,
    content:
      "As a comprehensive business consultancy in Dubai, Startex Hub offers expert support in Company Formation, Employee and Family Visa Assistance, Document Attestation, PRO Services, Golden Visa Processing, and more. We simplify your setup and operational challenges so you can focus on growth.",
  },
];


export default function CompanyValues() {
  return (
    <div className="xl:pt-20 pt-10 px-4 xl:px-8 lg:px-[90px] grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className="w-full flex flex-col sm:flex-row gap-4 md:gap-6 rounded-xl overflow-hidden shadow-lg py-3 xl:py-10 px-2 xl:px-4"
        >
          {/* Image */}
          <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg sm:flex-1 flex items-center justify-center sm:min-h-[350px]">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Text */}
          <div className="bg-[#9999991c] border border-[grey] rounded-xl shadow-lg sm:flex-1 p-4 xl:p-8 flex flex-col justify-center sm:min-h-[350px]">
            <h2 className={`text-[30px] font-semibold mb-4 ${item.color}`}>{item.title}</h2>
            <p className="text-gray-200 text-[16px] pt-2 leading-[1.6]">{item.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
