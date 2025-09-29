"use client"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const licenses = [
    { label: "Where to Start?", key: "where" },
    { label: "How to Start?", key: "how" },
    { label: "Why start a business?", key: "why" },

];

const licenseContent = {
    where: (
        <div className=" space-y-4 text-center">
            <p className="text-white md:text-[16px] text-[15px]">
                Startex Hub helps you set up a business in Dubai that meets all your requirements and the laws and regulations of the UAE. Economic and political stability plays a vital role in the overall progress of any region or country. Dubai has a professional approach to banking systems and industrial relations. The liberal policies adopted by the government are business-friendly. The advantage of being an open and free economy invites large-scale investments in Dubai. We, at Startex Hub, guide you through the essential formalities and their successful fulfillment through optimal business setup services.
            </p>

        </div>
    ),
    // Add other license contents below
    how: (
        <div className=" space-y-4 text-center">
            <p className="text-white md:text-[16px] text-[15px]">
                Mainland companies are business entities that are allowed to function
                and operate within the boundaries of Emirati jurisdiction that come
                under commercialized geographical regions. Obtaining a mainland license
                will be a lucrative option for investors and entrepreneurs.
            </p>

        </div>

    ),
    why: <p className="text-white">Starting a business gives you the freedom to turn your passion into profit, build financial independence, and create something truly your own. It’s a path to innovation, impact, and long-term growth.</p>,

};

export default function Tabs() {
    const [active, setActive] = useState("where");

    return (
        <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10">
            <div className="flex md:flex-wrap gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0">
                {licenses.map((license) => (
                    <motion.button
                        key={license.key}
                        onClick={() => setActive(license.key)}
                        // whileTap={{ scale: 0.95 }}
                        // animate={active === license.key ? { scale: 1.08 } : { scale: 1 }}
                        // transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`px-4 py-2 rounded text-sm font-medium transition ${active === license.key
                            ? "bg-gradient text-white shadow-lg"
                            : "bg-black border border-gray-500 text-white hover:bg-gray-800"
                            }`}
                    >
                        {license.label}
                    </motion.button>
                ))}
            </div>

            <div className="text-[18px] min-h-[80px] text-center">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
                    >
                        {licenseContent[active]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
