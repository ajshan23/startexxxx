'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Why should I choose Startex Hub for business setup in Dubai?',
    answer:
      'Startex Hub offers end-to-end business setup services backed by deep local expertise. From selecting the right jurisdiction and business license to office space solutions, visa processing, and bank account setup — we handle everything. Our personalized, transparent, and affordable approach ensures your business starts on the right foot.',
  },
  {
    question: 'What types of business licenses are available in the UAE?',
    answer:
      'There are three main types of business licenses in the UAE: Commercial (for trading businesses), Professional (for service-based activities), and Industrial (for manufacturing or industrial activities). The exact type depends on your business activity and chosen jurisdiction (Mainland, Free Zone, or Offshore).',
  },
  {
    question: 'How does Startex Hub support the company formation process in Dubai?',
    answer:
      'Startex Hub assists in choosing the best legal structure, completing documentation, securing necessary government approvals, and handling visa and licensing procedures. We simplify the formation process by offering tailored consultation and dedicated support at every stage.',
  },
  {
    question: 'What documents are needed to start a business in the UAE?',
    answer:
      'Typically, you’ll need a copy of your passport, visa or entry stamp, passport-sized photos, and a completed application form. If registering under a company name, additional documents like a business plan or shareholder agreement may be required.',
  },
  {
    question: 'How do I obtain a business license with Startex’s assistance?',
    answer:
      'We help you identify the correct business activity, jurisdiction, and license type. Then, we handle the application, approvals, and submission process on your behalf — ensuring compliance with UAE laws and regulations throughout.',
  },
  {
    question: 'Can Startex help with the visa process for my business and employees?',
    answer:
      'Yes, we offer comprehensive visa support for investors, partners, employees, and dependents. From application and medical testing to Emirates ID processing, Startex ensures a smooth and hassle-free visa experience.',
  },
  {
    question: 'Will Startex assist with opening a corporate bank account in Dubai?',
    answer:
      'Absolutely. We guide you through bank selection, documentation, and compliance requirements to open your corporate account. Our strong banking relationships help speed up the process and improve your approval chances.',
  },
  {
    question: 'What is the difference between Mainland, Free Zone, and Offshore company formation?',
    answer:
      'Mainland companies can trade across the UAE and internationally, while Free Zone entities benefit from tax exemptions but have limited onshore trading. Offshore companies are ideal for international business without a physical presence. We help you choose the right option based on your business goals.',
  },
  {
    question: 'How much does it cost to start a business in Dubai or the UAE?',
    answer:
      'Costs vary depending on business activity, location, and license type. On average, setup costs can range from AED 10,000 to AED 30,000. Startex provides transparent pricing and tailored packages to fit your budget.',
  },
  {
    question: 'Which business setup is more affordable: Mainland or Free Zone?',
    answer:
      'Free Zone setups are generally more affordable due to lower registration costs and no need for local sponsorship. However, Mainland offers more flexibility for onshore trading. We help you weigh costs against long-term benefits.',
  },
  {
    question: 'Does Startex provide local sponsorship services?',
    answer:
      'Yes, for Mainland company formation, we offer trusted local sponsorship options. Our sponsors act as silent partners, giving you 100% operational control while fulfilling UAE legal requirements.',
  },
  {
    question: 'Can Startex help me find office or commercial space in Dubai?',
    answer:
      'Definitely. Whether you need a flexi desk, executive office, warehouse, or retail space, we connect you with options that fit your budget and business model. We also handle leasing paperwork and approvals.',
  },
  {
    question: 'Do I need brand protection or trademark registration for my business?',
    answer:
      'If you want to protect your brand identity in the UAE, trademark registration is essential. Startex can guide you through the process with the Ministry of Economy to secure your brand’s legal rights.',
  },
  {
    question: 'What PRO services does Startex offer for company formation?',
    answer:
      'Our PRO services include document clearing, visa applications, license renewals, labor and immigration processing, and more. We ensure all your government interactions are handled professionally and on time.',
  },
  {
    question: 'How long does it take to set up a business in Dubai with Startex?',
    answer:
      'With proper documentation, Free Zone setups can be completed in 3–5 working days, while Mainland setups typically take 7–10 days. Our efficient process and government liaison help minimize delays.',
  },
];


export default function AbtFaq() {
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
