"use client";
import Link from 'next/link';
import React from 'react';
import { ReDirect } from '../components/Icons';
import Image from 'next/image';
import G1 from "../../../public/assets/images/guide/g1.webp";
import G2 from "../../../public/assets/images/guide/g2.webp";
import G3 from "../../../public/assets/images/guide/g3.webp";
import { motion } from "framer-motion";

function BusinessStartGuide() {

    const guideData = [
        {
            image: G1,
            heading: "Where to Start?",
            description: "Dubai is the land of opportunities where your business can thrive. With expert guidance from Statex Business Setup Services, you can confidently explore and seize global opportunities.",
           link: "/guide/where"
        },
        {
            image: G2,
            heading: "How to Start?",
            description: "Startex Business Setup Services will guide you through the essential formalities to ensure optimal business setup in Dubai. The proactive policies make it ideal for launching your company.",
           link: "/guide/how"
        },
        {
            image: G3,
            heading: "Why Start a business?",
            description: "With over two decades in Dubai, Startex Hub Business Setup Services has witnessed the city’s rise as a tech-driven hub. We provide expert guidance to help you successfully launch your business.",
                link: "/guide/why"
        }
    ];

    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 md:pb-10'>
            {guideData.map((item, index) => {
                const isEven = index % 2 === 0;
                const imageFirstDesktop = isEven ? 'md:order-2' : 'md:order-1';
                const contentFirstDesktop = isEven ? 'md:order-1' : 'md:order-2';

                return (
                    <div key={index} className="md:pt-10 flex flex-col md:flex-row flex-wrap items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className={`md:w-1/2 w-full ${imageFirstDesktop}`}
                        >
                            <Image
                                src={item.image}
                                width={600}
                                height={600}
                                className="w-full h-full rounded-2xl"
                                alt="Business Setup"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className={`md:w-1/2 w-full ${contentFirstDesktop}`}
                        >
                            <h4 className={`text-gradient md:text-[40px] text-[20px] font-[500] pt-5 ${isEven ? 'md:text-end md:pe-10' : 'md:ps-10'}`}>
                                {item.heading}
                            </h4>
                            <div className={`md:w-[70%] pt-5 text-left ${isEven ? 'md:ms-auto md:pe-10 md:text-end' : 'md:me-auto md:ps-10'}`}>
                                <p className="md:text-[16px] text-[15px] font-[300] text-secondary">
                                    {item.description}
                                </p>
                                <div className={`pt-5 pb-10 flex ${isEven ? 'justify-end' : ''}`}>
                                    <Link
                                     href={item.link}
                                        className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                                    >
                                        <ReDirect />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}

export default BusinessStartGuide;
