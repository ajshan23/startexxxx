'use client';
import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const visaIncrement = 2000; // Change this value as needed

const packagesData = [
  {
    title: "MEYDAN",
    price: "12500",
    checklist: [
      "An Exclusive Dubai Govt. Initiated Freezone ",
      "Trade Name Will Be Issued with the Suffix LLC Fz",
      "No NOC Required",
      "Shared Desk",
      "Multiple Activity Groups",
    ],
  },
  {
    title: "IFZA",
    price: "12400",
    checklist: [
      "100% Ownership",
      "Dubai Freezone",
      "Trade License Cost",
      "Free Activity Consultation",
      "Lowest Cost Dubai Freezone",
    ],
  },
  {
    title: "SRTIP PACKAGES",
    price: "5000",
    checklist: [
      "Multiple Shareholders",
      "Multiple Activities",
      "100% Ownership",
      "Free Digital Banking",
      "Full Startex Hub concierge support",
    ],
  },
  {
    title: "RAKEZ",
    price: "5510",
    checklist: [
      "100% Ownership",
      "Multiple shareholders",
      "Multiple activities",
      "1 year License",
      "Full Startex Hub concierge support",
    ],
  },
  {
    title: "Shams Freezone",
    price: "5750",
    checklist: [
      "100% Ownership",
      "5 Activities",
      "Trade Name Will Be Issued With Suffix LLC",
      "Free Activity Consultation",
      "Full Startex Hub concierge support",
    ],
  },
];

const PricingCard = ({ title, price, checklist }) => {
  const [enabled, setEnabled] = useState(false);
  const basePrice = Number(price);
  const displayPrice = enabled ? basePrice + visaIncrement : basePrice;

  return (
    <motion.div
      className="rounded-xl border p-6 md:p-8 lg:p-8 w-full max-w-sm bg-gradient-to-b from-[#1c1c1c] to-[#101010] text-white h-[350px] flex flex-col"
      variants={cardVariants}
    >
      <div>
        <h3 className=' pb-2 text-[22px] font-semibold'>{title}</h3>
        <div className="flex items-center justify-between mb-4 gap-2">
          <h2 className="text-gradient font-semibold text-xl md:text-2xl">AED {displayPrice}</h2>
          <div className="flex items-center">
          <span className="text-sm pr-2">{enabled ? 'With Visa' : 'Without Visa'}</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-[#FF5A41]' : 'bg-gray-700'}
              relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                enabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </Switch>
          
          </div>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-white/90 text-left w-full max-w-xs mx-auto mt-4">
        {checklist.map((feature, idx) => (
          <li key={idx} className="list-disc list-inside">{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function PricingCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {packagesData.map((pkg, idx) => (
        <PricingCard key={pkg.title} title={pkg.title} price={pkg.price} checklist={pkg.checklist} />
      ))}
    </motion.div>
  );
}
