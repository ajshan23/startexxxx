"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

function MainlandTabs() {
  const [active, setActive] = useState("mainland") // 👈 default tab

  const licenses = [
    { key: "mainland", label: "Prerequisites" },
    { key: "freezone", label: "Benefits" },
    { key: "offshore", label: "Documents Required" },
    { key: "commercial", label: "Company setup" },
   
  ]

  const licenseContent = {
    mainland: (
      <div className="space-y-4 text-center">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "A professional or commercial license is required to set up a mainland company in Dubai.",
            "Mainland companies are required to appoint at least one director before starting company activities.",
            "The physical presence of the investor or the shareholder in the UAE is optional at the time of initial approval.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-left"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

    freezone: (
      <div className="space-y-4 text-center">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Mainland businesses are free to operate nationwide, unlike free zones or offshore companies that have restricted jurisdiction.",
            "These companies are exempt from corporate and income taxes, which allow them to enjoy substantial financial benefits.",
            "UAE’s business-friendly environment, absence of restrictions on currency exchange, and culture that encourages expansion facilitate international exposure.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-center"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

    offshore: (
         <div className="space-y-4 text-left">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Application for a business license",
            "Duly attested LLC agreement",
            "Copy of passport",
            "Passport-size photographs",
            "Article of Association (AOA)",
            "Tenancy contract",
            "Memorandum of Association (MOA)",



          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-left"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

    commercial: (
        <div className="space-y-4 text-left">
        <ul className="list-none space-y-2 pt-5 text-white md:text-[16px] text-[15px] max-w-[800px] mx-auto">
          {[
            "Mainland company licenses are issued by the Department of Economy and Tourism (DET).",
            "The Department of Economic Development processes applications for the perusal, approval, and issuance of business licenses.",
            "Finalize operations and appropriate location before formation.",
            "Obtain approvals for the license and follow naming policies.",
            "Mainland companies are permitted to hire foreign employees depending on the company size.",
            "A corporate bank account is necessary for business operations.",
  



          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-start space-x-4 justify-start"
            >
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
              <span className="text-left max-w-4xl">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),

 
  }

  return (
    <div className="px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10">
      <motion.h3
        className="text-gradient md:text-[50px] text-[27px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Things you should know
      </motion.h3>

      <div className="flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0">
        {licenses.map((license) => (
          <motion.button
            key={license.key}
            onClick={() => setActive(license.key)}
            className={`relative px-4 py-2 rounded text-sm font-medium transition ${
              active === license.key ? "text-white" : "bg-black border border-gray-500 text-white hover:bg-gray-800"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background for active tab */}
            {active === license.key && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-gradient rounded"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}

            {/* Tab label */}
            <span className="relative z-10">{license.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="text-[18px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            {licenseContent[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MainlandTabs
