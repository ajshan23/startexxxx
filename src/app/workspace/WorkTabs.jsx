"use client"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const licenses = [
    { label: "Free Zone Workspace", key: "freezone" },
    { label: "Mainland Workspace", key: "mainland" },
    { label: "Offshore Setup", key: "offshore" },
    { label: "Commercial Space", key: "commercial" },
    { label: "Professional Space", key: "professional" },
    { label: "Industrial Space", key: "industrial" },
    { label: "Tourism Hub Access", key: "tourism" },
];

const licenseContent = {
    mainland: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Benefits of Mainland Workspaces</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Choosing a workspace in the mainland offers full access to Dubai’s local market
                and proximity to clients, partners, and government institutions. It’s ideal for businesses 
                wanting a physical presence and expansion within the UAE.
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]">
                <li>Freedom to operate across all of Dubai and the UAE.</li>
                <li>Ideal for businesses targeting both B2B and B2C markets.</li>
                <li>Can lease office space in premium business districts.</li>
            </ul>
        </div>
    ),
    freezone: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Benefits of Free Zone Workspaces</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Workspaces in Dubai’s free zones offer business-friendly infrastructure, international 
                connectivity, and incentives like 100% foreign ownership and no personal income tax.
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]">
                <li>Modern office solutions with flexible lease terms.</li>
                <li>Business setup and operations made easy with one-stop shops.</li>
                <li>Attractive to tech firms, startups, and international companies.</li>
            </ul>
        </div>
    ),
    offshore: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Offshore Setup & Remote Workspace</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                While offshore companies don’t need a physical office in the UAE, they benefit from Dubai’s 
                prestige, global reputation, and virtual workspace solutions for administration and client communication.
            </p>
        </div>
    ),
    commercial: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Commercial Workspaces</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Commercial spaces in Dubai are tailored for retailers, traders, and distributors looking to run
                physical storefronts, showrooms, or logistic centers in prime locations.
            </p>
        </div>
    ),
    professional: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Professional Workspaces</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Designed for consultants, freelancers, and service providers, these offices offer affordable, 
                flexible work environments with easy licensing options and shared amenities.
            </p>
        </div>
    ),
    industrial: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Industrial Workspaces</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Dubai offers fully equipped warehouses and manufacturing zones with large-scale infrastructure, 
                ideal for production units, storage, and assembly operations with logistic access.
            </p>
        </div>
    ),
    tourism: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Tourism-Focused Business Spaces</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                For those in the tourism and hospitality sectors, Dubai provides world-class spaces near key 
                attractions, airports, and hotel zones, perfect for agencies, tour operators, and event planners.
            </p>
        </div>
    ),
};



export default function WorkTabs() {
    const [active, setActive] = useState("freezone");

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
            <div className="text-[18px] min-h-[120px] text-center">
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
