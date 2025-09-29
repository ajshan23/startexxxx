'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import bl1 from '../../../public/assets/images/about/bl1.webp';
import bl2 from '../../../public/assets/images/about/bl2.webp';
// import bl3 from '../../../public/assets/images/about/bl3.webp';
import bl4 from '../../../public/assets/images/about/bl4.webp';
import bl5 from '../../../public/assets/images/about/bl5.webp';
import bl6 from '../../../public/assets/images/about/bl6.webp';

const categories = [
  { title: 'Business Setup', image: bl1 },
  { title: 'Breaking News', image: bl2 },
  // { title: 'Legal', image: bl3 },
  { title: 'Real Estate', image: bl4 },
  { title: 'Mainland', image: bl5 },
  { title: 'Freezone', image: bl6 },
];

function BlogBanner() {
  return (
    <div className="pt-10 main-pt px-4 md:px-8 lg:px-[90px] z-40">
      <motion.h6
        className="md:text-[18px] text-[16px] text-center font-[300] text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Startex Guide
      </motion.h6>

      <motion.h1
        className="md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Business Setup Insights for Every Entrepreneur
      </motion.h1>

      <div className="pt-10 pb-10">
        <div className="mx-auto flex flex-wrap justify-between gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className={`relative md:w-[200px] w-[48%] md:h-[220px] h-[160px] rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-105 ${
                i % 2 === 1 ? 'md:mt-12' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-sm text-center py-1 rounded-md">
                {cat.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogBanner;
