'use client';

import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { ReDirect } from '../components/Icons';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import Setup from "../../../public/assets/images/accounting/s.webp";
import Image from 'next/image';

const faqData = [
    {
        question: 'VAT registration',
        answer: 'VAT is a tax levied on consumption of commodities and hence it is known as a Consumption tax...',
        link: '/accounting/vat-registration',
    },
    {
        question: 'Accounting and Bookkeeping',
        answer: 'When it comes to starting a business in UAE Mainland or Freezone...',
        link: '/accounting/accounting-book-keeping',
    },
    {
        question: 'Auditing services',
        answer: 'Understand the business setup cost, licensing procedure...',
        link: '/accounting/auditing-services',
    },
    {
        question: 'VAT Return',
        answer: 'We help you navigate early-stage business challenges...',
        link: '/accounting/vat-return',
    },
    {
        question: 'CFO Services',
        answer: 'Our team ensures smooth registration and business functioning...',
        link: '/accounting/cfo-services',
    },
];

function How() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10"
        >
            <h3 className="text-gradient md:text-[50px] text-[27px] text-center">How to Setup Business in Dubai?</h3>
            <p className="md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0">
                At Startex Hub, we help entrepreneurs and businesses launch or expand in Dubai and the UAE...
            </p>

            <div className="md:flex pt-20">
                <div className="md:w-[60%] pe-10 md:pt-0 pt-5">
                    <div className="relative pt-10">
                        {faqData.map((item, index) => (
                            <div key={index} className="text-white py-4 border-b border-white/10 last:border-none">
                                <div
                                    className="flex justify-between items-start cursor-pointer"
                                    onClick={() => toggleIndex(index)}
                                >
                                    <h4 className="font-semibold text-[20px] max-w-[90%] text-left">{item.question}</h4>
                                    <div className="ml-4 shrink-0">
                                        {activeIndex === index ? (
                                            <Minus size={20} className="text-white" />
                                        ) : (
                                            <Plus size={20} className="text-white" />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                                            className="overflow-hidden mt-3 pr-8"
                                        >
                                            <p className="text-sm text-white/80">{item.answer}</p>
                                            <Link
                                                href={item.link}
                                                className="bg-gradient w-[50px] h-[50px] flex justify-center items-center rounded-full mt-4"
                                            >
                                                <ReDirect />
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="flex md:w-[40%] pt-10 md:pt-0 flex-col gap-8"
                >
                    <Image
                        src={Setup}
                        alt="setup"
                        width={1000}
                        height={1000}
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default How;
