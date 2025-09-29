'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import officeSpace1 from '../../../public/assets/images/workspace/office-space-1.webp';
import officeSpace2 from '../../../public/assets/images/workspace/office-space-2.webp';
import officeSpace3 from '../../../public/assets/images/workspace/office-space-3.webp';
import officeSpace4 from '../../../public/assets/images/workspace/office-space-4.webp';

import Link from 'next/link';
import { ReDirect } from '../components/Icons';

function OfficeSpaceCard({ image, title, description, link }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='relative pt-10'
        >
            <Image
                src={image}
                width={600}
                height={600}
                className="w-full h-full rounded-2xl"
                alt={title}
            />

            <div className='md:absolute top-0 left-0 w-[100%] h-full flex items-center justify-center' id='office-space-card'>
                <div className='bg-office w-full md:w-[50%]'>
                    <h3 className='md:text-[32px] text-[24px] font-[400] text-center text-white'>{title}</h3>
                    <p className='md:text-[16px] text-[14px] font-[300] text-center text-white pt-5'>{description}</p>
                    <div className='pt-5 flex justify-center'>
                        <Link
                            href={link}
                            className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                        >
                            <ReDirect />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function OfficeSpaces() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
>
  <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
    Office Space Solutions
  </h3>
  <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>
    Explore a diverse range of office solutions tailored to your business needs, including virtual offices, co-working spaces, executive suites, and more, all designed to support your growth in the UAE&rsquo;s dynamic market.
  </p>
</motion.div>

            <OfficeSpaceCard
                image={officeSpace1}
                title="Business Center Rental"
                description="Begin your business ventures to establish yourself in Dubai’s economic landscape by renting a business center."
                link="/workspace/business-center"
            />

            <OfficeSpaceCard
                image={officeSpace2}
                title="Virtual Office"
                description="Establish your business with a virtual office in the innovation hub of the Middle East, Dubai."
                link="/workspace/virtual-office"
            />

            <OfficeSpaceCard
                image={officeSpace3}
                title="Flexi Desk Office"
                description="Join the business community in Dubai’s flourishing landscape with a Flexi desk office."
                link="/workspace/flexi-desk"
            />

            <OfficeSpaceCard
                image={officeSpace4}
                title="Rent a Cabin in Dubai"
                description="Fulfill basic amenities to kick start your business ventures by renting a cabin in Dubai, UAE."
                link="/workspace/rent-cabin"
            />
        </div>
    );
}

export default OfficeSpaces;
