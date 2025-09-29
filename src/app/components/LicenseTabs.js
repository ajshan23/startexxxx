"use client"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const licenses = [
    { label: "Free Zone License", key: "freezone" },
    { label: "Mainland License", key: "mainland" },
    { label: "Offshore License", key: "offshore" },
    { label: "Commercial License", key: "commercial" },
    { label: "Professional License", key: "professional" },
    { label: "Industrial License", key: "industrial" },
    { label: "Tourism License", key: "tourism" },
];

const licenseContent = {
    mainland: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Mainland License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Mainland companies are business entities that are allowed to function
                and operate within the boundaries of Emirati jurisdiction that come
                under commercialized geographical regions. Obtaining a mainland license
                will be a lucrative option for investors and entrepreneurs.
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]">
                <li>
                    Non-GCC nationals require a local sponsor or service agent to obtain
                    a mainland license.
                </li>
                <li>
                    Companies that own a mainland license can bid for government contracts
                    and projects.
                </li>
                <li>
                    Businesses can own or rent office spaces anywhere in Dubai.
                </li>
            </ul>
        </div>
    ),
    freezone: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Free Zone License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Free Zone licenses allow companies to operate within designated economic
                zones offering benefits like full foreign ownership, tax exemptions, and
                simplified customs procedures—ideal for startups and global firms.
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]">
                <li>
                    100% foreign ownership with no need for a local sponsor.
                </li>
                <li>
                    Tax exemptions on corporate and personal income.
                </li>
                <li>
                    Easy repatriation of capital and profits.
                </li>
            </ul>
        </div>
    ),
    offshore: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Offshore License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Offshore licenses are ideal for businesses intending to operate outside the UAE
                while enjoying asset protection, confidentiality, and tax planning benefits.
            </p>
        </div>
    ),
    commercial: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Commercial License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                A commercial license permits trading activities, including import, export,
                and sales of goods. It suits wholesalers, retailers, and distribution firms.
            </p>
        </div>
    ),
    professional: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Professional License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                A professional license is issued to individuals or companies offering
                professional services like consultancy, IT, legal, and education services.
            </p>
        </div>
    ),
    industrial: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Industrial License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                Industrial licenses are for companies involved in manufacturing or
                industrial activities such as production, packaging, or assembly.
            </p>
        </div>
    ),
    tourism: (
        <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold text-white">Tourism License</h3>
            <p className="text-white md:text-[16px] text-[15px]">
                A tourism license is essential for businesses operating in the travel and
                tourism sector, including tour operators, travel agencies, and hospitality firms.
            </p>
        </div>
    ),
};


export default function LicenseTabs() {
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
