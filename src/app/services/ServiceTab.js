'use client';

import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import VerticalSlider from '../components/VerticalSlider';
import ScheduleChat from '../components/ScheduleChat';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqData = [
    {
        question: 'Guidance for Business Setup',
        answer: 'Starting a business in the UAE can be complex, but our experts guide you step-by-step—from choosing the right business activity and jurisdiction to completing licensing procedures. We handle the technicalities so you can focus on your vision.',
    },
    {
        question: 'Understanding Legal Requirements',
        answer: 'Navigating legal formalities such as licensing, local sponsorship, and regulatory approvals is crucial. Our consultants ensure full compliance with UAE laws, helping you avoid legal pitfalls and streamline your business setup.',
    },
    {
        question: 'Clear Cost Breakdown & Advisory',
        answer: 'We provide a transparent and detailed breakdown of all costs involved in setting up your business—license fees, office space, visa charges, and more—so you can make informed decisions and plan your budget effectively.',
    },
    {
        question: 'Overcoming Initial Challenges',
        answer: 'Many new businesses face early challenges like finding the right local sponsor, office space, or understanding visa processes. Our team anticipates these roadblocks and resolves them swiftly to ensure a smooth launch.',
    },
    {
        question: 'Seamless Registration & Launch',
        answer: 'We take care of all the paperwork, government approvals, and registration formalities, ensuring your business is legally operational with minimal delay. Our end-to-end support guarantees a hassle-free experience from start to finish.',
    },
];

function ServiceTab() {
    const [activeIndex, setActiveIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className='pt-0 md:pt-10 pb-10'
        >
            <div className='md:flex'>
                <div className='md:w-[60%] pe-10 md:pt-0 pt-5'>
                    <h4 className='md:text-[25px] text-[18px] font-[400] text-white'>
                        How Business Consultants Can Help You with Your New Business?
                    </h4>
                    <p className='font-[200] text-white text-[15px] pt-5'>
                        Hiring a business consultant in the UAE will augment your chances of success. They act as the supporting pillars for your firm. Professional business consultants constantly observe the business world and have ample insight into the UAE business arena. Thus, they can guide you in ascertaining the changing winds and help you formulate better strategies.
                    </p>

                    <div className="relative pt-10">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="text-white py-4 border-b border-white/10 last:border-none"
                            >
                                <div
                                    className="flex justify-between items-start cursor-pointer"
                                    onClick={() => toggleIndex(index)}
                                >
                                    <h4 className="font-semibold max-w-[90%] text-left">
                                        {item.question}
                                    </h4>
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
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <p className="text-sm text-white/80 mt-3 pr-8">{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex md:w-[40%] pt-10 md:pt-0 flex-col gap-8">
                    {/* Consultants */}
                    <VerticalSlider />

                    {/* Chat Box */}
                    <ScheduleChat />
                </div>
            </div>
        </motion.div>
    );
}

export default ServiceTab;
