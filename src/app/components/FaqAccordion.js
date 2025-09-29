'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Where do I start a business in the UAE–Mainland or Freezone?',
    answer:
      'Both Mainland and Freezone have unique advantages. Mainland allows you to trade directly in the local market and take on government contracts, while Freezones offer full ownership and simplified setup. Your choice depends on your business model and target market.',
  },
  {
    question: 'Can you tell me the visa requirements for business and employees for company formation in the UAE?',
    answer:
      'Visa requirements vary depending on your business structure and location. Generally, the company license will determine how many employment visas you can apply for. Investors and owners are eligible for investor visas, while employee visas follow a quota system. A medical test and Emirates ID registration are also required.',
  },
  {
    question: 'What’s the cost of setting up a business in Dubai?',
    answer:
      'The cost of setting up a business in Dubai can range from AED 12,000 to AED 50,000 or more, depending on factors like location (Mainland or Freezone), business activity, number of visas, office space, and government fees. We can provide a detailed breakdown tailored to your needs.',
  },
  {
    question: 'What are the various costs involved in the formation of a company in Dubai?',
    answer:
      'Key costs include license fees, registration fees, visa processing, Emirates ID, medical testing, office rent, and possibly sponsorship or local service agent fees for Mainland companies. Freezones may offer package deals that bundle several of these costs together.',
  },
  {
    question: 'Is open trading possible in Dubai?',
    answer:
      'Yes, open trading is possible through a Mainland license, which allows you to operate anywhere in the UAE and internationally. However, Freezone companies are restricted from direct local trade unless they use a distributor or agent.',
  },
  {
    question: 'How can I set up a business in Dubai?',
    answer:
      'To set up a business in Dubai, you’ll need to choose your business activity, decide between Mainland and Freezone, reserve a trade name, obtain initial approvals, register the company, and secure a business license. Our consultants can guide you through each step smoothly.',
  },
  {
    question: 'Are there any legal complexities for setting up a business in Dubai?',
    answer:
      'While Dubai offers a business-friendly environment, legal complexities can arise around licensing, visas, ownership structures, and compliance. It’s important to work with experienced consultants to ensure all requirements are properly met and avoid costly delays.',
  },
];


export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative  px-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="text-white py-4 border-b border-white/10 last:border-none"
        >
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <h4 className="font-[400] max-w-[90%] text-left">
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
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden pr-6"
              >
                <p className="text-sm text-white/80 mt-3">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
